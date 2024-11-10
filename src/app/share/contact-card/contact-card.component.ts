import { Component, inject, Input, OnInit } from '@angular/core';
import { UserPreview } from 'src/models/list';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() contact?: UserPreview;
  constructor() { }

  ngOnInit() {}

}
