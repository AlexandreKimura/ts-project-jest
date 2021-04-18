import { Message } from './message';

const createSut = () => {
  return new Message();
};

describe('Message', () => {
  afterEach(() => jest.clearAllMocks()); //Limpa a cada iteração

  it('Should return undefined', () => {
    //sut = System under test -> Padrão
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('Should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1); //Vai ser chamado uma vez
  });

  it('Should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
