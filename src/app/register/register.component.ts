import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';



@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, ReactiveFormsModule], // Importez les modules ici
})
export class RegisterComponent {
  registerForm: FormGroup;
  validationErrors: string[] = [];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.validationErrors = [];
    if (this.registerForm.invalid) {
      const controls = this.registerForm.controls;

      if (controls['name'].hasError('required')) {
        this.validationErrors.push('Le nom est obligatoire.');
      }
      if (controls['name'].hasError('minlength')) {
        this.validationErrors.push(
          'Le nom doit comporter au moins 3 caractères.'
        );
      }
      if (controls['email'].hasError('required')) {
        this.validationErrors.push("L'adresse e-mail est obligatoire.");
      }
      if (controls['email'].hasError('email')) {
        this.validationErrors.push("L'adresse e-mail n'est pas valide.");
      }
      if (controls['password'].hasError('required')) {
        this.validationErrors.push('Le mot de passe est obligatoire.');
      }
      if (controls['password'].hasError('minlength')) {
        this.validationErrors.push(
          'Le mot de passe doit contenir au moins 6 caractères.'
        );
      }
      if (controls['confirmPassword'].hasError('required')) {
        this.validationErrors.push(
          'La confirmation du mot de passe est obligatoire.'
        );
      }
      if (controls['confirmPassword'].hasError('minlength')) {
        this.validationErrors.push(
          'La confirmation doit contenir au moins 6 caractères.'
        );
      }
      if (
        controls['password'].value &&
        controls['confirmPassword'].value &&
        controls['password'].value !== controls['confirmPassword'].value
      ) {
        this.validationErrors.push('Les mots de passe ne correspondent pas.');
      }

      const modalElement = document.getElementById('errorModal');
      if (modalElement) {
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();
      }
    } else {
      console.log('Formulaire soumis avec succès :', this.registerForm.value);
    }
  }
}
