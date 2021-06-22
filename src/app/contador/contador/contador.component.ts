import { Component } from "@angular/core";

@Component(
    {
    selector: 'app-contador',
    template: 
        `
            <h1>{{ titulo}}</h1>



            <!-- 
            Usando solo el dato contador podriamos ejecutarlo de esta manera
            <button (click)="contador = contador + 1; ">+1</button> 
            -->

            <!-- 
            Usando el metodo sumar/restar en app.component.ts y solo se ejecutaria de la siguiente manera
            <button (click)="sumar() ">+1</button> 
            -->

            <!--
            usando este metodo se puede obtener un error y es que cuando enviamos un string aumentara la
            cadena del contador mas no se le sumara o restara
            <button (click)=Incrementos('123')>+1</button> 
            -->
            <button (click)=Incrementos(1)>+1</button>
            <span> {{contador}} </span>
            <button (click)=Incrementos(-1)>-1</button>



            <h3>La base es: <strong>{{base}}</strong></h3>

            <button (click)=Incrementos(base)>+ {{base}}</button>
            <span> {{contador}} </span>
            <button (click)=Incrementos(-base)>- {{base}}</button>
                
    
    
        `
    })

export class ContadorComponent 
{

    titulo : String = 'Contador App';
    // cuando creamos este atributo podemos llamarlo o volverlo una variable aprovechando
    // con la doble llave como se ve en el app.component.html
    
    // Contador
      contador: number = 10;
    
      // sumar()
      // {
      //   this.contador += 1;
      // }
    
      // restar()
      // {
      //   this.contador -= 1;
      // }
    
    // usando lo anterior podemos
    
     Incrementos( valor: number )
     {
       this.contador += valor;
     }
    
    // Tarea
     base: number = 5;
}