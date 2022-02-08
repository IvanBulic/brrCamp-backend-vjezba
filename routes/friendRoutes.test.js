const request = require("superagent");
const app = require("../my-friends");

test("should insert a new friend to the table",async ()=>{
    const response = await request(app).post("/friend").send({
        firstName:"jane",
        lastName:"doe"
    })
    expect(response.status).toBe(200)
})