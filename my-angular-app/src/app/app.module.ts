import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('YOUR_GOOGLE_CLIENT_ID')
        }
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }