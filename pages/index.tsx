import { getAllPosts } from '@/common/ghost';
import { Meta, WithChildren } from '@/types';
import { Post } from '@/types/post';
import { useRouter } from 'next/router';
import { PostsOrPages } from '@tryghost/content-api';
import Layout from '@/components/layout';
import LoadingWidget from '@/components/shared/loading';
import PostsListing from '@/components/posts/post_listing';
import LatestPost from '@/components/posts/latest_post';
import Heading from '@/components/shared/heading';

interface HomeProps extends WithChildren {
  posts: Post[];
  latestPost: Post;
}

export default function Home({ latestPost, posts }: HomeProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingWidget message="Đang tải trang..." />;
  }

  const meta = {
    logo: '/favicon.ico',
    title: 'Software development blog',
    description: 'Website to share information / technical about software development',
    keywords: undefined,
    metaHTML: undefined,
  } as Meta;

  if (!posts.length) {
    return (
      <div className="mt-44 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center font-bold">No posts available.</h1>
      </div>
    );
  }

  return (
    <Layout meta={meta}>
      <Heading title='Blog Posts' />
      <LatestPost post={latestPost} />
      <PostsListing posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const rawPosts = (await getAllPosts()) as PostsOrPages;

  if (!rawPosts.length) {
    return { props: { latestPost: undefined, posts: [] } }; 
  }

  const latestPost = rawPosts.shift();
  const posts = rawPosts;

  return { props: { latestPost, posts } };
}
