import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDTO} from './types';

@Service()
export class UserService {
  private http = inject(HttpClient);

  getUser(id: string): Observable<UserDTO> {
    return this.http.get<UserDTO>(`/api/users/${id}`);
  }
}
