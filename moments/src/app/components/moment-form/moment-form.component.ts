import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!: string;

  momentForm!: FormGroup; // ! sera preenchido com o tempo, porque precisamos inicializar ele depois (tipo: FormGroup)

  constructor() { }

  // para validacoes do angular, inicializa-se o form, utilizando o method abaixo (ngOnInit), porque estamos inicializando coisas do angular, nao se usa constructor
  ngOnInit(): void {
    this.momentForm = new FormGroup({
      // aqui sera declarado todos campos que teremos no nosso formulario
      id: new FormControl(''), // sera necessario porque vamos querer editar o form
      title: new FormControl('', [Validators.required]), // validando com required (deve ter um valor nele)
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  // responsavel por colocar a imagem no form
  onFileSelected(event: any) {

    // pegando um arquivo de cada vez
    const file: File = event.target.files[0]

    this.momentForm.patchValue({ image: file });

  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);

    // enviando os dados do form para o component Pai por meio do onSbmite
    this.onSubmit.emit(this.momentForm.value);
  }

}
