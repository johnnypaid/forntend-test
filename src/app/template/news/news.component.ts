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
  loadMoreData = [{}];

  constructor(private fakeData: FakeDataService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.fakeData.getNews()
    .then(data => {
      this.newsData = data;
      this.displayNews.push(this.newsData);
      this.newsArray = this.displayNews[1]
      this.loadMoreData.push(this.displayNews[1]);
      console.log(this.loadMoreData);
    }).catch(error => {
      console.log(error);
    });
  }

  loadMoreNews() {
    console.log('test')
    this.ngOnInit();
  }
}
