import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit{

  formData = {
    username: '',
    password: ''
  };

  storedUsername = '';
  storedPassword = '';

  constructor() { }

  ngOnInit(): void {
    // Check if the user is already logged in and display stored information
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      this.storedUsername = storedUsername;
      this.storedPassword = storedPassword;
    }
  }

  login(): void {
    // Store login information in local storage
    localStorage.setItem('username', this.formData.username);
    localStorage.setItem('password', this.formData.password);

    // Display stored information
    this.storedUsername = this.formData.username;
    this.storedPassword = this.formData.password;
  }

  logout(): void {
    // Move login information from local storage to session storage
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('password', password);
    }

    // Clear local storage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // Clear displayed information
    this.storedUsername = '';
    this.storedPassword = '';
  }
}