import { Type } from "@angular/core";

export interface TabModel {
    name: string;
    title: string;
    component: Type<any>;
    description?: string;
    closable: boolean;
}