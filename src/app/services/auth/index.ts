import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequestDTO, LoginResponseDTO, RegisterRequestDTO, RegisterResponseDTO} from './types';
import {Observable, tap} from 'rxjs';
import {Router} from '@angular/router';

@Service()
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  login(credentials: LoginRequestDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>("/auth/login", credentials).pipe(
      tap(async (res: LoginResponseDTO) => {
        localStorage.setItem('accessToken', res.accessToken);
        localStorage.setItem('refreshToken', res.refreshToken);
        await this.router.navigate(['/']);
      })
    );
  }

  register(credentials: RegisterRequestDTO): Observable<RegisterResponseDTO> {
    return this.http.post<RegisterResponseDTO>("/auth/register", credentials);
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  isAuthenticated() {
    return !!this.getAccessToken();
  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}
