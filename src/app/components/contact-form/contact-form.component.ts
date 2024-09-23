// contact-form.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    ToastModule,
    MessagesModule
  ],
  providers: [MessageService],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  
  profileForm: FormGroup;
  submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder, private messageService: MessageService) {
    this.profileForm = new FormGroup({});
  }

  types: any[] = [
    { name: 'General Enquiry' },
    { name: 'Support Request' }
  ];

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selectedType: [null, Validators.required],
      message: ['', Validators.required],
      checked: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    this.profileForm.markAllAsTouched();
    if (this.profileForm.valid) {
      this.submitted = true;
      console.log('Form submitted:', this.profileForm.value);
      /* setTimeout(() => {
        const cardElement = document.querySelector('.card');
        if (cardElement) {
          cardElement.classList.add('hide');
        }
      }, 2500); // 2.5 segundos
  
      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        this.submitted = false;
      }, 5000); // 3 segundos
    } */
    }
  }

  get email() {
    return this.profileForm.get('email');
  }
}
