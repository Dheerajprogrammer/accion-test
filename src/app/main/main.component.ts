import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Customer } from '../customer';
import { CustomerService } from '../table-content.service'

@Component({
  selector: 'app-main',
  template: ` 
<div class="container">
  <h2>Table Of Information From API</h2>
  <p>Ascending/Descending Order Table:</p>            
  <table class="table">
    
    <thead class="pointer">
      <tr>
        <th (click)="sort('userId')">User ID</th>
        <th (click)="sort('id')">ID</th>
        <th (click)="sort('title')">Title</th>
        <th (click)="sort('body')">Body</th>

      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let customer of customers">
        <td>{{customer.userId}}</td>
        <td>{{customer.id}}</td>
        <td>{{customer.title}}</td>
        <td>{{customer.body}}</td>

           </tr>
   
    
    </tbody>
  </table>
</div>`,
  styles: ['.pointer{cursor:pointer;}'],
  providers: [
    HttpModule,
    CustomerService
  ]
})

export class CustomerComponent implements OnInit {
  api: string;
  public customers: Customer[];
  public sortReverse = false;
  public sortField = "id";
  constructor(private customerService: CustomerService) {
    this.api = "API Customers";
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(
      customers => {
        console.log(this.customers);
        this.customers = customers;
      },
      error => alert("error"));
  }
  sort(fieldName){
    if(fieldName === this.sortField){
      this.sortReverse = !this.sortReverse;
    }
    this.sortField = fieldName;

    this.customers = this.customers.sort((prev, next) => {
    if(prev[fieldName] < next[fieldName]){
      return this.sortReverse ? 1 : -1;
    } else {
       return this.sortReverse ? -1 : 1;
    }
    })
  }
}