const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('responds with hi', async() => {
    const res = await request(app)
      .get('/');
    expect(res.text).toEqual('hi');
  });

  it('responds with an echo of the request', async() => {
    const res = await request(app)
      .post('/echo')
      .send('hi');
    expect(res.text).toEqual('hi');
  });

  it('respons with red to red request', async() => {
    const res = await request(app)
      .get('/red');
    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('respons with green to green request', async() => {
    const res = await request(app)
      .get('/green');
    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('respons with blue to blue request', async() => {
    const res = await request(app)
      .get('/blue');
    expect(res.text).toEqual('<h1>blue</h1>');
  });

  it('respons with 404 Error: Not Found to pink request', async() => {
    const res = await request(app)
      .get('/pink');
    expect(res.text).toEqual('Not Found');
  });
});
