import { getAllPostsByTagSlug, getAllTags, getTagBySlug } from '@/common/ghost';
import { Tag } from '@tryghost/content-api';
import { Meta, WithChildren } from '@/types';
import Layout from '@/components/layout';
import Link from 'next/link';
import Heading from '@/components/shared/heading';
import PostsListing from '@/components/posts/post_listing';
import { Post } from '@/types/post';

interface PostsByTagProps extends WithChildren {
  posts: Post[];
  tag: Tag;
}

export default function PostsByTag({ posts, tag }: PostsByTagProps) {

  const meta = {
    logo: '/favicon.ico',
    title: `Software development blog with tag ${tag.name}`,
    description: tag.description ?? 'Website to share information / technical about software development',
    keywords: undefined,
    metaHTML: undefined,
  } as Meta;

  if (!posts.length) {
    return (
      <div className="mt-44 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center font-bold">No posts available.</h1>
        <div className="my-10">
          <Link href={"/"}>
            <a className="px-4 py-3 my-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary transition duration-300">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    );
  }
  
  const totalPost = (tag?.count?.posts ?? 0) > 1 ? 'Posts': 'Post';
  const title = `${tag?.count?.posts ?? 0} ${totalPost} with tag ${tag.name}`;

  return (
    <Layout meta={meta}>
      <Heading title={title} />
      <PostsListing posts={posts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const tags = await getAllTags();
  const paths = tags.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const posts = await getAllPostsByTagSlug(slug);
  const tag = await getTagBySlug(slug);

  return { props: { posts, tag } };
}