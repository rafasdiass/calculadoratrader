import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daytrader-form',
  templateUrl: './daytrader-form.component.html',
  styleUrls: ['./daytrader-form.component.css']
})
export class DaytraderFormComponent implements OnInit {
  form: FormGroup;
  resultados: {
    bancaInicial: number;
    primeirasEntradas: number[];
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      deposito: [null],
      metaDiaria: [null],
      payout: [null]
    });

    this.resultados = {
      bancaInicial: 0,
      primeirasEntradas: []
    };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      const deposito = this.form.value.deposito;
      const metaDiaria = this.form.value.metaDiaria;

      const bancaInicial = deposito * 0.1;
      const primeiraEntrada = bancaInicial * 0.5;
      const segundaEntrada = bancaInicial * (1 / 3);
      const terceiraEntrada = bancaInicial * (1 / 4);
      const quartaEntrada = bancaInicial * (1 / 5);
      const quintaEntrada = bancaInicial * (1 / 6);
      const sextaEntrada = bancaInicial * (1 / 7);

      this.resultados = {
        bancaInicial,
        primeirasEntradas: [primeiraEntrada, segundaEntrada, terceiraEntrada, quartaEntrada, quintaEntrada, sextaEntrada].map(
          entrada => entrada < 5 ? 5 : entrada // garante que não será exibido um valor menor que 5
        )
      };
    }
  }
}
