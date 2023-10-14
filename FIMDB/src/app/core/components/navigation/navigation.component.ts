import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/features/auth/interfaces/user.interface';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  currentUser: User | null;

  constructor(private readonly authService: AuthService){}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      console.log(user);
    });
  }

  onLogout = () => {
    this.authService.logout();
  }

}
