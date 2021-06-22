import { Component } from "@angular/core";


@Component(
{
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})


export class HeroeComponent
{
    personaje: string = 'Feca';
    nivel: number = 200;

    obtenerPersonaje() : string 
    {
    // esto es como tener lo siguiente 
    // los $ se usan para concatenar
    // return this.nombre + ' - ' + this.edad
    
        return `${ this.personaje} - ${ this.nivel}`;
    }

    get PersonajeMayus(): string
    {
        return this.personaje.toUpperCase();
    }

// one way data binding - enlazado en una sola via
// se encarga de modificar solo lo necesario y no 
// sobre cargar las ejecuciones
    CambiarPersonaje(): void
    {
        this.personaje = 'Sadida';
    }

    CambiarNivel(): void
    {
        this.nivel = 150;
    }
}