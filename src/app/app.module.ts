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
import { CartaComponent } from './components/carta/carta.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { SecurityComponent } from './components/security/security.component';
import { WebDevBootcampComponent } from './components/web-dev-bootcamp/web-dev-bootcamp.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonIcon } from '@ionic/angular/standalone';
import { ResumeComponent } from './components/resume/resume.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CreateComponent,
    ErrorComponent,
    ContactComponent,
    CartaComponent,
    ProjectsComponent,
    DetailComponent,
    EditComponent,
    SecurityComponent,
    WebDevBootcampComponent,
    FooterComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    IonIcon,
    ReactiveFormsModule,
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'portfolio-project-d906b',
        appId: '1:341349842167:web:ba510a5b36c0180e25e7f2',
        storageBucket: 'portfolio-project-d906b.appspot.com',
        apiKey: 'AIzaSyBNjG5atEMjCtIHRBbrd2W0iqR8OH8fFTM',
        authDomain: 'portfolio-project-d906b.firebaseapp.com',
        messagingSenderId: '341349842167',
        measurementId: 'G-EMB227FBZP'
      })
    ),
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
