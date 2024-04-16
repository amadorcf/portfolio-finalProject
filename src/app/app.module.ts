import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; //para las peticiones AJAX
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SecurityComponent } from './components/security/security.component';
import { WebDevBootcampComponent } from './components/web-dev-bootcamp/web-dev-bootcamp.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonIcon } from '@ionic/angular/standalone';
import { ResumeComponent } from './components/resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateComponent,
    ErrorComponent,
    ContactComponent,
    ProjectsComponent,
    DetailComponent,
    EditComponent,
    SecurityComponent,
    WebDevBootcampComponent,
    FooterComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    IonIcon,
    ReactiveFormsModule 
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
