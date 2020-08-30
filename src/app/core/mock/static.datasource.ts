import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProductItem} from "../../modules/components/product/product.component";

@Injectable()
export class StaticDataSource {
  private products: ProductItem[] = [
    {title:'Гречка',price:15.90,mass:1000,
      nutrition:{energy:1344,protein:12.13,carbohydrates:62.08,fats:3.19}}
  ];

  getProducts(): Observable<ProductItem[]> {
    return of(this.products);
  }
}
