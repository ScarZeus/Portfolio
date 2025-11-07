import { Component } from '@angular/core';
import { Header } from '../header/header';
import { HeroSection } from '../hero-section/hero-section';
import { AboutSection } from '../about-section/about-section';

@Component({
  selector: 'app-portfolio-component',
  imports: [Header,HeroSection,AboutSection],
  templateUrl: './portfolio-component.html',
  styleUrl: './portfolio-component.css',
})
export class PortfolioComponent {

}
