import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private art: ActivatedRoute) {
    this.art.params.subscribe( params => {
      console.log(params);
    });
   }

  ngOnInit() {
  }

}
