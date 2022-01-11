import { Injectable } from '@angular/core';
import * as data from '../service.data/fake.data'

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  loadMoreNewsData = data.newsData;

  getNews() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    }).then(() => {
      return data.newsData;
    });
  }

  getSlides() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    }).then(() => {
      return data.slides;
    });
  }
}
