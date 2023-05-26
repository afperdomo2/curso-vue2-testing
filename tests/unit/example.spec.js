import { mount } from "@vue/test-utils";
import App from "@/App";
import { huevo, espinaca } from "./jestTest";

const wrapper = mount(App);
/**
 * Un Wrapper contiene un elemento llamado vm, el cual es la
 * instancia de Vue de la cual estamos haciendo el Wrapper
 */
const vm = wrapper.vm;

console.info("data:", vm.$data);
//console.info("props:", vm.$props);
//console.info("el:", vm.$el);
//console.info("children:", vm.$children);

/**
 * describe(): BLoque de pruebas
 */
describe("Prueba la calidad de los productos", () => {
  test("Calidad del huevo🥚", () => {
    /**
     * expect(): Es parte del framework de pruebas Jest y se
     * utiliza para escribir afirmaciones o expectativas sobre
     * el comportamiento esperado de una pieza de código
     *
     * toBe(): Se utiliza para comprobar la igualdad estricta
     * entre dos valores.
     */
    expect(huevo().estado[0]).toBe("fresco");
    expect(huevo().color).toBe("#000");

    // Comparar tipos de datos primitivos
    expect(typeof huevo().estado).toBe("object");
    expect(typeof huevo().estado[0]).toBe("string");
    expect(typeof huevo().color).toBe("string");
  });

  test("Calidad de la espinaca🥬", () => {
    /**
     * toEqual(): Realiza una comparación profunda y recursiva, lo
     * que significa que también verifica las propiedades anidadas
     * de objetos y arreglos. Esto es útil cuando necesitas comparar
     * estructuras de datos más complejas.
     */
    expect(espinaca()).toEqual({
      estado: 1,
      color: "verde",
    });
  });
});

describe("Pruebas generada con CodiumAI", () => {
  /**
   * Comprueba que la función huevo devuelve un objeto con la propiedad "estado"
   * establecida en ["fresco"] y "color" establecida en "#000".
   */
  it("test_huevo_returns_object_with_estado_fresco_and_color_black", () => {
    const result = huevo();
    expect(result.estado).toEqual(["fresco"]);
    expect(result.color).toEqual("#000");
  });

  /**
   * Comprueba que la función huevo devuelve un objeto con una propiedad adicional
   * "tamaño" establecida en "grande".
   */
  it("test_huevo_returns_object_with_additional_property", () => {
    const result = huevo();
    result.tamaño = "grande";
    expect(result.tamaño).toEqual("grande");
  });
});
