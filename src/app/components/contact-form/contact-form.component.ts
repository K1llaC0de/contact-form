// contact-form.component.ts
import { CommonModule } from '@angular/common'; // Importa CommonModule, no BrowserModule
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
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
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  profileForm: FormGroup;

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
    if (this.profileForm.valid) {
      console.log('Form Submitted:', this.profileForm.value);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form submitted successfully!' });
      this.profileForm.reset();
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill out the form correctly.' });
    }
  }

  get email() {
    return this.profileForm.get('email');
  }
}
