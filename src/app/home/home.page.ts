import { Component } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonLabel,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    FormsModule,
    IonLabel,
    CommonModule,
  ],
})
export class HomePage {
  montant: string = '';
  fromCurrency: string = '';
  toCurrency: string = '';
  result: string = '';
  

  currencyKeys: string[] = [];

  constructor(public currencyService: CurrencyService) {
    this.currencyKeys = Object.keys(this.currencyService.country_list);
  }

  add(c: string) {
    this.montant += c;
  }

  action() {

    if (this.montant){
    this.currencyService.getRates(this.fromCurrency).subscribe((data) => {
      console.log(data);
      const rate = data.conversion_rates[this.toCurrency];
      this.result = (parseFloat(this.montant) * rate).toFixed(2);
    });
  }
  else
  console.log('montant?')
  }
}
