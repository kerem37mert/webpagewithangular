import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequestDTO, LoginResponseDTO, RegisterRequestDTO, RegisterResponseDTO} from './types';
import {Observable} from 'rxjs';

@Service()
export class AuthService {
  private http = inject(HttpClient);

  login(credentials: LoginRequestDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>("/api/auth/login", credentials);
  }

  register(credentials: RegisterRequestDTO): Observable<RegisterResponseDTO> {
    return this.http.post<RegisterResponseDTO>("/api/auth/register", credentials);
  }
}
