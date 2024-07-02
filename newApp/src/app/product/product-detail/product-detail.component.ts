import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../../model';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  providers: [MessageService, ProductService],
})
export class ProductDetailComponent implements OnInit {
    product!: Product;
   
    constructor(private service: ProductService,
                private activatedRoute: ActivatedRoute,
                private fb: FormBuilder,
                private router: Router,
                private MessageService: MessageService){
    
  }
    getProductDetails(){
      this.activatedRoute.params.subscribe((parms: Params) => {
        this.service.getById(parms['id']).subscribe((data: any) => {
          this.product = data;
         
        })
      })
    }

   handleBack(){
      this.router.navigate(['../../../product'], {relativeTo: this.activatedRoute})
   }
    ngOnInit(): void {
      this.getProductDetails();
    }


}

