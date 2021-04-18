//Testando asserções

describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).not.toBeNull();

    expect(number).toBeGreaterThan(8);
    expect(number).toBeLessThan(11);

    expect(number).toBeCloseTo(10.00001);
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Alexandre', age: 24 };
    const person2 = { ...person };

    expect(person2).toEqual(person);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 24);

    expect(person.name).toBe('Alexandre');
  });
});
