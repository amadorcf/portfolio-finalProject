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
import { WebDevBootcampComponent } from './components/web-dev-bootcamp/web-dev-bootcamp.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CartaComponent } from './components/carta/carta.component';

// Array de rutas
const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'about', component: AboutComponent},
  {path:'resume', component: ResumeComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'create', component: CreateComponent},
  {path:'contact', component: ContactComponent},
  {path:'carta', component: CartaComponent},
  {path:'project/:id', component: DetailComponent},
  {path:'edit-project/:id', component: EditComponent},
  {path:'projects/spring-security/:id', component: SecurityComponent},
  {path:'projects/web-dev-bootcamp/:id', component: WebDevBootcampComponent},
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
