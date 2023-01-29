import { Component } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller-front';

  username: string = '';
  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private oauthService: OAuthService, private messageService: MessageService){
    this.configure();
  }

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080/realms/taller-keycloak',
    redirectUri: window.location.origin,
    clientId: 'taller-frontend',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };

  configure(): void{
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler;
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocument().then(() => this.oauthService.tryLogin())
    .then(()=>{
      if(this.oauthService.getIdentityClaims()){
        this.isLogged = this.getIsLogged();
        this.isAdmin = this.getIsAdmin();
        this.username = this.getUserName();
        this.messageService.sendMessage(this.getUserName());
      }
    });
  }

  public getIsLogged(): boolean{
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getUserName(): string{
    return this.oauthService.getIdentityClaims()[`preferred_username`];
  }

  public getIsAdmin(): boolean {
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodeJson = atob(payload);
    const payloadDecoded = JSON.parse(payloadDecodeJson);
    console.log(payloadDecoded.realm_access.roles);
    return payloadDecoded.realm_access.roles.indexOf('realm-admin') !== -1;
  }
}
