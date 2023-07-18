import HomeComponent from "./components/home/home.component";
import ProductsComponent from "./components/products/products.component";
import { TabModel } from "./models/tabs-model/tab.model";


export const TABS: Array<TabModel> = [
    { name: 'home_component', title: 'Home', component: HomeComponent, closable: true, description: "Home Page" },
    { name: 'products_component', title: 'Products', component: ProductsComponent, closable: true, description: "Products Page" },
];