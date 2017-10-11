import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    manager: { name: 'Srinivasan Ramamoorthi', picture: 'assets/img/icons/user.svg' },
    nick: { name: 'Nick Jones', picture: 'assets/img/icons/user.svg' },
    eva: { name: 'Eva Moor', picture: 'assets/img/icons/user.svg' },
    jack: { name: 'Jack Williams', picture: 'assets/img/icons/user.svg' },
    lee: { name: 'Lee Wong', picture: 'assets/img/icons/user.svg' },
    alan: { name: 'Alan Thompson', picture: 'assets/img/icons/user.svg' },
    kate: { name: 'Kate Martinez', picture: 'assets/img/icons/user.svg' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
