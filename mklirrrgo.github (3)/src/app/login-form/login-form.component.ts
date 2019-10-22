import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  loginUser(e) {
    e.preventDefault();
    console.log(e);
    let username = e.target.elements[0].value;
    let password = e.target.elements[1].value;
    
    this.search_User(username, password);
   /* if (username == "admin" && password == "admin") {
      this.router.navigate(["dashboard"]);
    } else {
      console.log("Bad password or user");
    }
    */
    
  }

  public search_User(user, password) {
    let obj = users.user.find(obj => obj.name == user);
    //console.log(obj.name);
    //console.log(obj.password);

    if (user == obj.name && password == obj.password) {
      this.router.navigate(["dashboard"]);
      localStorage.setItem("sesion",obj.name);
      //console.log("a",localStorage.getItem("sesion"));
      console.log("Sesión Iniciada");
    } else {
      console.log("false");
      console.log('e',obj.name);
      console.log('e',obj.password);
    }
  }
}
let users = {
  user: [
    {
      name: "Francisco",
      password: "1234"
    },
    {
      name: "Diego",
      password: "Password"
    },
    {
      name: "admin",
      password: "admin"
    }
  ]
};
