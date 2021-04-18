import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); //Limpa a cada iteração

  it('Should return undefined', () => {
    //sut = System under test -> Padrão
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1); //Vai ser chamado uma vez
  });

  it('Should call console.log with "Pedido salvo com sucesso!"', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso!');
  });
});
