import { WithChildren } from '@/types';
import { Post } from '@/types/post';
import { formatDate, placeholderBlurhash } from '@/common/util';
import React from 'react';
import Link from 'next/link';
import truncate from 'truncate-html';
import BlurImage from '../shared/blur_image';

interface LatestPostProps extends WithChildren {
  post?: Post;
}

function LatestPost({ post }: LatestPostProps) {
  if (!post) {
    return null;
  }

  const dateStr = formatDate(post.published_at);
  const description = truncate(post.html, {
    length: 160,
    decodeEntities: true,
    stripTags: true,
    reserveLastWord: true,
  });

  return (
    <div className="relative px-8 mb-8">
      <div className="flex flex-col sm:flex-row max-w-screen-xl mx-auto pt-8 group">
        <div className="sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg relative">
          <Link href={`/blog/${post.slug}`}>
            <div className="cursor-pointer">
              <div className="h-64 sm:h-96 relative">
                {post.feature_image ? (
                  <BlurImage
                    src={post.feature_image}
                    alt={post.feature_image_alt ?? `Image_${post.id}`}
                    className="object-cover object-center rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
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
            </div>
          </Link>
        </div>
        <div className="sm:w-1/2 lg:w-1/3 bg-gray-100 p-8 border-2 border-t-0 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0 relative">
          <div className="cursor-pointer">
            {post.primary_tag && (
              <Link key={post.primary_tag.id} href={`/tag/${post.primary_tag.slug}`}>
                <div className="font-display uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content">
                  {post.primary_tag.name}
                </div>
              </Link>
            )}
            <Link href={`/blog/${post.slug}`}>
              <div className="border-b-2 border-primary-500 w-8"></div>
              <div className="mt-4 uppercase text-gray-600 italic font-semibold text-xs">
                {dateStr}
              </div>
              <h2 className="font-display text-secondary-500 mt-1 font-black text-2xl group-hover:text-primary-500 transition duration-300">
                {post.title}
              </h2>
              <p className="text-sm mt-3 leading-loose text-gray-600 font-medium">
                {description}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
