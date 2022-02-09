const { DESCRIBE } = require("sequelize/dist/lib/query-types");
const request = require("supertest");
const app = require("../my-friends");

describe('inserting friends : to db',()=>{
    test('insert friend to db is successful', async () => {
        const response = await request(app.callback())
            .post('/friend')
            .send({
                firstName:'jane',
                lastName:'doe'
            });

        expect(response.status).toBe(200);
        expect(response.body.id).toBeDefined();
    })
    test('got invalid name', async () => {
        const response = await request(app.callback())
            .post('/friend')
            .send({
                firstName:'1jane',
                lastName:'doe'
            });

        expect(response.status).toBe(400);
        expect(response.body.errorMessage).toBe("Name cannot contain numbers or special characters");
    })
    test('missing required field', async () => {
        const response = await request(app.callback())
            .post('/friend')
            .send({
                firstName:'jane'
            });

        expect(response.status).toBe(400);
        expect(response.body.errorMessage).toBe('Missing a required field');
    })
});