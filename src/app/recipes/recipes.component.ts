import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from './recipe.service';
import { SyncService } from '../sync/sync.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit, OnDestroy {


  constructor(private syncSrv: SyncService) { }


  ngOnInit() {
    this.syncSrv.syncOnAppLoad();
  }

  ngOnDestroy() {
    this.syncSrv.onRecipesClosed();
  }

}
