import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actions, Effect } from '@ngrx/effects'; //Actions from @ngrx/effects is different from  
import { Action } from '@ngrx/store'; // Action from @ngrx/store library
import { LoginService } from './../../services/login/login.service';
import { LOGIN_REQUEST_ACTION, LOGOUT_REQUEST_ACTION, LOGIN_RESPONSE_ACTION, LoginRequestAction, LogoutRequestAction, LoginResponseAction} from './../actions/actions';

@Injectable()
export class LoginUserEffectService {

  constructor(private actions$:Actions, private loginService:LoginService) {

   }//end:constructor

   @Effect() loginUser$: Observable<Action> = this.actions$
   .ofType(LOGIN_REQUEST_ACTION)   
   .debug('login action received')
   .switchMap((action:LoginRequestAction) => this.loginService.loginUser(action.payload.username,action.payload.password))
   .debug('data received from HTTP request')
   .map(loggedInDetails => new LoginResponseAction(loggedInDetails));

   

}//end:class-LoginUserEffectService
