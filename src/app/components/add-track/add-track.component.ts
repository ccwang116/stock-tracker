import { Component, EventEmitter, Output } from '@angular/core';
import { Track } from 'src/app/models/Track';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.css'],
})
export class AddTrackComponent {
  @Output() onAddTrack: EventEmitter<Partial<Track>> = new EventEmitter();
  stockId: string = '';
  tracePrice: string = '';
  onSubmit() {
    if (!this.stockId || !this.tracePrice) {
      alert('required stock');
      return;
    }
    const newTrack = {
      stockId: this.stockId,
      tracePrice: [+this.tracePrice],
    };

    this.onAddTrack.emit(newTrack);

    this.stockId = '';
    this.tracePrice = '';
  }
}
