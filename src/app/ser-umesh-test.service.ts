import { Injectable } from '@angular/core';

import {ClsUmeshTest} from './cls-umesh-test';

@Injectable()
export class SerUmeshTestService {

objUmTest : ClsUmeshTest;


  constructor() {  
  }

   GetDeveloperName(clsUmT: ClsUmeshTest): String {
clsUmT.DevelopedBy = "umesh"
return clsUmT.DevelopedBy;//this ;
   }

}
