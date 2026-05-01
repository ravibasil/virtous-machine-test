const request = require("supertest")
const app = require("./server")

describe("Items API", () => {

    it("should create an item", async () => {
        const res = await request(app)
            .post("/items")
            .send({ title: "Test items", desc: "Test Description"});
        
        expect(res.statusCode).toBe(201)
        expect(res.body.title).toBe("Test items")
        
        
    })
})