// article-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  article: any;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.fetchArticle();
  }

  fetchArticle() {
    const articleId = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(articleId).subscribe(
      (article) => {
        this.article = article;
      },
      (error) => {
        console.error('Error fetching article:', error);
        // Handle error
      }
    );
  }
}