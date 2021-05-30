import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Book } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpService: HttpClient) { }

  getBooks() {
    return this.httpService.get(`${env.BASE_URL}/books`);
  }

  getBook(id: number): any {
    return this.httpService.get(`${env.BASE_URL}/books/${id}`);
  }

  createBook(data: any) {
    // console.log(data);
    return this.httpService.post(`${env.BASE_URL}/books`, data);
  }

  updateBook(id: number, data: any) {
    return this.httpService.put(`${env.BASE_URL}/books/${id}`, data);
  }

  deleteBook(id: string) {
    // console.log(id);
    return this.httpService.delete(`${env.BASE_URL}/books/${id}`);
  }
}
