import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NoteResponseDTO} from './types';

@Service()
export class NoteService {
  private http = inject(HttpClient);

  // NoteResponseDto return edecek
  getNote(id: number): Observable<NoteResponseDTO> {
    return this.http.get<NoteResponseDTO>(`/notes/${id}`);
  }

  getNoteList(): Observable<NoteResponseDTO[]> {
    return this.http.get<NoteResponseDTO[]>(`/notes`);
  }

  addNote(): void {

  }

  updateNote(): void {

  }

  deleteNote(id: number) {

  }
}
