import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  let pipe: PhonePipe;

  it('create an instance', () => {
    pipe = new PhonePipe();
    expect(pipe).toBeTruthy();
  });

  it('test transform', () => {
    expect(pipe.transform('13700001978')).toEqual('137-0000-1978');
  });
});
