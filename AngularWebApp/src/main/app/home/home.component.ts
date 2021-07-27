import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/main/app/api.service';

// src/main/app/api.service.ts
interface Data {
	id: number, 
	name: string,
	description: string,
	price: number,
	imageUrl: string,
	quantity: number
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

    products: Data[] = [];
    constructor(private apiService: ApiService) { 
		this.apiService.fetchAll().subscribe(data=> { 
		this.products = data;
		console.log(data);
		})
	}
	ngOnInit() {

	}	

  gotoUser(){
    this.router.navigate(['/user']);
  }
}

