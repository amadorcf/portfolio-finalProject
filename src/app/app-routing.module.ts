// Importar modulos del router de Angular

// import { NgModule } from '@angular/core';
import { ModuleWithProviders, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SecurityComponent } from './components/security/security.component';

// Array de rutas
const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'about', component: AboutComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'create', component: CreateComponent},
  {path:'contact', component: ContactComponent},
  {path:'project/:id', component: DetailComponent},
  {path:'edit-project/:id', component: EditComponent},
  {path:'projects/spring-security', component: SecurityComponent},
  {path:'**', component: ErrorComponent}

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
