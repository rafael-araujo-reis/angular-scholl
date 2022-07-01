import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() description: string | undefined;
  @Input() icon: string | undefined;

  constructor() { }

  ngOnInit(): void { }

}
