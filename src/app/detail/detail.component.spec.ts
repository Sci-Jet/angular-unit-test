import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { PhonePipe } from '../pipes/phone.pipe';
import { SomeNameService } from '../services/some-name.service';


// Mock是一个很重要的概念， SomeNameService为了简化说明问题是直接返回一个Name
// 事实上，大部分service都会用到restful api来获取数据，这个时候就意味着需要搭建json-server或后端服务器配合
// 这样测试效率低且为了测试需要做大量的工作，所以最快捷的方式是采用Mock通过代码来获取数据
// 毕竟单元测试目的在于一些特例的排除，避免他人修改代码时把以前正确的代码改出问题来
// 所以mock要做的事情就是无需太复杂的配合自己模拟一些极端情况来测试，只要不通过就说明他人修改代码出问题了
// 像这种类就是为了配合测试的就不需要刻意再单独搞一个文件了
class MockSomeNameService extends SomeNameService {
  getNameById(id: number) {
    return 'Peter She';
  }
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DetailComponent,
        PhonePipe,
      ],
      // providers: [SomeNameService]
      providers: [
        { provide: SomeNameService, useClass: MockSomeNameService }
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
    component.nameService.getNameById(1);
    expect(component.name).toEqual('Peter She'); // 因为这里已经重新mock过了，返回的是Peter She，所以不能再基于之前真实服务中的Vincent Wang来测试了，否则会得到错误结果
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
