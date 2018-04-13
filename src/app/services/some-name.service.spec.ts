import { TestBed, inject, async, tick, fakeAsync } from '@angular/core/testing';

import { SomeNameService } from './some-name.service';

describe('SomeNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeNameService]
    });
  });

  it('should be created', inject([SomeNameService], (service: SomeNameService) => {
    expect(service).toBeTruthy();
    expect(service.getNameById(2)).toBe('Vincent Wang');
  }));

  // 异步请求测试
  it('test getContactById promise with async', async(inject([SomeNameService], (service) => {
    service.getContactById(1).then((result) => {
      expect(result['telNum']).toEqual('18900001001');
    });
  })), 3000);

  // fakeAsync实现了将异步请求模拟成同步请求
  // 下面这个例子就是getContactById异步请求获得contactInfo后才能执行下一个getTelCity这个异步请求
  it('test getContactById firstly then getTelCity promise with fakeAsync', fakeAsync(inject([SomeNameService], (service) => {
    let contactInfo;
    let telCity;

    service.getContactById(1).then((result) => {
      contactInfo = result;
    });

    tick(1000); // 因为getContactById延迟1秒，所以这里至少是1000ms，否则会报错，因为contactInfo会在还没有获得前就进入下一环节

    service.getTelCity(contactInfo.telNum).then((result) => {
      telCity = result;
    });

    tick(1000);

    expect(contactInfo['name']).toEqual('zhang san');
    expect(telCity).toEqual('深圳');
  })), 3000);
});
