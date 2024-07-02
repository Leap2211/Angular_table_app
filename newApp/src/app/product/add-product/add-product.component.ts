import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../model';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ToastModule, ConfirmDialogModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
  providers: [MessageService, ProductService, ConfirmationService],
})
export class AddProductComponent implements OnInit {

  createProductForm!: any;
  id!: any;

  constructor(
    private service: ProductService,
    private message: MessageService,
    private confirmationsService: ConfirmationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ){
      this.createProductForm = this.fb.group({
        id: [null],
        name: ['', Validators.required],
        price: ['', Validators.required],
        quantity: ['', Validators.required],
        category: ['', Validators.required],
        image: ['', Validators.required],
        status: ['', Validators.required],
      })
  }

  addNewProduct(product: Product){

    const newProduct = {
      // id: this.totalLength + 1,
      id: ++this.lastestProduct.id,
      name: product.name,
      image: product.image,
      category: product.category,
      quantity: product.quantity,
      price: product.price,
      status: product.status,
    }

    this.service.createProduct(newProduct).subscribe((data: Product) =>{
      this.createProductForm.reset();
      this.message.add({severity:'success', summary: 'Success Message', detail: 'New Product Added'});
    })
  }

  handleCreate(){
    this.addNewProduct(this.createProductForm.value);
  }

  handleBack(){
    this.router.navigate(['../../product'], {relativeTo: this.activatedRoute})
    
  }


  confirm1(event: Event) {
    this.confirmationsService.confirm({
        target: event.target as EventTarget,
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
          this.addNewProduct(this.createProductForm.value);
            
        },
        reject: () => {
            this.message.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
}

totalLength: number = 0;

lastestProduct!: Product;

  ngOnInit(): void {
    this.service.getProducts().subscribe(data => { 
        this.totalLength = data.length;
        this.lastestProduct = data[data.length - 1];
        console.log(this.totalLength);
        
    })
  }
}
