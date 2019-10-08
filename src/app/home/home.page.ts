import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  user = {
    name: 'M.Hamza Khalid Mirza',
    city: 'Rawalpindi',
    interests: ['Football', 'Novel Reading', 'Cricket', 'Games', 'Seasons']
  };

}
