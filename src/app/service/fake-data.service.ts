import { Injectable } from '@angular/core';
import * as data from '../service.data/fake.data'

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {
  getNews() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    }).then(() => {
      return data.newsData;
    })
  }
}
