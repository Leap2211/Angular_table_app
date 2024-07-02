import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, TableModule, ButtonModule, CommonModule, ConfirmDialogModule, ToastModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [ProductService, MessageService, ConfirmationService]
})
export class ProductComponent implements OnInit{

  products: Product[] = [];

  constructor(private service: ProductService, 
              private message: MessageService, 
              private route: Router, 
              private confirmationsService: ConfirmationService,
              private activatedRoute: ActivatedRoute){}

  getAllProduct(){
    this.service.getProducts().subscribe((data: Product[]) =>{
      this.products = data;
    })
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  handleDetail(id?: number): void {
    this.route.navigate(['product-detail', id] ,{relativeTo: this.activatedRoute})
  
}

  handleEdit(id?: number): void { 
    this.route.navigate(['modify-product', id] ,{relativeTo: this.activatedRoute})
  }

  handleCreate(): void {
    this.route.navigate(['add-product'] ,{relativeTo: this.activatedRoute})
  }

  confirm1(event: Event, id: any) {
    this.confirmationsService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
           this.handleDelete(id);
        },
        reject: () => {
            this.message.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
}

  handleDelete(id?: any): void{
    this.service.deleteProduct(id).subscribe(() => {
      this.message.add({severity:'success', summary: 'Success', detail: 'Product deleted successfully'});
    })
  }

}
