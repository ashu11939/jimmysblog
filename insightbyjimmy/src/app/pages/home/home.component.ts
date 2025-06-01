import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService, Post } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  goToPost(id: number): void {
    this.router.navigate(['/post', id]);
  }
}
