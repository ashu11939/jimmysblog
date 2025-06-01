import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, Post } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
  post: Post | undefined;
  @ViewChild('contentSection') contentSection!: ElementRef;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostById(id);
  }

  scrollToContent(): void {
    this.contentSection.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
