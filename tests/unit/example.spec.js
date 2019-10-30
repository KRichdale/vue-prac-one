import { shallowMount } from "@vue/test-utils";
import counter from "@/components/counter.vue";

describe("counter.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(counter, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
