import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../../model';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ToastModule, ConfirmDialogModule],
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.scss',
  providers: [ProductService, MessageService, ConfirmationService]
})
export class ModifyComponent implements OnInit {

  updateForm!: any;
  product!: Product;
  isClick: boolean = false;
  

  constructor(
    private service: ProductService,
    private confirmationsService: ConfirmationService,
    private message: MessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ){  
      this.updateForm = this.fb.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        quantity: ['', Validators.required],
        category: ['', Validators.required],
        image: [null, Validators.required],
        status: ['', Validators.required],
        
      })
  }

  getProductDetails(){
    this.activatedRoute.params.subscribe((param: Params) => {
      this.service.getById(param['id']).subscribe((data: Product) => {
        this.product = data;
        this.updateForm.patchValue(this.product);
      })
    })
  }


  update(){
    this.service.updateProduct(this.product.id, this.updateForm.value).subscribe((data: any) => {
      this.message.add({severity:'success', summary: 'Success', detail: 'Updated Successfully'});
    })
   
    }

  handleSave(){
    this.update();
    console.log('Update Successfully')
  }
  handleCancel(){
    this.message.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  }

  handleBack(){
    this.router.navigate(['../../../product'], {relativeTo: this.activatedRoute});
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
           this.update();
        },
        reject: () => {
            this.handleCancel();
        }
    });
}



  ngOnInit(): void {
      this.getProductDetails();
      

}
}
