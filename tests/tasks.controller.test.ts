import request from 'supertest';
import {app} from '../src/app';

describe('GET /tasks', () => {
  it('should return three tasks', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(3);
  });
});

describe('GET /', () => {
  it('should return Hello TypeScript + Express GEEENIAAAAALLLLL!', async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.text).toBe("'Hello TypeScript + Express GEEENIAAAAALLLLL!'");
  })
})