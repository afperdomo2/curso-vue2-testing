/**
 * shallowMount: Se utiliza para montar componentes de Vue en pruebas unitarias
 * con un enfoque de montaje superficial.
 *
 * Permite montar un componente sin cargar a los componentes hijos que tenga.
 */
import { shallowMount } from "@vue/test-utils";
import App from "@/App";

/**
 * El wrapper proporciona una interfaz para interactuar con el
 * componente y realizar pruebas
 */
const wrapper = shallowMount(App);

describe("🧩Probando la integridad de las propiedades data()", () => {
  // 1. Strings
  test("Prueba la propiedad: name", () => {
    // Prueba si la propiedad existe
    expect(wrapper.vm.$data).toHaveProperty("name");
    // Prueba el tipo de dato de la propiedad
    expect(typeof wrapper.vm.name).toBe("string");
  });
  test("Prueba la propiedad: image", () => {
    expect(wrapper.vm.$data).toHaveProperty("image");
    expect(typeof wrapper.vm.image).toBe("string");
  });
  test("Prueba la propiedad: principalType", () => {
    expect(wrapper.vm.$data).toHaveProperty("principalType");
    expect(typeof wrapper.vm.principalType).toBe("string");
  });

  // 2. Numbers
  test("Prueba la propiedad: weight", () => {
    expect(wrapper.vm.$data).toHaveProperty("weight");
    expect(typeof wrapper.vm.weight).toBe("number");
  });
  test("Prueba la propiedad: height", () => {
    expect(wrapper.vm.$data).toHaveProperty("height");
    expect(typeof wrapper.vm.height).toBe("number");
  });

  // 3. Arrays
  // toBeTruthy: Evalua si algo es verdadero, en el contexto booleano
  test("Prueba la propiedad: types", () => {
    expect(wrapper.vm.$data).toHaveProperty("types");
    expect(Array.isArray(wrapper.vm.types)).toBeTruthy();
  });
  test("Prueba la propiedad: abilities", () => {
    expect(wrapper.vm.$data).toHaveProperty("abilities");
    expect(Array.isArray(wrapper.vm.abilities)).toBeTruthy();
  });
});
