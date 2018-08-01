import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SyncService } from './sync/sync.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SyncService]
})
export class AppComponent implements OnInit {
  title = 'Mealprep Helper';


  ngOnInit() {
    this.syncSrv.syncOnAppLoad();
  }

  constructor(private router: Router, private syncSrv: SyncService) {}
}
