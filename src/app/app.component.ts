// app.component.ts
import { Component } from '@angular/core';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ContactFormComponent 
  ]
})
export class AppComponent { }
