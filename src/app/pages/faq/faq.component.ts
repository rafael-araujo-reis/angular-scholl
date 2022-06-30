import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faq = [
    {
      ask: 'Posso escolher um número novo de telefone fixo que não tenha sido usado por ninguém?',
      response: 'Não é possível escolher um número novo de telefone que ninguém tenha usado.'
    },
    {
      ask: 'É possível mudar o prefixo da minha linha fixa?',
      response: 'Sim, você pode pedir a mudança de prefixo ou de número de telefone. Para isso, acesse o '
    },
    {
      ask: 'A mudança de endereço do telefone fixo é paga?',
      response: 'O serviço de mudança de endereço pode ser cobrado, dependendo do tipo de produto contratado. Recomendamos que você consulte o valor no momento do seu pedido.'
    },
    {
      ask: 'Como faço para pedir a transferência da minha linha fixa?',
      response: 'Para pedir a transferência de linha você precisa ver a disponibilidade do lugar que quer. Para consultar, entre em contato com a nossa Central de Relacionamento no número 10315 com os dados do novo endereço'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
    console.log('faq');

  }

}
