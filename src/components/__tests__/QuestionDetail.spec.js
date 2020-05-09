describe('The Question Detail component', () => {
  beforeEach(() => {
    console.log('before each');
  })

  beforeAll(() => {
    console.log('before all');
  })

  it.only(`It should not regress`, () => {
    expect(2 + 2).toEqual(4);
  })
})