import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      ShoppingListModule,
      BrowserModule.withServerTransition({appId: 'Mealprep-helper'}),
      AuthModule,
      AppRoutingModule,
      HttpClientModule,
      SharedModule,
      StoreModule.forRoot({shoppingList: shoppingListReducer}),
      CoreModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
