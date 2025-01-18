import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {CommandModule} from '@angular/cli/src/command-builder/command-module';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-customers',
  imports: [
    HttpClientModule,
   CommonModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent  implements  OnInit{
  customers: any;
  constructor(private httpclient:HttpClient) {
  }
  ngOnInit() {
    this.httpclient.get("http://localhost:8888/CUSTOMER-SERVICE/customers")
      .subscribe(
        {
          next:data=>{
this.customers=data;
          },
          error: err => {
            console.log(err)
          }
        }

      )
  }

}
