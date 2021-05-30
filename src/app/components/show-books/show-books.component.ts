import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
 
@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss']
})
export class ShowBooksComponent implements OnInit {

  public books: any = [];
  public alert: boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService
    .getBooks()
    .subscribe(result => {
      this.books = result;
    });
  }

  // updateBook(id: string) {
  //   console.log(id);
  // }

  removeBook(id: string) {
    this.httpService.deleteBook(id).subscribe((result) => {

      let temp: any = this.books.filter((item: { id: string; }) => {
        return item.id !== id;
      });
      this.books = [];
      this.books = temp;

      this.alert = true;
      
      console.log(result);
    });
  }

  closeAlert() {
    this.alert = false;
  }

}
