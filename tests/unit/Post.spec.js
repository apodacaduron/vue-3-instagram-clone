import { shallowMount } from '@vue/test-utils'
import Post from '@/components/Post'

const postMock = {
  "albumId": 1,
  "id": 1,
  "title": "accusamus beatae ad facilis cum similique qui sunt",
  "url": "https://via.placeholder.com/600/92c952",
  "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}

describe('Post.vue', () => {
  it('should render post', () => {
    const wrapper = shallowMount(Post, {
      props: {
        post: postMock
      }
    });
    const post = wrapper.find('.post');

    expect(post.exists()).toBe(true);
  });

  it('should have post\'s title', () => {
    const wrapper = shallowMount(Post, {
      props: {
        post: postMock
      }
    })

    const post = wrapper.find('.post');

    expect(post.html()).toContain(postMock.title);
  });
});