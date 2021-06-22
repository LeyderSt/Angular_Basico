import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

// cuando creamos automaticamente los componentes nos cargaa la funcion ngOninit
// el ngOninit es el encargado de cargar todos los metodos de manera automatica
// se utiliza para inicializar cosas 
 
Personajes : string[] = ['Feca','Ocra','Sadida','Osamoda','Aniripsa','Pandawa','Yopuka','Zobal','Xelor','Steamer','Sram'];

Borrados: String = '';

borrarPersonaje()
{
// el shift se usa para borrar el primer valor de un arreglo
  this.Borrados = this.Personajes.shift() || '';
}


}
