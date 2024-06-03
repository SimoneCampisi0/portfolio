import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contattami',
  templateUrl: './contattami.component.html',
  styleUrl: './contattami.component.css'
})
export class ContattamiComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;

  constructor(private builder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.builder.group({
      nomeCognome: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      messaggio: new FormControl(null, [Validators.required]),
    })
  }

  onSendMail() {
    console.log("values: ", this.formGroup)

    if(this.formGroup.invalid) {
      Swal.fire({
        icon: "error",
        title: "Dati non validi",
        text: "Inserisci correttamente i dati",
      });
    }

    
  }

  ngOnDestroy(): void {
  }


}
