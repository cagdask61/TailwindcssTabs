import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product-models/product.model";


@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    _products: Array<ProductModel> = [
        { id: 1, name: "Hp Laptop", price: 20_000, category: 'Teknoloji' },
        { id: 2, name: "Çorap", price: 10_00, category: 'Giyim' },
        { id: 3, name: "Kitap", price: 50_00, category: 'Kitaplar' },
        { id: 4, name: "Televizyon", price: 15_000, category: 'Teknoloji' },
        { id: 5, name: "Tencere", price: 200_00, category: 'Mutfak' },
    ];


    public get products(): Array<ProductModel> {
        return this._products;
    }


    get(id: number) {
        return this._products.find((value) => value.id === id);
    }

}