import { Component, OnInit } from '@angular/core';
import { Hero } from '../../beans/Hero';
import { HEROES } from '../../mock/mock-heroes';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}
