// article-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: any[] = [];

  constructor(private articleService: ArticleService) { }

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