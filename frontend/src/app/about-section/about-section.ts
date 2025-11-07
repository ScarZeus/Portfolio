import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css',
})
export class AboutSection {
    aboutDescription: string = "I like turning ideas into things that actually work."+
     "When I'm building something, I care about clarity — in code, in design, and in how users experience it."+
     " I don’t chase trends or stack logos; I focus on solving the problem in front of me with the most straightforward, "+
     "maintainable approach. Every project teaches me something, "+
     "and I enjoy the process of improving the system a little more than the day before.";
}
