import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SyncService } from './sync/sync.service';
import * as firebase from 'firebase';
import { config } from './firebase-setup';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SyncService]
})
export class AppComponent implements OnInit {
  title = 'Mealprep Helper';


  ngOnInit() {

    const { apiKey, authDomain} = config;

    firebase.initializeApp({apiKey, authDomain});
    this.authService.initialize();
  }

  constructor(private router: Router, private syncSrv: SyncService,
    private authService: AuthService) {}
}
