const request = require("supertest");
let server = require("../server");

beforeAll(() => {
  server = require("../server");
});

afterAll((done) => {
  server.close(done);
}, 10000); // 10 seconds

describe("POST /post", () => {
  it("should create a new annonce", async () => {
    const data = {
      titre: "Superbe appartement en centre-ville",
      description: "Un appartement charmant avec vue sur la rivière",
      prix: 250000,
      surface: 80,
      localisation: {
        ville: "Lyon",
        codePostal: "69000",
      },
      caractéristiques: {
        chambre: 2,
        salleDeBain: 1,
        balcon: true,
        jardin: false,
        parking: true,
      },
    };

    const res = await request(server).post("/post").send(data);

    expect(res.statusCode).toEqual(201);
    expect(res.body.newAnnonce).toHaveProperty("_id");
  });
});

describe("GET /annonces", () => {
  it("should retrieve all annonces", async () => {
    const res = await request(server).get("/annonces");

    expect(res.statusCode).toEqual(200);
  });
});
