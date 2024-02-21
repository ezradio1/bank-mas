import { ButtonModule } from 'primeng/button';
import { Component, Input, OnInit } from '@angular/core';

type ButtonVariant = 'orange' | 'primary' | 'transparent' | 'dark';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() variant: ButtonVariant = 'orange';
  @Input() label = '';
  @Input() type = 'button';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() icon = '';
  @Input() iconPos = 'left';
  constructor() {}

  getVariant() {
    const vairants: { [key: string]: string } = {
      primary: 'primary',
      orange: 'btn-orange',
      transparent: 'btn-transparent',
      dark: 'btn-dark',
    };
    return vairants[this.variant];
  }

  ngOnInit(): void {}
}
