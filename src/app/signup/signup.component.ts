import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  step = 1;
  step1Form: FormGroup;
  step2Form: FormGroup;
  allowedOrganizations = allowedOrganizations;
  organizationError: string = '';
  showSuccessMessage: boolean = false;

  constructor(private fb: FormBuilder) {
    this.step1Form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      createPassword: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.step2Form = this.fb.group({
      organizationName: ['', Validators.required],
      organizationId: ['', Validators.required],
      designation: ['', Validators.required],
      birthDate: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
    });
  }

  onSubmitStep1() {
    if (this.step1Form.valid) {
      this.step = 2;
    }
  }

  onSubmitStep2() {
    const orgName = this.step2Form.get('organizationName')?.value;
    const isValidOrg = this.allowedOrganizations.some(org => org.name === orgName);
  
    if (!isValidOrg) {
      this.organizationError = 'Unknown organization-id';
    } else {
      this.organizationError = '';
      this.showSuccessMessage = true; // Show success message
      // Hide the form and buttons
      console.log('Signup completed:', {
        ...this.step1Form.value,
        ...this.step2Form.value
      });
    }
  }

  goToStep(step: number) {
    this.step = step;
  }
}

// Mock data for organization IDs
const allowedOrganizations = [
  { id: 'ORG123', name: 'OrgTech' },
  { id: 'ORG456', name: 'InnoSolutions' },
  { id: 'ORG789', name: 'FutureCorp' }
];
