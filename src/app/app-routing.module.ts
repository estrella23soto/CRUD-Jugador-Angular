import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio', component: InicioComponent},
  {path:'agregar', component: AgregarComponent},
  {path:'modificar/:_id', component: ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
