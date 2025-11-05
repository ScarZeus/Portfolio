import { Component, signal } from '@angular/core';
import { PortfolioComponent } from './portfolio-component/portfolio-component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [PortfolioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Kevin Gladson');
}
