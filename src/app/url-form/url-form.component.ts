import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-form',
  templateUrl: './url-form.component.html',
  styleUrls: ['./url-form.component.css']
})
export class UrlFormComponent implements OnInit {
  urlForm: FormGroup;
  urlIds = []
  constructor(public fb: FormBuilder,private router : Router) { }

  ngOnInit() {
    this.urlForm = this.fb.group({
      link_one: ['' ,Validators.required],
      link_two: [''],
      link_three: [''],
      link_four: [''],
      link_five: [''],
      link_six: ['']
    })

  }

  submitForm() {
    if (this.urlForm.invalid) {
      return;
    }
    for (var singleUrl in this.urlForm.value) {
      this.urlIds.push(this.urlForm.value[singleUrl].split('?v=')[1])
    }
    sessionStorage.setItem('youtube-url',JSON.stringify(this.urlIds))
    this.router.navigate(['view'])
  }

}
