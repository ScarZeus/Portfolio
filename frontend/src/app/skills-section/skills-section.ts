import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skills } from '../models/skills';

@Component({
  selector: 'app-skills-section',
  imports: [CommonModule],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css',
})
export class SkillsSection {
  SkillsList: Skills[] =[
  { id: 1, imageRef: 'assets/skills/spring.png', title: 'Spring',
    funnyQuote: "Spring Boot: My go-to engine for scalable, production-ready backends." },

  { id: 2, imageRef: 'assets/skills/docker.png', title: 'Docker',
    funnyQuote: "Docker: Packaging my apps so they behave the same everywhere." },

  { id: 3, imageRef: 'assets/skills/git.png', title: 'Git',
    funnyQuote: "Git: Saving me from my own mistakes since day one." },

  { id: 4, imageRef: 'assets/skills/github.png', title: 'GitHub',
    funnyQuote: "GitHub: Where my code lives… and occasionally cries." },

  { id: 5, imageRef: 'assets/skills/java.png', title: 'Java',
    funnyQuote: "Java: Powering robust backends with the energy of a thousand JVMs." },

  { id: 6, imageRef: 'assets/skills/angular.png', title: 'Angular',
    funnyQuote: "Angular: I respect it… from the server-side." },

  { id: 7, imageRef: 'assets/skills/html.png', title: 'HTML',
    funnyQuote: "HTML: The only frontend thing I still willingly touch." },

  { id: 8, imageRef: 'assets/skills/css.png', title: 'CSS',
    funnyQuote: "CSS: Backend devs fear it more than production outages." },

  { id: 9, imageRef: 'assets/skills/typescript.png', title: 'TypeScript',
    funnyQuote: "TypeScript: Turning my backend Node code into disciplined citizens." },

  { id: 10, imageRef: 'assets/skills/redis.png', title: 'Redis',
    funnyQuote: "Redis: Because milliseconds matter and RAM is faster than feelings." },

  { id: 11, imageRef: 'assets/skills/postgres.png', title: 'PostgreSQL',
    funnyQuote: "PostgreSQL: The reliable database that never ghosts me." },

  { id: 12, imageRef: 'assets/skills/kafka.png', title: 'Kafka',
    funnyQuote: "Kafka: Turning event streams into pure backend magic." }
]
}
