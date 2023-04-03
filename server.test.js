'use strict'

const supertest = require('supertest');

const app = require('./server.js');
const request = supertest(app);

describe('As a user I want to send a request and get a capitalized message', () => {

  test('Should return a captalized string when sending a GET request to /lemme-cap', async () => {
    let response = await request.get('/lemme-cap?message=ohyesdaddy');
    expect(response.text).toEqual('OHYESDADDY');
  });
});
