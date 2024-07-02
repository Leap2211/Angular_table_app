import { Routes } from '@angular/router';



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
