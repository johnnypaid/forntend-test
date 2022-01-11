import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FakeDataService } from 'src/app/service/fake-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsData: any;
  displayNews =  [{}];
  newsArray: any;
  updatedNewsData: any;
  page = 1;
  constructor(private fakeData: FakeDataService) { }

  ngOnInit(): void {
    this.getNews(this.page);
  }

  getNews(page: number) {
    this.fakeData.getNews()
    .then(data => {
      console.log(page)
      this.newsData = data;
      this.displayNews.push(this.newsData);
      if (page === 1) {
        this.newsArray = this.displayNews[1];
        this.updatedNewsData = this.newsArray.slice(0, 6);
        console.log(this.updatedNewsData);
      } else {
        this.updatedNewsData = this.newsArray;
        console.log(this.updatedNewsData);
      }
    }).catch(error => {
      console.log(error);
    });
  }

  loadMoreNews() {
    this.page = 2;
    this.ngOnInit();
  }
}
