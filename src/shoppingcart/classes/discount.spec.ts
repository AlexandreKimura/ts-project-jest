import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); //Limpa a cada iteração

  it('Should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('Should apply fifty discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150)).toBe(75);
  });

  it('Should apply ten discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBe(90);
  });
});
