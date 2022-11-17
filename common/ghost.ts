import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL ?? '',
  key: process.env.GHOST_CONTENT_API_KEY ?? '',
  version: 'v5.0',
});

export async function getAllPosts() {
  const posts = await api.posts
  .browse({
    limit: 'all',
    include: 'tags',
    order: 'published_at DESC'
  })
  .catch((err: any) => {
    console.error(err);
  });

  return posts;
}

export async function getPostBySlug(slug: string) {
  const post = await api.posts.read(
    { slug },
    { formats: ['html'], include: 'tags' }
  );

  return post
}

export async function getAllTags() {
  const tags = await api.tags.browse({ limit: 'all' });

  return tags;
}

export async function getAllPostsByTagSlug(slug: string) {
  const posts = await api.posts.browse({
    limit: 'all',
    filter: `tag:${slug}`
  });

  return posts;
}

export async function getTagBySlug(slug: string) {
  const tag = await api.tags.read(
    { slug },
    { include: 'count.posts' }
  );

  return tag
}
