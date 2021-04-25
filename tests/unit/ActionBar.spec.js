import { mount } from '@vue/test-utils';
import ActionBar from '@/components/Post/ActionBar';

describe('ActionBar.vue', () => {
  it('should render action bar', () => {
    const wrapper = mount(ActionBar);

    const actionBar = wrapper.find('.post__actions');

    expect(actionBar.exists()).toBe(true);
  });

  it('should emit onLike event after click', async () => {
    const wrapper = mount(ActionBar);

    const likeButton = wrapper.find('.like-post');
    await likeButton.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('onLike');
  });

  it('should emit onSave event after click', async () => {
    const wrapper = mount(ActionBar);

    const saveButton = wrapper.find('.save-post');
    await saveButton.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('onSave');
  });
});