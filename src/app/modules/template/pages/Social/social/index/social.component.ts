import { Component, OnInit } from '@angular/core';
import { Post, MenuItem } from '../../interfaces/post.interface';
import { FinancialService } from '../../services/financial.service';
import { NewsItem, StockItem } from '../../interfaces/financial.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

/**
 * 社交頁面組件
 * @class SocialComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  providers: [FinancialService]
})

export class SocialComponent implements OnInit {
  defaultAvatar = 'assets/images/default-avatar.png'; // 預設頭像
  /** 儲存所有貼文的陣列 */
  posts: Post[] = [];

  /** 新貼文的內容 */
  newPostContent: string = '';
  financialNews: NewsItem[] = [];
  stockData: StockItem[] = [];
  newsData: NewsItem[] = [];  // 確保這個屬性被正確宣告
  isLoading = false;
  error: string | null = null;

  /**
   * 側邊欄選單項目
   * @property {MenuItem[]} menuItems - 選單項目陣列
   */
  menuItems: MenuItem[] = [
    { icon: 'pi pi-home', label: '最新動態', active: true },
    { icon: 'pi pi-star', label: '熱門話題', active: false },
    { icon: 'pi pi-users', label: '追蹤中', active: false },
    { icon: 'pi pi-bookmark', label: '已儲存', active: false },
    { icon: 'pi pi-search', label: '探索', active: false },
    { icon: 'pi pi-cog', label: '設定', active: false }
  ];


  /**
   * 組件初始化時執行
   * 模擬從後端獲取貼文數據
   * @method ngOnInit
   */
  constructor(private financialService: FinancialService) {

  }
  ngOnInit() {
    this.loadFinancialData();


    // 初始化模擬貼文數據
    this.posts = [
      {
        id: 1,
        userName: 'Anna Sthesia',
        userAvatar: this.defaultAvatar,
        timePosted: 'Just Now',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: 15,
        comments: 5,
        isLiked: false
      },
      {
        id: 2,
        userName: 'hiro',
        userAvatar: this.defaultAvatar,
        timePosted: 'Just Now',
        content: 'Hello world',
        likes: 10,
        comments: 100,
        isLiked:  true
      },
      {
        id: 3,
        userName: '123',
        userAvatar: this.defaultAvatar,
        timePosted: '2024/10/29',
        content: 'Cat is cute',
        likes: 999,
        comments: 100,
        isLiked:  true
      }
      // 可以添加更多貼文
    ];
  }

  /**
   * 創建新貼文
   * 檢查內容不為空時才創建新貼文
   * @method createPost
   */
  createPost() {
    if (this.newPostContent.trim()) {
      const newPost: Post = {
        id: this.posts.length + 1,
        userName: '當前用戶',
        userAvatar: this.defaultAvatar,
        timePosted: 'Just Now',
        content: this.newPostContent,
        likes: 0,
        comments: 0,
        isLiked: false
      };
      this.posts.unshift(newPost);
      this.newPostContent = '';
    }
  }

  /**
   * 選擇側邊欄選單項目
   * @method selectMenuItem
   * @param {number} index - 被選中項目的索引
   */
  selectMenuItem(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.active = i === index;
    });
  }

  /**
   * 處理貼文內容變更
   * @method onContentChange
   * @param {string} value - 新的貼文內容
   */
  onContentChange(value: string) {
    this.newPostContent = value;
  }

  likePost(post: Post) {
    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;
  }

  addComment(post: Post) {
    if (post.newComment?.trim()) {
      if (!post.commentList) {
        post.commentList = [];
      }

      post.commentList.push({
        userName: '當前用戶',
        text: post.newComment,
        time: 'Just now'
      });

      post.comments++;
      post.newComment = '';
    }
  }
loadFinancialData(): void {
    this.isLoading = true;
    this.error = null;

    const symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META'];

    forkJoin({
      stocks: this.financialService.getMultipleStocks(symbols),
      news: this.financialService.getMarketNews()
    }).subscribe({
      next: (data) => {
        this.stockData = data.stocks;
        this.newsData = data.news.news;
        this.isLoading = false;
      },
      error: (error: Error) => {
        console.error('Error loading financial data:', error);
        this.error = error.message;
        this.isLoading = false;

      }
    });
  }

  formatDate(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleDateString('zh-TW');
  }

  formatPriceChange(change: number): string {
    return change > 0 ? `+${change.toFixed(2)}` : change.toFixed(2);
  }

  formatMarketTime(time?: Date): string {
    if (!time) return '';
    return time.toLocaleString('zh-TW');
  }
}
