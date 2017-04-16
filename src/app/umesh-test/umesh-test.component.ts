import { Component, OnInit } from '@angular/core';
import {ClsUmeshTest} from './../cls-umesh-test';
import {SerUmeshTestService} from './../ser-umesh-test.service';

@Component({
  selector: 'app-umesh-test',
  templateUrl: './umesh-test.component.html',
  styleUrls: ['./umesh-test.component.css'],
  providers: [SerUmeshTestService]
})

export class UmeshTestComponent implements OnInit {
objumm :SerUmeshTestService = new SerUmeshTestService();
 
  constructor(private objum:SerUmeshTestService) { 
   
  }
objclsum:ClsUmeshTest = new ClsUmeshTest();
developerName:String = this.objum.GetDeveloperName(this.objclsum);
  ngOnInit() {
    
  }

}
