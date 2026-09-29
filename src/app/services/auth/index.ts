import { Service } from '@angular/core';
import Keycloak from 'keycloak-js';

@Service()
export class AuthService {
  private keycloak: Keycloak = new Keycloak({
    url: "https://auth.sticky-note.tech",
    realm: "stickynote-realm",
    clientId: "stickynote-fe-client",
  });

  async initKeycloak() {
    try {
      const authenticated = await this.keycloak.init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      });
      if (authenticated) {
        console.log('User is authenticated');
      } else {
        console.log('User is not authenticated');
      }
    } catch (error) {
      console.error('Failed to initialize adapter:', error);
    }
  }

  isAuthenticated(): boolean {
    return !!this.keycloak.token;
  }

  login() {
    this.keycloak.login();
  }
}
