import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/persona';
import { ContactosFirebaseService } from 'src/app/services/contactos-firebase.service';
import { ContactosService } from 'src/app/services/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  persona: Persona = new Persona();

  constructor(private router: Router, 
    private contactoServices: ContactosService,
    private contactoFirebaseService: ContactosFirebaseService){ 
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.persona = params['contacto']
      }
  }

  editarPersona(){

  }

  eliminarPersona(){}
  savePersona(){
    this.contactoServices.addContacto(this.persona)
    console.log('contacots', this.contactoServices.getContactos())
    this.contactoFirebaseService.save(this.persona)
    this.persona = new Persona();
  }
  goListar(){
    this.router.navigate(['paginas/listado-contactos'])
  }
}
