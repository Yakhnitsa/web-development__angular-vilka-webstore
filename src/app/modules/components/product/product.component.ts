import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductItem

  constructor() { }

  ngOnInit(): void {
  }

}

export interface ProductItem{
  title: string
  description?: string
  price: number
  mass: number
  nutrition:{
    energy: number,
    protein: number,
    carbohydrates: number,
    fats: number,
  }
}
