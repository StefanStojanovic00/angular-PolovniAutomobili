import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { LoginUser } from '../../models/user'; 
import { UserService } from '../../services/user.service';
import * as UserActions from './user.actions';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  constructor(private action$: Actions,
     private userService: UserService,
     private router:Router) {}

     loginUser$ = createEffect(() =>
     this.action$.pipe(
       ofType(UserActions.loginUser),
       mergeMap(({ email, password }) =>
         this.userService.login(email, password).pipe(
           map((res) => {
             if (res.user) return res;
             else throw new Error('Ne valja');
           }),
           map((data: LoginUser) => {
             localStorage.setItem('token', data.access_token);
             this.router.navigate(['home']);
 
             return UserActions.loginSuccess({ data });
           }),
           catchError(() => {
             return of({ type: 'eror' });
             })
         )
       )
     )
     )
}