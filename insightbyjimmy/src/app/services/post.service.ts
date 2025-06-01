import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Getting Started with Angular',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      description: 'Learn the basics of Angular framework and start building amazing web applications.',
      content: 'Angular is a powerful framework for building dynamic web applications. In this comprehensive guide, we\'ll explore the fundamentals of Angular, including components, services, routing, and more. Whether you\'re a beginner or looking to refresh your knowledge, this post will provide you with the essential concepts needed to start your Angular journey.'
    },
    {
      id: 2,
      title: 'Modern Web Development Trends',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      description: 'Explore the latest trends and technologies shaping the future of web development.',
      content: 'The web development landscape is constantly evolving. From progressive web apps to serverless architecture, new technologies are reshaping how we build and deploy applications. This article covers the most important trends every developer should know about, including JAMstack, micro-frontends, and the rise of TypeScript.'
    },
    {
      id: 3,
      title: 'Building Responsive Designs',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      description: 'Master the art of creating websites that look great on all devices.',
      content: 'Responsive design is no longer optional in today\'s multi-device world. Learn how to create flexible layouts using CSS Grid, Flexbox, and media queries. We\'ll cover best practices for mobile-first design, performance optimization, and ensuring your website provides an excellent user experience across all screen sizes.'
    },
    {
      id: 4,
      title: 'JavaScript ES6+ Features',
      imageUrl: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=600&fit=crop',
      description: 'Discover the powerful features introduced in modern JavaScript.',
      content: 'ES6 and beyond have introduced many powerful features that make JavaScript more expressive and easier to work with. From arrow functions and destructuring to async/await and modules, these features have transformed how we write JavaScript. This guide covers the most important ES6+ features with practical examples.'
    },
    {
      id: 5,
      title: 'State Management in Angular',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      description: 'Learn effective strategies for managing application state in Angular applications.',
      content: 'As Angular applications grow in complexity, managing state becomes increasingly important. This article explores different approaches to state management, from simple services to advanced patterns like NgRx. We\'ll discuss when to use each approach and provide practical examples to help you make the right choice for your application.'
    }
  ];
  
  private posts$ = new BehaviorSubject<Post[]>(this.posts);

  getPosts() {
    return this.posts$.asObservable();
  }

  getPostById(id: number): Post | undefined {
    return this.posts.find(post => post.id === id);
  }

  // Posts are now managed manually/from backend only
  // To add new posts, update the posts array above directly
}
