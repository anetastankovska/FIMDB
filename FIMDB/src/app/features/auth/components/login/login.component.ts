import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUser, User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { LoggerService } from 'src/app/core/services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedUser: User | null;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
    ) {}

  ngOnInit (): void {
    this.initForm();
  }

  initForm = () => {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
      },
      )
  }

  onLogin(): void {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      const userEmail = this.loginForm.get('email')?.value;
      const userPassword = this.loginForm.get('password')?.value;

      const credentials: LoginUser = {
        email: userEmail,
        password: userPassword,
      };

      // Call the authService and attempt to login
      this.authService.login(credentials).subscribe(res => {
        this.loggedUser = res;
        if (this.loggedUser) {
          this.router.navigate(['/movies']);
          console.log('Login successful!');
        } else {
          this.router.navigate(['/not-found']);
          console.log('Login failed!');
        }
      });      
    }
  }
}