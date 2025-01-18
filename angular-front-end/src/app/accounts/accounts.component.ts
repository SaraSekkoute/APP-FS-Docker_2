import {Component, OnInit} from '@angular/core';
import {HttpBackend, HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-accounts',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent  implements  OnInit{
  accounts:any;
  constructor(private httpclient:HttpClient) {
  }

  ngOnInit() {
    this.httpclient.get("http://localhost:8888/ACCOUNT-SERVICE/accounts")
      .subscribe(
        {
          next:data=>{
            this.accounts=data;
          },
          error: err => {
            console.log(err)
          }
        }

      )
  }

}
