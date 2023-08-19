const { charServices, charServicesById } = require('./charServices');

//jest.mock('./charServices.js');

describe("Characters Service Test", () => {
    test("This will get all characters", async() => {
        const result = await charServices();
        expect(result.data.results).toHaveLength(20);
        expect(result.data.results[1].id).toEqual(2);
        expect(result.data.results[1].name).toEqual("Morty Smith");
        expect(result.data.results[1].status).toEqual("Alive");
        expect(result.data.results[1].species).toEqual("Human");
    });

    test("This will get a character by id", async() => {
        const result = await charServicesById(1);
        expect(result.data.id).toBeGreaterThanOrEqual(1);
        expect(result.data.name).toBe("Rick Sanchez");
        expect(result.data.status).toBe("Alive");
        expect(result.data.species).toBe("Human");
        expect(result.data.gender).toBe("Male");
        expect(result.data.origin.name).toContain("Earth (C-137)");
        expect(result.data.location.name).toContain("Citadel of Ricks");
        expect(result.data.image).toContain("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
        expect(result.data.episode).toHaveLength(51);
        expect(result.data.url).toContain("https://rickandmortyapi.com/api/character/1");
        expect(result.data.created).toContain("2017-11-04T18:48:46.250Z");
    });


});

