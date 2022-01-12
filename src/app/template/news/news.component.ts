import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  createPost = false;

  constructor(private fakeData: FakeDataService, private router: Router) { }

  ngOnInit(): void {
    this.getNews(this.page);
    console.log(localStorage.getItem('isLogin'));
    // (localStorage.getItem('isLogin')) ? this.createPost = true : this.createPost = false;

    if (localStorage.getItem('isLogin')) {
      this.createPost = true;
    } else {
      this.createPost = false;
    }
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

  newPost() {
    this.router.navigate(['/new-post']);
  }
}
