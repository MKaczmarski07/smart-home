import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: 'security.page.html',
  styleUrls: ['security.page.scss'],
})
export class SecurityPage {
  isArmed = false;
  constructor() {}

  armHome() {
    this.isArmed = !this.isArmed;
  }
}
