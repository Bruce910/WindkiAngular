import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { GoogleMapsModule, MapInfoWindow } from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maindetail',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, RouterModule],
  templateUrl: './maindetail.component.html',
  styleUrls: ['./maindetail.component.css']
})
export class MaindetailComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  apiLoaded: Observable<boolean>;

  center: google.maps.LatLngLiteral = {
    lat: 25.0330,
    lng: 121.5654
  };

  options: google.maps.MapOptions = {
    zoom: 12,
    maxZoom: 15,
    minZoom: 8
  };

  markerPosition: google.maps.LatLngLiteral = {
    lat: 25.0330,
    lng: 121.5654
  };

  markerTitle: string = "台北市中心";

  constructor(httpClient: HttpClient,
    private router: Router
  ) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAVCDcCRj_MRVQmZ9a2afJF8AM1MIdFmLc', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit() {
    // 不需要額外的初始化代碼
  }

   handleCardClick(district: string, name: string, service: string, points: number) {
    console.log(`區域: ${district}, 姓名: ${name}, 服務: ${service}, 點數: ${points}`);
    // 這裡可以添加您的處理邏輯
  }


  navigateToSearch() {
    this.router.navigate(['/help/makesure']);
  }
}
