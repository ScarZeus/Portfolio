import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsModel } from '../models/projects-model';

@Component({
  selector: 'app-projects-section',
  imports: [CommonModule],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSection {
    projectsList: ProjectsModel[] = [
        {
          title: 'Portfolio Website',
          description: 'A personal portfolio website showcasing my skills and projects.',
          imageRef: 'assets/images/portfolio.png',
          githubLink: '',
          id: 0
        },
        {
          title: 'Portfolio Website',
          description: 'A personal portfolio website showcasing my skills and projects.',
          imageRef: 'assets/images/portfolio.png',
          githubLink: '',
          id: 2
        }
    ];
}
