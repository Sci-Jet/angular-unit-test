import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail: any = {};

  constructor() { }

  ngOnInit() {
    this.getById(1);
  }

  getById(id: number) {
    this.detail = {
      'id': 1,
      'name': 'Byron Dong',
      'telNum': '18900001001',
      'address': '上海市宝山区智慧湾',
      'email': '123@qq.com',
      'birthday': '1988/08/08',
      'collection': 1
    };
  }

  click() {
    this.detail.address = '共富二村';
  }
}
