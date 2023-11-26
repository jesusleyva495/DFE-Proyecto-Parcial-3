import { Component, Input } from '@angular/core';
import { infoDatos } from 'src/app/services/infoDatos';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent {
  @Input() mensaje: string = '';
  @Input() data!: infoDatos[];
  @Input() total!: number;
  @Input() importe: string = '';
}
