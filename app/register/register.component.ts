import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formdata = { name: "", email: "", Password: "" };
  submit = false;
  errorMessage = "";
  loading = false;

  constructor(private auth: AuthService) { }
  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.formdata);
    this.loading = true;

    this.auth
      .register(this.formdata.name, this.formdata.email, this.formdata.Password)
      .subscribe({
        next: data => {
          this.auth.storeToken(data.Token);
          console.log('registered token is' + data.Token);
          this.auth.canAuthenticate();
        },
        error: data => {
          if (data.error.error.Message == "INVALID_EMAIL") {
            this.errorMessage = "invalid Email!";
          } else if (data.error.error.Message == "EMAIL_EXISTS") {
            this.errorMessage = "already email exists!"
          }
          else {
            this.errorMessage = "unknown error occured when creating";
          }
        }
      }).add(() => {
        this.loading = false;
        console.log('register completed!');
      })
  }
}
