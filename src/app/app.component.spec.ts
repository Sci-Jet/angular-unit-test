import { SomeNameService } from './services/some-name.service';
import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { DetailComponent } from './detail/detail.component';
import { PhonePipe } from './pipes/phone.pipe';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DetailComponent, // 因为app.component.ts中使用了DetailComponent，所以这里也要声明，app.module.ts里面的声明这里用不上
        PhonePipe
      ],
      providers: [SomeNameService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));


});
