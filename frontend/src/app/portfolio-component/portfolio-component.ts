import { Component } from '@angular/core';
import { Header } from '../header/header';
import { HeroSection } from '../hero-section/hero-section';
import { AboutSection } from '../about-section/about-section';
import { SkillsSection } from '../skills-section/skills-section';
import { AmongusBackground } from '../amongus-background/amongus-background';

@Component({
  selector: 'app-portfolio-component',
  imports: [Header,HeroSection,AboutSection,SkillsSection,AmongusBackground],
  templateUrl: './portfolio-component.html',
  styleUrl: './portfolio-component.css',
})
export class PortfolioComponent {

}
