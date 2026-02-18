import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './app.component.html',
  styles: [`
    body { font-family: Arial, sans-serif; padding: 20px; }
    .field { margin-bottom: 18px; }
    label { font-weight: 700; display:block; margin-bottom:6px; }
    input { width: 100%; padding: 10px; font-size: 16px; }
    .meta { font-size: 12px; color:#555; margin-top:6px; word-break: break-all; }
    .box { border: 1px solid #ddd; padding: 12px; border-radius: 8px; margin-bottom: 14px; }
  `]
})
export class AppComponent {
  // same pattern as CP
  ssnPattern = '\\d{3}-?\\d{2}-?\\d{4}'; // matches your CP markup

  current = new FormControl('', { nonNullable: true, validators: [Validators.pattern(this.ssnPattern)] });
  fixed   = new FormControl('', { nonNullable: true, validators: [Validators.pattern(this.ssnPattern)] });
}
