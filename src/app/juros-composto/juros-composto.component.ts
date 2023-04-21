import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css']
})
export class JurosCompostoComponent implements OnInit {
  
    @Input() valorInicial = 0;
    public valorFinal = 0;
    public taxaJurosComposto = 0;
    public entradas: number[] = [];

    public jurosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jurosForm = this.fb.group({
      taxa: [null, Validators.required],
      tempo: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.jurosForm.valid) {
      const taxa = this.jurosForm.get('taxa')?.value / 100;
      const tempo = this.jurosForm.get('tempo')?.value;

      let capital = this.valorInicial + this.valorFinal;
      this.valorFinal = capital * Math.pow(1 + taxa, tempo);
      this.taxaJurosComposto = ((this.valorFinal - capital) / capital) * 100;
      this.entradas = [];
      for (let i = 0; i < 30; i++) {
        this.entradas.push(capital * taxa);
        capital += this.entradas[i];
      }
    } else {
      // handle invalid form
    }
  }
}
