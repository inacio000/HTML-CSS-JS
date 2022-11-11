import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Moment } from 'src/app/Moment';

import { MomentService } from 'src/app/services/moment.service';

import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {
  btnText = 'Share!';

  constructor(
    private momentService: MomentService, 
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // async - porque tera uma interacao com a API
  async createHandler(moment: Moment) {
    // tratando os dados que chegam

    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);
    
    if (moment.image) {
      formData.append("image", moment.image);
    }

    // to do (apos cadastrar)
    // enviar para o service (para cadastrar no banco)
    await this.momentService.createMoment(formData).subscribe();

    // exibir msg (msg de sucesso)
    this.messageService.add('Moment added successfully!');

    // redirect (para uma outra pagina para nao mostrar o form apos preenchimento)
    this.router.navigate(['/']);

  }

}
