/**
 * mount: Se utiliza para montar un componente de Vue en una instancia
 * de prueba completa, lo que significa que el componente y todos sus
 * componentes hijos se montan y se ejecuta su lógica completa.
 */
import { mount } from "@vue/test-utils";
import App from "@/App";

describe("🔄️Prueba la correcta renderización de los componentes", () => {
  const wrapper = mount(App);
  test("Prueba el renderizado de: 2 sections", () => {
    // 1ra. Section
    // Prueba si existe el elemento con la clase descrita
    expect(wrapper.find(".app-pokemon-main").exists()).toBeTruthy();

    // Prueba si ese elemento es una section
    expect(wrapper.find(".app-pokemon-main").element.tagName).toBe("SECTION");

    // 2da. Section
    expect(wrapper.find(".app-pokemon-stats").exists()).toBeTruthy();
    expect(wrapper.find(".app-pokemon-stats").element.tagName).toBe("SECTION");
  });

  test("Prueba el renderizado de: 1 imagen", () => {
    expect(wrapper.find("img").exists()).toBeTruthy();
    expect(wrapper.find("img").element.tagName).toBe("IMG");
  });

  test("Prueba el renderizado de: 2 p", () => {
    expect(wrapper.find(".pokemon-name").exists()).toBeTruthy();
    expect(wrapper.find(".pokemon-name").element.tagName).toBe("P");

    expect(wrapper.find("#abilities").exists()).toBeTruthy();
    expect(wrapper.find("#abilities").element.tagName).toBe("P");
  });

  test("Prueba el renderizado de: 1 button", () => {
    expect(wrapper.find("button").exists()).toBeTruthy();
    expect(wrapper.find("button").element.tagName).toBe("BUTTON");
  });

  test("Prueba el renderizado de: 1 ul", () => {
    expect(wrapper.find("ul").exists()).toBeTruthy();
    expect(wrapper.find("ul").element.tagName).toBe("UL");
  });

  test("Prueba el renderizado de un componente (PokeStats)", () => {
    expect(wrapper.find(".component").element.tagName).toBe("DIV");
  });
});
