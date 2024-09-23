// app.component.ts
import { Component } from '@angular/core';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ContactFormComponent ,
    MessagesModule
  ]
})
export class AppComponent { }
