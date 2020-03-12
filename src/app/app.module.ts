import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { AppFooterMenuComponent } from './components/app-footer-menu/app-footer-menu.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { SideBottomMenuComponent } from './components/side-bottom-menu/side-bottom-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './components/main/auth/auth.component';
import { HomeComponent } from './components/main/home/home.component';
import { CategoriesComponent } from './components/main/categories/categories.component';
import { ChoreographiesComponent } from './components/main/choreographies/choreographies.component';
import { PageNotFoundComponent } from './components/main/page-not-found/page-not-found.component';
import { BaseComponent } from './components/main/base/base.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';


import { LoginComponent } from './components/main/auth/login/login.component';
import { RegisterComponent } from './components/main/auth/register/register.component';
import { CategoryCardComponent } from './components/main/categories/category-card/category-card.component';
import { FilterCategoriesComponent } from './components/main/categories/filter-categories/filter-categories.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'choreographies/:id',      component: ChoreographiesComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppFooterMenuComponent,
    AppContentComponent,
    SideBottomMenuComponent,
    AuthComponent,
    HomeComponent,
    CategoriesComponent,
    ChoreographiesComponent,
    PageNotFoundComponent,
    BaseComponent,
    LoginComponent,
    RegisterComponent,
    CategoryCardComponent,
    FilterCategoriesComponent
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
