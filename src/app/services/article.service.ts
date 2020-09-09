import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry, filter } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  public static handleError(error: HttpErrorResponse | any) {
    return throwError(error);
  }

  //gets all articles
  getArticleData(retries = 0): Observable<any> {
    return this.http.get('./assets/articles.json').pipe(
      map( (res: any) => {
        return res.articles;
      }),
      retry(retries),
      catchError(ArticleService.handleError)
    );
  }

  public getData(retries?: number) {
    return this.getArticleData(retries);
  }

  //gets singular article bassed off of id
  getSingleArticle(id, retries = 0): Observable<any> {
    return this.http.get('./assets/articles.json').pipe(
      map( (res: any) => {
        return res.articles[id];
      }),
      catchError(ArticleService.handleError)
    );
  }

  public getSingle(id, retries?: number) {
    return this.getSingleArticle(id, retries);
  }
}
