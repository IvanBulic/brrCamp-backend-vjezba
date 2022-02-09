const request = require("supertest");
const app = require("../my-friends");

test('getting all friends works', async () => {
    const response = await request(app.callback()).get('/friends');
    expect(response.status).toBe(200);
});