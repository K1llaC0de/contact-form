import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necesario para PrimeNG
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ButtonModule,
        RadioButtonModule,
        TriStateCheckboxModule,
        ToastModule
      ],
      declarations: [ContactFormComponent],
      providers: [MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Additional tests

  it('should have a form with required fields', () => {
    expect(component.profileForm.contains('firstName')).toBeTruthy();
    expect(component.profileForm.contains('lastName')).toBeTruthy();
    expect(component.profileForm.contains('email')).toBeTruthy();
    expect(component.profileForm.contains('selectedType')).toBeTruthy();
    expect(component.profileForm.contains('message')).toBeTruthy();
    expect(component.profileForm.contains('checked')).toBeTruthy();
  });

  it('should make the email field required', () => {
    const emailControl = component.profileForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalsy();
  });

  it('should show success message on form submission', () => {
    // Mock MessageService
    const messageService = TestBed.inject(MessageService);
    spyOn(messageService, 'add').and.callThrough();

    // Set form values
    component.profileForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      selectedType: { name: 'General Enquiry' },
      message: 'This is a message.',
      checked: true
    });

    component.onSubmit();
    
    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Form submitted successfully!'
    });
  });
});
