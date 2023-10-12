import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterUser, User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loggedUser: User | null;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
    ){}

  ngOnInit (): void {
    this.initForm();
  }

  initForm = () => {
    this.registerForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
      },
      )
  }

  onRegister(): void {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      const userFirstName = this.registerForm.get('firstName')?.value;
      const userLastName = this.registerForm.get('lastName')?.value;
      const userEmail = this.registerForm.get('email')?.value;
      const userPassword = this.registerForm.get('password')?.value;

      const registerData: RegisterUser = {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPassword,
      };

      // Call the authService and attempt to login
      this.authService.register(registerData).subscribe(res => {
        this.loggedUser = res;
        if (this.loggedUser) {
          this.router.navigate(['/movies']);
          console.log('Register successful!');
        } else {
          this.router.navigate(['/not-found']);
          console.log('Register failed!');
        }
      });      
    }
  }

}