import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule, provideOAuthClient } from 'angular-oauth2-oidc';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './user/lista/lista.component';
import { DetailComponent } from './user/detail/detail.component';
import { CreateComponent } from './user/create/create.component';
import { UpdateComponent } from './user/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ListaComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['/person'],
        sendAccessToken: true
    }
    })
  ],
  providers: [
    provideHttpClient(),
    provideOAuthClient()
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }