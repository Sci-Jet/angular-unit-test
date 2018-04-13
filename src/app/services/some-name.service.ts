import { Injectable } from '@angular/core';

@Injectable()
export class SomeNameService {

  constructor() { }

  getNameById(id: number) {
    return 'Vincent Wang';
  }


  getContactById(id: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          'id': 1,
          'name': 'zhang san',
          'telNum': '18900001001',
          'address': 'Guang Dong',
          'email': '123@qq.com',
          'birthday': '1990/10/20',
          'collection': '1'
        });
      }, 1000);
    });
  }

  getTelCity(telNum: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (telNum === '18900001001') {
          resolve('深圳');

        } else {
          resolve('未知城市');
        }
      }, 1000);
    });
  }

}
