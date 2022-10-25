import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ClienteDataService } from '../../services/cliente-data.service';
import { ClienteHttpService } from '../../services/cliente-http.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {


  constructor(private fb:FormBuilder,
    private clienteHttpService: ClienteHttpService,
    private clienteDataService: ClienteDataService) { }

  searchForm:FormGroup = this.fb.group({numeroTelefono:['', [Validators.required]]});

  ngOnInit(): void {
  }

  executeSearch(): void{
    //comprobamos que el formulario es válido
    if(this.searchForm.invalid){
      return;
    }

    //1 - invocar el metodo search del httpClientService
    this.clienteHttpService.search(this.searchForm.get('numeroTelefono')?.value) .subscribe(
      //success
      data => {
        this.clienteDataService.updateCliente(data);
      },
      //error
      error => {
        window.alert('error consultando: '+ JSON.stringify(error));
      },
      //finish
      () => { console.log('fin de la busqueda');}
    );
    //2 -
    }
}
