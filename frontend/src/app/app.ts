import { Component, signal } from '@angular/core';
import { PortfolioComponent } from './portfolio-component/portfolio-component';

@Component({
  selector: 'app-root',
  imports: [PortfolioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
