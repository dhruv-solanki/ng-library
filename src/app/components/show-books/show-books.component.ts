import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
 
@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss']
})
export class ShowBooksComponent implements OnInit {

  public books = {};

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService
    .getBooks()
    .subscribe(result => {
      this.books = result;
    });
  }

}
