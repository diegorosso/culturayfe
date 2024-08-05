import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('hoverVideo', { static: true }) hoverVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const videoElement = this.hoverVideo.nativeElement;

    videoElement.addEventListener('mouseover', () => {
      videoElement.play();
    });

    videoElement.addEventListener('mouseout', () => {
      videoElement.pause();
      videoElement.currentTime = 0; // Reiniciar el video al principio si se desea
    });
  }
}
