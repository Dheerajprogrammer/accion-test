import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Customer } from "./customer";
import "rxjs/Rx"

@Injectable()
export class CustomerService {
private baseUrl = "http://jsonplaceholder.typicode.com/posts";  // web api URL
constructor(private http: Http) { }

getCustomers() {
    return this.http.get(this.baseUrl)
        .map(res => <Customer[]> res.json())
        .catch(error => {
            console.log(error);
            return Observable.throw(error);
        });
}}