const paths = {
  home() {
    return "/";
  },
  topicShow(slug: string) {
    return `/topic/${slug}`;
  },
  postCreate(slug: string) {
    return `/topic/${slug}/posts/new`;
  },
  postShow(slug: string, postId: string) {
    return `/topic/${slug}/posts/${postId}`;
  },
};

export default paths;
