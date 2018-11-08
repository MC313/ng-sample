import { ShoeModule } from './shoe.module';

describe('ShoeModule', () => {
  let shoeModule: ShoeModule;

  beforeEach(() => {
    shoeModule = new ShoeModule();
  });

  it('should create an instance', () => {
    expect(shoeModule).toBeTruthy();
  });
});
