import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {
      description: 'Produtos',
      path: 'products',
      url: 'products'
    },
    {
      description: 'Serviços',
      path: 'services',
      url: 'services'
    },
    {
      description: 'Clientes',
      path: 'clients',
      url: 'clients'
    },
    {
      description: 'Fale conosco',
      path: 'faq',
      url: 'faq'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
