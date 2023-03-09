import { Component, Input } from '@angular/core';
import { Track } from 'src/app/models/Track';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.css'],
})
export class TrackItemComponent {
  @Input() track: Track = { stockId: '000', tracePrice: [0] };
}
