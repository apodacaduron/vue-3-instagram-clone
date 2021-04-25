import { mount } from '@vue/test-utils'
import Image from '@/components/Post/Image'

const url = "https://via.placeholder.com/600/92c952"

describe('Image.vue', () => {
  it('should render \"Image not found\" without url', () => {
    const wrapper = mount(Image);
    const postImage = wrapper.find('.post-image');

    expect(postImage.html()).toContain('Image not found');
  });

  it('should render image with url', () => {
    const wrapper = mount(Image, {
      props: {
        url
      }
    });
    const img = wrapper.find('img');

    expect(img.exists()).toBe(true);
  });
})