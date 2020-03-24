import { Joiner } from './../../../shared/models/joiner.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poker-cards',
  templateUrl: './poker-cards.component.html',
  styleUrls: ['./poker-cards.component.scss']
})
export class PokerCardsComponent implements OnInit {

  @Input() joiner: Joiner;
  cardNumbers = [3, 5, 8, 13, 20];

  constructor() { }

  ngOnInit() {
  }

}
