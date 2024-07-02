import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ModifyComponent } from './product/modify/modify.component';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'product',
        children: [

            {
                path: '',
                loadComponent: () => import('./product/product.component').then(m => m.ProductComponent)
            },
            {
                path: 'product-detail/:id',
                loadComponent: () => import('./product/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
            },
            {
                path: 'add-product',
                loadComponent: () => import('./product/add-product/add-product.component').then(m => m.AddProductComponent)
            },
            {
                path: 'modify-product/:id',
                loadComponent: () => import('./product/modify/modify.component').then(m => m.ModifyComponent)
            },

            ]

    },
    {
        path: 'proposals',
        loadComponent: () => import('./proposals/proposals.component').then(m => m.ProposalsComponent),
    },
    
   

];
