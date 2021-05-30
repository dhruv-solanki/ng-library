import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  public oldBook = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    author: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required]),
  });
  public id: number = 0;
  public alert: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,  
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.httpService.getBook(this.id).subscribe((result: { [x: string]: any; }) => {
      this.oldBook = new FormGroup({
        title: new FormControl(result['title']),
        author: new FormControl(result['author']),
        image: new FormControl(result['image']),
      });
    })
  }

  get title() {
    return this.oldBook.controls.title;
  }

  get author() {
    return this.oldBook.controls.author;
  }

  get image() {
    return this.oldBook.controls.image;
  }

  editBook() {
    // console.log(this.oldBook.value);
    this.httpService.updateBook(this.id, this.oldBook.value)
      .subscribe((result) => {
        this.alert = true;
        console.log(result);
      });
  }

  closeAlert() {
    this.alert = false;
  }

}
