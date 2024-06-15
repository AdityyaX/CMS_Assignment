// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleCreateEditComponent } from './article-create-edit/article-create-edit.component';

@NgModule({
    declarations: [
        UserLoginComponent,
        DashboardComponent,
        ArticleListComponent,
        ArticleDetailsComponent,
        ArticleCreateEditComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    UserRegistrationComponent,
    AppComponent,
  ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        UserRegistrationComponent
    ]
})
export class AppModule {}
