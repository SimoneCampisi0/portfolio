import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';


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
    if (this.formGroup.invalid) {
      Swal.fire({
        icon: "error",
        title: "Dati non validi",
        text: "Inserisci correttamente i dati",
      });
    } else {
      this.sendEmailJS();
      this.formGroup.reset();
    }

  }

  sendEmailJS() {
    emailjs.init('DOUcryyfQzbERdPHu');

    var templateParams = {
      from_name: this.formGroup.controls['nomeCognome'].value,
      mail_address: this.formGroup.controls['email'].value,
      message: this.formGroup.controls['messaggio'].value
    }

    emailjs.send('service_ng4e4in', 'template_qbbjhdx', templateParams)
      .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Messaggio inviato con successo",
            text: "Il tuo messaggio è stato inviato con successo.",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Errore invio messaggio",
            text: "Sì è verificato un errore durante l'invio del messaggio. Riprova.",
          });
        })

  }

  ngOnDestroy(): void {
  }


}
