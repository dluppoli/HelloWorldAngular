import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { CommonModule } from '@angular/common';
import { ProductsResults } from '../../models/products-results';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
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
