import { Injectable } from '@angular/core';

@Injectable()
export class SomeNameService {

  constructor() { }

  getNameById(id: number) {
    return 'Vincent Wang';
  }
}
