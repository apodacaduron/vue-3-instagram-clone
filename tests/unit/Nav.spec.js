import { mount } from "@vue/test-utils";
import Nav from "@/components/Nav.vue";

describe("Nav.vue", () => {
  it("renders nav", () => {
    const wrapper = mount(Nav);
    const nav = wrapper.find("nav");

    expect(nav.exists()).toBe(true);
  });

  it("should have logo with home link", () => {
    const wrapper = mount(Nav);
    const logoAnchor = wrapper.find(".nav__logo > router-link");
    const logo = logoAnchor.find('img');

    expect(logo.exists()).toBe(true);
    expect(logoAnchor.attributes('to')).toBe('/');
  });

  it("should have search input", () => {
    const wrapper = mount(Nav);
    const input = wrapper.find(".nav__search > input");

    expect(input.exists()).toBe(true);
    expect(input.attributes('type')).toBe('search');
  });

  it("should have actions with links", () => {
    const wrapper = mount(Nav);
    const iconLinks = wrapper.findAll(".nav__actions > router-link");
    const icons = wrapper.findAll(".nav__actions > router-link > img");

    expect(iconLinks.length).toBe(5);
    expect(icons.length).toBe(5);
  });
});
