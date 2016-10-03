import {Component, ViewContainerRef} from '@angular/core';
import {MdDialog, MdDialogConfig} from "@angular/material";
import { Router } from '@angular/router';

@Component({
  selector: 'settings-dialog',
  template: `
    <label>Just a simple test ...</label>
    <md-slide-toggle></md-slide-toggle>`
})

export class SettingsDialog {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Tour of Heroes / Suicide Squad';
  
  isDarkTheme = false;

  tabs: Array <{title:string, url:string}>;

  constructor(private dialog: MdDialog, private vcr: ViewContainerRef, private router: Router) {
    this.tabs = [
      {
        title: 'Dashboard',
        url: 'dashboard'
      },
      {
        title: 'Heroes',
        url: 'heroes'
      }
    ]
  }

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingsDialog, config);
  }
  
  openTab(index) {
    this.router.navigate(['/', this.tabs[index].url]);
  }
}