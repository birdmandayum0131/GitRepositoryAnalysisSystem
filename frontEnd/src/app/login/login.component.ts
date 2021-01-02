import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./loginstyle.css']
})
export class LoginComponent implements OnInit {
  name = 'Hello';
  accountInput: any;
  passwordInput: any;
  datas: any;
  badRequest:any;
  Username = "";
  UserID = "";
  constructor(private router: Router, private loginService: LoginService , private acrouter: ActivatedRoute) {
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  redirectTo(url){
    this.router.navigateByUrl(url.toString());
  }
  // tslint:disable-next-line
  logInCheck() {
    const UserLoginData = {
      account: undefined,
      password: undefined
    };
    UserLoginData.account  = this.accountInput;
    UserLoginData.password = this.passwordInput;
    const data = JSON.stringify(UserLoginData);
    this.loginService.verifyUserLoginData(data).subscribe(
      request => {
        this.datas = request;
        if (this.datas.redirect){
          this.router.navigate([this.datas.redirect.toString()], { queryParams:{Username: this.datas.userName ,UserID: this.datas.userId}});
          console.log(this.datas.redirect)
          console.log(this.datas.userName)
          console.log(this.datas.userId)
        }
        else{
          this.badRequest = "帳號或密碼錯誤";
        }
      }
    );
  }

  RoutetoSignup(){
    this.redirectTo("signup");
  }
}
