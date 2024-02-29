import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginUser } from '../../store/user/user.actions';;
import { AppState } from '../../app.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
   
    email=new FormControl('',[Validators.required,Validators.email]);
    password=new FormControl('',[Validators.required]);
    loading: boolean=false;

    constructor(private store: Store<AppState>, private router: Router)
    {}

    ngOnInit(): void {
      this.store.subscribe((state) => {
        this.loading = state.user.loading;
      });
    }
  
    handleSubmit() {
      if (!this.email.value || !this.password.value) return;
  
      this.store.dispatch(
        loginUser({
          email: this.email.value,
          password: this.password.value,
        })
      );
    }

    navigate() {
      this.router.navigate(['register']);
    }
  
  
      
}
