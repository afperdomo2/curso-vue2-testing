import { mockService } from "../../public/mockCall";

describe("📶Obtener los datos de un servicio simulado", () => {
  test("Probando los datos obtenidos al resolver la promesa", () => {
    // Datos usados para realizar la prueba
    const data = {
      mock: [
        {
          data: {
            name: "bulbasaur",
            height: 7,
            weight: 69,
            sprites:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            abilities: ["chlorophyll", "overgrow"],
            types: ["poison"],
          },
        },
        {
          data: {
            name: "charmander",
            height: 6,
            weight: 85,
            sprites:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            abilities: ["solar-power", "blaze"],
            types: ["fire"],
          },
        },
        {
          data: {
            name: "squirtle",
            height: 5,
            weight: 90,
            sprites:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            abilities: ["rain-dish", "torrent"],
            types: ["water"],
          },
        },
      ],
    };
    // assertions: Define el número esperado de aserciones en un test
    expect.assertions(1);

    const res = mockService(); // Devuelve una promesa

    // Al resolver la promesa, el resolves debe ser igual al data
    expect(Promise.resolve(res)).resolves.toStrictEqual(data);
  });
});
