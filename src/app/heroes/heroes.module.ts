import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


// El commonModule ofrece directivas como ngFor y ngIf, si las voy a usar en mis componentes debo importarlo.
// El módulo me permite declarar los componentes que voy a exportar para que otros módulos usen. también puedo 
// importar módulos si los necesitara.
// app.module.ts es el módulo principal.
// El objetivo del módulo es agrupar componentes que tienen sentido entre sí, encapsularlos.
// principio de  lazy load - solo cargo los módulos0 y componentes que necesito en esa página, bajo demanda.

@NgModule
(
    {   // declaro los componentes que tendra este modulo (todo lo relacionado a heroes)
        declarations: 
        [
            HeroeComponent,
            ListadoComponent
        ],
        // defino los componentes que voy a exportar es decir dejar publicos
        exports: 
        [
            ListadoComponent
        ],
        // importo el commonmodule porque es un recurso de angular que necesito
        imports: 
        [
            CommonModule
        ]
    }
)


export class HeroesModule {}