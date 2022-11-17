import { getAllPosts, getPostBySlug } from '@/common/ghost';
import { Post } from '@/types/post';
import { PostsOrPages } from '@tryghost/content-api';
import { Meta, WithChildren } from '@/types';
import { formatDate, placeholderBlurhash } from '@/common/util';
import BlurImage from '@/components/shared/blur_image';
import Layout from '@/components/layout';

interface PostDetailProps extends WithChildren {
  post: Post;
}

export default function PostDetail({ post }: PostDetailProps) {
  const dateStr = formatDate(post.published_at, 'HH:mm - DD/MM/YYYY');

  const meta = {
    logo: '/favicon.ico',
    title: post.title ?? 'Software development blog',
    description:
      post.excerpt ??
      'Website to share information / technical about software development',
    keywords: undefined,
    metaHTML: undefined,
  } as Meta;

  return (
    <Layout meta={meta}>
      <div className="relative px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="h-64 md:h-96 relative">
            {post.feature_image ? (
              <BlurImage
                src={post.feature_image}
                alt={post.feature_image_alt ?? `Image_${post.id}`}
                className="object-cover object-center rounded-lg"
                layout="fill"
              />
            ) : (
              <BlurImage
                src="/assets/empty_state.png"
                alt="No Img"
                layout="fill"
                placeholder="blur"
                blurDataURL={placeholderBlurhash}
                className="rounded-lg object-cover object-center"
              />
            )}
          </div>
          <div className="max-w-2xl mx-auto mt-4">
            {post.tags?.length && (
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                {post.tags.map((tag: any) => (
                  // <Link key={tag.id} href={`/tag/${tag.slug}`}>
                  <div key={tag.id}>
                    <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                      {tag.name}
                    </div>
                    <div className="border-b-2 border-primary-500 w-8"></div>
                  </div>
                  // </Link>
                ))}
              </div>
            )}
            <h1 className="font-display text-4xl font-bold my-6 text-secondary-500">
              {post.title}
            </h1>
            <div className="mt-4 uppercase text-gray-600 italic font-semibold text-sm">
              {dateStr}
            </div>
            <div
              className="mt-4 prose max-w-full mb-20"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = (await getAllPosts()) as PostsOrPages;
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return { props: { post } };
}
