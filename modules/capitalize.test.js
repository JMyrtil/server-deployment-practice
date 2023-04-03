const capitalize = require('./capitalize.js');

describe('As a user I wanna see some CAP', () => {
  test('Should capitalize a string', () => {
    let output = capitalize('ohyesdaddy');
    expect(output).toEqual('OHYESDADDY');
  });
});
