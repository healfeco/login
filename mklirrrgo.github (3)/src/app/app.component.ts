import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

 constructor(){
    this.save_localstorange();
    //this.get_localStorange();
    this.search_User("Diego", "Password");
  }
 

get_localStorange()
{
  let name = localStorage.getItem("diego");
  let persona = JSON.parse(localStorage.getItem("persona"));

  console.log(name);
  console.log(persona);
}
search_User(user, password)
{
  let obj = users.user.find(obj => obj.name == user)
  console.log(obj.name);
  console.log(obj.password);

  if(user == obj.name && password == obj.password)
  {
    console.log("true");
  }
  else
  {
    console.log("false");
  }
}

save_localstorange()
{
  let name:string = "Fernando"

  /*let persona = {
    name:  "Juan",
    password: "1234"
  }
  */
  //localStorage.setItem("name", name);
  //localStorage.setItem("users", JSON.stringify(users));
  //let user1:string = (users.user[0].name);

  //console.log(users.user[0]);
  //localStorage.clear();
  //localStorage.removeItem(name);
}
}
let users = 
  {
    user: 
    [
      {
        name: 'Francisco',
        password:'1234'
      },
      {
        name: 'Diego',
        password:'Password'
      }
    ]
  }