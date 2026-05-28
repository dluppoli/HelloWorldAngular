import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { CommonModule } from '@angular/common';
import { ProductsResults } from '../../models/products-results';
import { ProductCard } from "../product-card/product-card";

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  products : ProductsResults | undefined

  constructor(private productsService:ProductsService, private cd:ChangeDetectorRef)
  {
    this.productsService.getAll().subscribe(
      r => {
        this.products = r
        cd.detectChanges()
      }
    )
  }
}
