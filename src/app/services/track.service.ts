import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models/Track';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private apiUrl = 'http://localhost:5000/tracks';
  constructor(private http: HttpClient) {}
  getTrackList(): Observable<Track[]> {
    return this.http.get<Track[]>(this.apiUrl);
  }
  deleteTrackNumber(trackId: number): Observable<Track[]> {
    const url = this.apiUrl + '/' + trackId;
    return this.http.delete<Track[]>(url);
  }
  addTrack(track: Partial<Track>): Observable<Track> {
    return this.http.post<Track>(this.apiUrl, track);
  }
}
