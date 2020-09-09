import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  public id: number;
  private sub: any;
  private articleSubscription: Subscription;
  public article;
  public loading = true;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      console.log('id: ', this.id)

      this.articleSubscription = this.articleService.getSingle(this.id).subscribe( res => {
        this.loading = false;
        this.article = res;

        console.log('article: ', this.article)
      })
   });

    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}
