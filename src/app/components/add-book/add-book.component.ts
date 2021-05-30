import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {


  public alert: boolean = false;
  public newBook = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  get title() {
    return this.newBook.controls.title;
  }

  get author() {
    return this.newBook.controls.author;
  }

  get image() {
    return this.newBook.controls.image;
  }

  addBook() {
    this.httpService.createBook(this.newBook.value).subscribe((result) => {
      console.log(result);
    });
    // console.log(this.newBook.value);
    this.alert = true;
    this.newBook.reset({});
  }

  closeAlert() {
    this.alert = false;
  }

}
