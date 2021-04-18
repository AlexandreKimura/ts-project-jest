import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks()); //Limpa a cada iteração

describe('IndividualCustomer', () => {
  it('Should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Alexandre', 'Kimura', '111.333');
    expect(sut).toHaveProperty('firstName', 'Alexandre');
    expect(sut).toHaveProperty('lastName', 'Kimura');
    expect(sut).toHaveProperty('cpf', '111.333');
  });

  it('Should have methods to getName and getIDN', () => {
    const sut = createIndividualCustomer('Alexandre', 'Kimura', '111.333');
    expect(sut.getName()).toBe('Alexandre Kimura');
    expect(sut.getIDN()).toBe('111.333');
  });
});

describe('EnterpriseCustomer', () => {
  it('Should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '111.3331111');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '111.3331111');
  });

  it('Should have methods to getName and getIDN', () => {
    const sut = createEnterpriseCustomer('Udemy', '111.3331111');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('111.3331111');
  });
});
