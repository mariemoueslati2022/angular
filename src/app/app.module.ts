import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms'; // Assurez-vous que ReactiveFormsModule est importé

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RegisterComponent,
    ReactiveFormsModule, // Ajoutez ReactiveFormsModule pour les formulaires réactifs
    RouterModule.forRoot([
      // Ajoutez vos routes ici si nécessaire
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}