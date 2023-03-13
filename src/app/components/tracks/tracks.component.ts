import { Component, OnInit } from '@angular/core';
import { TRACKLIST } from 'src/app/mock-track-list';
import { Track } from 'src/app/models/Track';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent implements OnInit {
  tracks: Track[] = [];
  constructor(private trackService: TrackService) {}
  ngOnInit(): void {
    this.trackService
      .getTrackList()
      .subscribe((tracks) => (this.tracks = tracks));
  }
  deleteTrackNumber(trackId: number): void {
    this.trackService
      .deleteTrackNumber(trackId)
      .subscribe(
        (tracks) =>
          (this.tracks = this.tracks.filter((stock) => stock.id !== trackId))
      );
  }
  addTrack(track: Partial<Track>) {
    this.trackService.addTrack(track).subscribe((res) => this.tracks.push(res));
  }
}
