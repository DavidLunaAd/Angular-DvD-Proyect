import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path: 'aboutme', component:AboutmeComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'info', component:InfoComponent},
  {path:'', redirectTo:'/inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
