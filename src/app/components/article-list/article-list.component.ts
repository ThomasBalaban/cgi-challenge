import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  private articleSubscription: Subscription;
  public article;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleSubscription = this.articleService.getData().subscribe( res => {
      this.article = res;
    })
  }

}
