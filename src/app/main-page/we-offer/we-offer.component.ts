import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-offer',
  templateUrl: './we-offer.component.html',
  styleUrls: ['./we-offer.component.scss']
})
export class WeOfferComponent implements OnInit {

  styles: any = {
    top: '-2px',
    left: '-2px'
  };

  constructor() { }

  ngOnInit() {
  }

  changePosition(n) {
    if (n === 1) {
      this.styles = {
        top: '-2px',
        left: '-2px'
      }
      }
    if (n === 2 ){
      this.styles = {
        left: '-20px',
        top: 'calc(100% - 30px)'
      }
    }

    if (n === 3 ){
      this.styles = {
        left: '100%',
        top: '10px'
      }
    }

    if (n === 4 ){
      this.styles = {
        left: 'calc(100% + 5px)',
        top: 'calc(100% - 30px)'
      }
    }

  }

}
