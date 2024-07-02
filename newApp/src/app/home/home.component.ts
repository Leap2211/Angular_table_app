import { Component, OnInit } from '@angular/core';
import { Product } from '../../model';
import { ProductService } from '../services/product.service';
import { MessageService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChartModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [MessageService, ProductService],
})
export class HomeComponent implements OnInit {

  basicData: any;
  basicOptions: any;
  
  

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    
  ) { }

 

  ngOnInit(): void {
    // const documentStyle = getComputedStyle(document.documentElement);
    // const textColor = documentStyle.getPropertyValue('--text-color');
    // const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    // const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
        labels: ['Electronics', 'Fashion', 'Clothes', 'Other'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '',
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: '',
                },
                grid: {
                    color: '#98F5F9',
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: '',
                },
                grid: {
                    color: '',
                    drawBorder: false
                }
            }
        }
    };
}
}

  


