// Importar modulos del router de Angular

// import { NgModule } from '@angular/core';
import { ModuleWithProviders, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

// Array de rutas
const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'about', component: AboutComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'create', component: CreateComponent},
  {path:'contact', component: ContactComponent},
  {path:'**', component: ErrorComponent},

];

// Exportar modulo del router

/* Comentamos esto para implementar esto
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
