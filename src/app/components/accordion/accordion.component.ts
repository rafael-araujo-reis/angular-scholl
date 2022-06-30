import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() content: string | undefined;

  constructor() { }

  ngOnInit(): void { }

  toggle(element: any) {
    element.srcElement.parentNode.classList.toggle('active');
  }

}
