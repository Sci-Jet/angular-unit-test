import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { PhonePipe } from '../pipes/phone.pipe';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailComponent,
        PhonePipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 增加用于测试getById函数，以上都是默认生成的
  it('test "getById"', () => {
    component.getById(1);
    expect(component.detail.name).toEqual('Byron Dong');
  });

  // 单元测试内已经实现部分UI测试的功能
  it('test UI click event', () => {
    const nativeElement = fixture.debugElement.nativeElement;

    expect(nativeElement.querySelector(
      '.input').value).toEqual('some info');

    // nativeElement.querySelector(
    //   '.input').value = 'abc';

    nativeElement.querySelector('.btn').click();
    fixture.detectChanges(); // JS变量、末班内容变更时出发变化监测，否则地址一栏不会发生变化
  });
});
