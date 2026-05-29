import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductDetail } from '../../models/ProductDetail';
import { ProductsService } from '../../services/products-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  checkoutForm = new FormGroup({
    cognome : new FormControl('',Validators.required),
    nome : new FormControl('',Validators.required),
    mail : new FormControl('',[Validators.email,Validators.required]),
    products : new FormControl<ProductDetail[]>([])
  })

  carrello : ProductDetail[] = []
  constructor(private productsService:ProductsService, private http:HttpClient)
  {
    this.carrello = this.productsService.getAllCart();
  }

  Conferma()
  {
    let confirm = this.checkoutForm.value
    confirm.products = this.carrello
    this.http.post('https://webhook.site/780b07ea-aa1b-4530-8eb8-0ba8aa999c63',confirm).subscribe(r=> console.log(r))
  }
}
