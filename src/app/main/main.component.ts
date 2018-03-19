import {Component, Inject, OnInit} from '@angular/core';
import {AppService} from '../service/app.service';
import {HttpErrorResponse} from '@angular/common/http';
import {fadeInAnimation} from './routerAnimations';
import {transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-main',
  animations: [
    trigger('routerAnimations', [
      transition('* => *', fadeInAnimation)
    ])
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  readonly menuOptionsUrl: string = 'supportFiles/json/menuOptions.json';
  menuOptions: MenuOption[] = [];

  constructor(
    @Inject(AppService) private App
  ) { }

  ngOnInit() {
    const self = this;

    self.App.http.get(self.menuOptionsUrl)
      .subscribe(
        data => self.menuOptions = data,
        error => self.menuNotFound(error)
      );
  }

  private menuNotFound(error: HttpErrorResponse): void {
    console.log(error);
  }

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}

interface MenuOption {
  name: string;
}
