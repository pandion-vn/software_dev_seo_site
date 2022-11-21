import { Post } from '@/types/post';
import { WithChildren } from '@/types';
import { formatDate, placeholderBlurhash } from '@/common/util';
import React from 'react';
import Link from 'next/link';
import BlurImage from '../shared/blur_image';

interface PostsListingProps extends WithChildren {
  posts: Post[];
}

function PostsListing({ posts }: PostsListingProps) {
  return (
    <div className="relative px-8 mb-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="flex-col group mb-8 md:mb-0">
              <div className="relative h-64">
                <Link href={`/blog/${post.slug}`}>
                  {post.feature_image ? (
                    <BlurImage
                      src={post.feature_image}
                      alt={post.feature_image_alt ?? `Image_${index}`}
                      layout="fill"
                      className="object-cover object-center rounded-t-lg"
                    />
                  ) : (
                    <BlurImage
                      src="/assets/empty_state.png"
                      alt="No Img"
                      placeholder="blur"
                      blurDataURL={placeholderBlurhash}
                      layout="fill"
                      className="rounded-lg object-cover object-center"
                    />
                  )}
                </Link>
              </div>
              <div className="bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg">
                {post.primary_tag && (
                  <Link key={post.primary_tag.id} href={`/tag/${post.primary_tag.slug}`}>
                    <div key={post.primary_tag.id}>
                      <div className="uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose">
                        {post.primary_tag.name}
                      </div>
                      <div className="border-b-2 border-primary-500 w-8"></div>
                    </div>
                  </Link>
                )}
                <div className="border-b-2 border-primary-500 w-8"></div>
                <Link href={`/blog/${post.slug}`} key={index}>
                  <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                    {formatDate(post.published_at)}
                  </div>
                  <h2 className="text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                    {post.title}
                  </h2>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostsListing;
