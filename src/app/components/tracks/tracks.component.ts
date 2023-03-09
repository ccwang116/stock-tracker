import { Component, OnInit } from '@angular/core';
import { TRACKLIST } from 'src/app/mock-track-list';
import { Track } from 'src/app/models/Track';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent implements OnInit {
  tracks: Track[] = TRACKLIST;
  constructor() {}
  ngOnInit(): void {}
}
