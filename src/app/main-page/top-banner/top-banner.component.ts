import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  flags: Array<boolean> = [false, false, true, false]

  constructor() { }

  ngOnInit() {
  }

  changeFlag(n): void {
    if (!this.flags[n]) {
        this.flags = [false, false, false, false]
      this.flags[n] = true
    }
  }

}
