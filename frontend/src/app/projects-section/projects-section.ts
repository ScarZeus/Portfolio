import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsModel } from '../models/projects-model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-section',
  imports: [CommonModule],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css',
})
export class ProjectsSection {
  
  projectsListSanitized: {
    id: number;
    imageRef: SafeResourceUrl;
    title: string;
    description: string;
    githubLink: string;
  }[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  projectsList: ProjectsModel[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my skills and projects.',
      imageRef: 'https://drive.google.com/uc?export=view&id=1LWLb0beFwNK3vqxEoCsVK3NlnnAROA3h',
      githubLink: '',
      id: 0
    }
  ];

  ngOnInit(): void {
    this.projectsListSanitized = this.projectsList.map(project => ({
      ...project,
      imageRef: this.sanitizer.bypassSecurityTrustResourceUrl(project.imageRef)
    }));
  }
}
