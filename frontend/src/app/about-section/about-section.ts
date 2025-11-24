import { Component } from '@angular/core';
import { ExperienceModel } from '../models/experience-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
    aboutDescription: string = "I like turning ideas into things that actually work."+
     "When I'm building something, I care about clarity — in code, in design, and in how users experience it."+
     " I don’t chase trends or stack logos; I focus on solving the problem in front of me with the most straightforward, "+
     "maintainable approach. Every project teaches me something, "+
     "and I enjoy the process of improving the system a little more than the day before.";


     experiences: ExperienceModel[] = [
      {
        id:1,
        role: "Software Developer Intern",
        company: "Flutter Software Solutions",
        startYear: 'January 2024',
        endYear: 'February 2024',
        description: "Worked on building and improving application logic in Flutter, including creating and optimizing Cloud Functions to handle backend workflows and automate key processes within the application."
      },
      {
        id:2,
        role: "Software Developer Intern",
        company: "Flutter Software Solutions",
        startYear: 'June 2025',
        endYear: 'July 2025',
        description: "Worked on building application logic in Flutter and implemented SQL-based local storage to create a portable and offline-friendly version of the application, ensuring smooth data handling and reliable performance."
      }
     ]
}
