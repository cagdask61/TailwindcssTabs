import { InjectionToken, Provider } from "@angular/core";
import HomeComponent from "./components/home/home.component";
import ProductsComponent from "./components/products/products.component";
import { TabModel } from "./models/tabs-model/tab.model";
import ProductDetailComponent from "./components/product-detail/product-detail.component";


const TABS: Array<TabModel> = [
    { name: 'home_component', title: 'Home', component: HomeComponent, closable: true, description: "Home Page" },
    { name: 'products_component', title: 'Products', component: ProductsComponent, closable: true, description: "Products Page" },
    { name: 'product_detail', component: ProductDetailComponent, closable: true }
];

export const PROVIDE_TABS = new InjectionToken<Array<TabModel>>('GET_TABS');

export const provideTabs = () => {
    return {
        provide: PROVIDE_TABS,
        useValue: TABS
    } as Provider;
}