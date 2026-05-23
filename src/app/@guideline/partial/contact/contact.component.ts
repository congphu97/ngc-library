import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guideline-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public isDarkMode = false;
  public activeCategory = 'FRONTEND';
  public categories = ['FRONTEND', 'BACKEND', 'DESIGN SYSTEM', 'DEVOPS'];
  
  public skillsData: { [key: string]: string[] } = {
    'FRONTEND': ['TypeScript', 'Angular', 'RxJS', 'NgRx', 'Ionic', 'Sass/SCSS', 'StencilJS', 'HTML5/CSS3', 'Webpack', 'Jest/Jasmine'],
    'BACKEND': ['Node.js', 'Express', 'NestJS', 'Redis', 'Kafka', 'MongoDB', 'PostgreSQL', 'RESTful API', 'WebSockets', 'GraphQL'],
    'DESIGN SYSTEM': ['Design Tokens', 'Component-driven Dev', 'Web Components', 'CSS Variables', 'Storybook', 'Figma integration', 'Accessibility (a11y)'],
    'DEVOPS': ['Docker', 'Git/Github Actions', 'Kubernetes', 'CI/CD', 'AWS', 'Nginx', 'Linux Admin']
  };

  public selectedCompany: string | null = null;

  public companySummaries: { [key: string]: { role: string; period: string; details: string; highlights: string[] } } = {
    'Mercatus Technologies Inc.': {
      role: 'Frontend Developer',
      period: 'Sep 2023 - Present',
      details: 'Mercatus Technologies Inc. · Canada (Remote)',
      highlights: [
        'Developed scalable e-commerce frontend architectures using Angular, NgRx, and Angular Material.',
        'Collaborated with Canadian engineering teams to build accessible (WCAG compliant) shopping layouts.',
        'Optimized bundle sizes and state-management flows, resulting in faster page interaction metrics.'
      ]
    },
    'Stor.ai, a Relationship Company': {
      role: 'Frontend Developer',
      period: 'Mar 2023 - Present',
      details: 'Stor.ai, a Relationship Company · United States (Remote)',
      highlights: [
        'Built responsive online grocery storefront applications using Angular, Ionic, and RxJS.',
        'Engineered state transition layers for complex cart logic and payment gateway checkouts.',
        'Reduced loading delays by implementing lazy loading and visual skeleton placeholders.'
      ]
    },
    'Cubable': {
      role: 'Frontend Developer',
      period: 'Apr 2021 - Mar 2023',
      details: 'Cubable · Vietnam (Full-time)',
      highlights: [
        'Created the core design system library (ngc-library) and customized grid layout elements.',
        'Architected reusable component modules (Avatar, DatePicker, CodeBlock) to accelerate feature releases.',
        'Optimized rendering performance for real-time document collaboration and sidebar panels.'
      ]
    },
    'FPT Information System': {
      role: 'Full Stack Developer',
      period: 'Jan 2020 - Apr 2021',
      details: 'FPT Information System · Vietnam (Full-time)',
      highlights: [
        'Developed backend services and API portals using Node.js, Express, and NestJS.',
        'Optimized data aggregation queries in MongoDB and PostgreSQL to speed up financial reporting.',
        'Maintained and refactored heritage ERP software modules, improving overall application stability.'
      ]
    }
  };

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark-theme');
  }

  onThemeToggle(isDark: boolean) {
    this.isDarkMode = isDark;
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  selectCompany(company: string) {
    if (this.selectedCompany === company) {
      this.selectedCompany = null; // Toggle off if clicked again
    } else {
      this.selectedCompany = company;
    }
  }
}
