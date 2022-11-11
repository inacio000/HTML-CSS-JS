import { Component, OnInit } from '@angular/core';

import { MomentService } from 'src/app/services/moment.service';

import { Moment } from 'src/app/Moment'; 

import { environment } from 'src/environments/environment'; //para criacao da url

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allmoments: Moment[] = [] // para pegar e trazer e trazer os momentos do banco
  moments: Moment[] = [] // para fazer o filtro e ser exibido depois da busca
  baseApiUrl = environment.baseApiUrl // para buscar dados da api

  // todo search

  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    // inicializacao dos momentos buscados
    this.momentService.getMoments().subscribe((items) => {

      const data = items.data;

      // manipulando os dados vindo em ingles
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
          );
      });

      this.allmoments = data; // referencia 
      this.moments = data; // dados que sera seguido durante a busca

    });
  }

}
