import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ModalController } from '@ionic/angular';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonInput,
  IonItem,
  IonRadioGroup,
  IonRadio,
  IonButton,
  IonTextarea,
  IonCol,
  IonRow,
  IonGrid,
  IonCard,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonTextarea,
    IonButton,
    IonRadio,
    IonRadioGroup,
    IonItem,
    IonInput,
    IonLabel,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class FeedbackPage implements OnInit {
  public form!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      experience: ['', Validators.required],
      expectations: ['', Validators.required],
      issues: [''],
      comments: [''],
      name: [''],
      date: [''],
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  clearForm() {
    this.form.reset();
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.modalCtrl.dismiss(this.form.value);
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
