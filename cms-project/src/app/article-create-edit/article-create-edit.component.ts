// article-create-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-create-edit',
  templateUrl: './article-create-edit.component.html',
  styleUrls: ['./article-create-edit.component.css']
})
export class ArticleCreateEditComponent implements OnInit {
  articleForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.isEditMode = true;
      this.fetchArticle(articleId);
    }
  }

  fetchArticle(articleId: string) {
    this.articleService.getArticle(articleId).subscribe(
      (article) => {
        this.articleForm.patchValue({
          title: article.title,
          content: article.content
        });
      },
      (error) => {
        console.error('Error fetching article:', error);
        // Handle error
      }
    );
  }

  onSubmit() {
    if (this.articleForm.valid) {
      const articleData = this.articleForm.value;
      if (this.isEditMode) {
        const articleId = this.route.snapshot.paramMap.get('id');
        this.articleService.updateArticle(articleId, articleData).subscribe(
          (response) => {
            console.log('Article updated successfully:', response);
            this.router.navigate(['/articles']);
          },
          (error) => {
            console.error('Error updating article:', error);
            // Handle error
          }
        );
      } else {
        this.articleService.createArticle(articleData).subscribe(
          (response) => {
            console.log('Article created successfully:', response);
            this.router.navigate(['/articles']);
          },
          (error) => {
            console.error('Error creating article:', error);
            // Handle error
          }
        );
      }
    }
  }
}