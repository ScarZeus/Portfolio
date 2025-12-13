import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FullscreenService {

  enter(element: HTMLElement = document.documentElement): void {
    if (document.fullscreenElement) return;

    element.requestFullscreen().catch(err => {
      console.error('Fullscreen failed:', err);
    });
  }

  exit(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  }

  toggle(element?: HTMLElement): void {
    document.fullscreenElement ? this.exit() : this.enter(element);
  }

  isFullscreen(): boolean {
    return !!document.fullscreenElement;
  }
}
