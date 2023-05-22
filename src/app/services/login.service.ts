import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import {Buffer} from "buffer";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private oauthService: OAuthService) { }

  public login(): void {
    this.oauthService.initImplicitFlowInternal();
  }

  public logout(): void {
    this.oauthService.logOut();
  }

  public getIsLogged(): boolean{
    return (this.oauthService.hasValidIdToken() && this.oauthService.hasValidAccessToken());
  }

  public getUserName(): string{
    return this.oauthService.getIdentityClaims()[`preferred_username`];
  }

  public getIsAdmin(): boolean {
    const roles: string[] = this.getRoles();
    return roles.includes('realm-admin');
  }

  public getRoles(): string[]{
    const token = this.oauthService.getAccessToken();
    const payload = token.split('.')[1];
    const payloadDecodeJson = Buffer.from(payload,"base64").toString();
    const payloadDecoded = JSON.parse(payloadDecodeJson);
    return payloadDecoded.realm_access.roles;
  }

  public getUserId(): string{
    const item: string | any = sessionStorage.getItem("id_token_claims_obj");
    const parse = JSON.parse(item);
    const userId:string = parse['sub'];
    console.log(userId);
    return userId;
  }
}
