import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide= true;
  username: String = "";
  password: String = "";
  constructor(private router: Router, public gs: GlobalService) { }

  ngOnInit(): void {
  }

  

  iniciarSesion (){
    if (this.username!="" && this.password != "")  {
      for ( let i =0; i< this.gs.users.length; i++){
        if(this.username.toLocaleLowerCase() == this.gs.users[i].username.toLocaleLowerCase()){
          if(this.password == this.gs.users[i].password){
            this.router.navigate(['/pagina-principal', this.username]);
          }
          else{
            alert("Contraseña incorrecta");
            
          }
          
        }
        /*else{
          alert("Usuario no registrado");
        }*/
      }
       
       
     }
     else{
       
       alert("Por favor, complete los campos obligatorios");
     }

}
}
