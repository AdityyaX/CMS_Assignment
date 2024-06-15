// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  articles: any[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.articles = articles;
      },
      (error) => {
        console.error('Error fetching articles:', error);
        // Handle error
      }
    );
  }
}