import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css']
})
export class JurosCompostoComponent implements OnInit {
  
    public jurosForm: FormGroup;
    public valorInicial = 0;
    public valorFinal = 0;
    public taxaJurosComposto = 0;
    public entradas: number[] = [];

  constructor(private fb: FormBuilder) {
    this.jurosForm = this.fb.group({
      capital: [null, Validators.required],
      taxa: [null, Validators.required],
      tempo: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.jurosForm.valid) {
      const capital = this.jurosForm.get('capital')?.value;
      const taxa = this.jurosForm.get('taxa')?.value / 100;
      const tempo = this.jurosForm.get('tempo')?.value;
      this.valorInicial = capital;
      this.valorFinal = capital * Math.pow(1 + taxa, tempo);
      this.taxaJurosComposto = ((this.valorFinal - this.valorInicial) / this.valorInicial) * 100;
      this.entradas = [];
      for (let i = 0; i < 6; i++) {
        this.entradas.push(this.valorInicial * taxa);
        this.valorInicial = this.valorInicial + this.entradas[i];
      }
    } else {
      // handle invalid form
    }
  }
}
