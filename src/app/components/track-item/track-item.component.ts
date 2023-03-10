import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Track } from 'src/app/models/Track';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.css'],
})
export class TrackItemComponent {
  @Input() track: Track = { id: 0, stockId: '000', tracePrice: [0] };
  @Output() onDeleteTrackNumber: EventEmitter<number> = new EventEmitter();
  onDelete(trackId: number) {
    this.onDeleteTrackNumber.emit(trackId);
  }
}
