import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  responseData: any = null;
  loading = false;
  contactForm;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    const data = {
      ...this.contactForm.value,
      timestamp: new Date().toISOString(),
      priority: this.contactForm.value.message!.length > 50 ? 'HIGH' : 'NORMAL'
    };

    this.api.sendForm(data).subscribe({
      next: res => {
        this.responseData = res;
        this.loading = false;
        this.contactForm.reset();
      },
      error: err => {
        this.responseData = { error: true, details: err };
        this.loading = false;
      }
    });
  }
}
