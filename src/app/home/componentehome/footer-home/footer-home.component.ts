import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.scss']
})
export class FooterHomeComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
