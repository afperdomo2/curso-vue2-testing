import { mount } from "@vue/test-utils";
import App from "@/App";

/**
 * El wrapper proporciona una interfaz para interactuar con el
 * componente y realizar pruebas
 */
const wrapper = mount(App);

// vm: representa la instancia de Vue del componente que estamos probando
const vm = wrapper.vm;

console.info("data:", vm.$data);
//console.info("props:", vm.$props);
//console.info("el:", vm.$el);
//console.info("children:", vm.$children);

describe("Probar que se cambió la propiedad changeTest (TDD)", () => {
  test("Pruebas de hacer click en un botón", () => {
    // Almacena el valor actual de la propiedad 'changeTest'
    const lastValue = wrapper.vm.changeTest;

    // wrapper.find("button"): Busca el elemento botón en el componente
    // trigger("click"): Simula un evento 'click' en el elmento encontrado
    wrapper.find("button").trigger("click");

    /**
     * Compara que el valor de la propiedad 'changeTest', sea igual al
     * valor almacenado en la varaible 'lastValue', más 1 (+1)
     */
    expect(wrapper.vm.changeTest).toBe(lastValue + 1);
  });
});
