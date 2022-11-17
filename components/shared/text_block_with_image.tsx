import React from 'react';
import Link from 'next/link';
import BlurImage from './blur_image';
import { WithChildren } from '@/types';
import { Post } from '@/types/post';
import { placeholderBlurhash, truncateStr } from '@/common/util';

interface Props extends WithChildren {
  post: Post;
}

const TextBlockWithImage = ({ post }: Props) => {
  return (
    <div className="relative px-8">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
        <div className="md:w-6/12 flex-shrink-0 relative">
          {post.feature_image ? (
            <BlurImage
              src={post.feature_image}
              alt={post.feature_image_alt ?? `Image_${post.id}`}
              width={768}
              height={512}
              className="rounded-lg object-cover object-center cursor-pointer"
            />
          ) : (
            <BlurImage
              src="/assets/empty_state.png"
              alt="No Post"
              width={613}
              height={420}
              placeholder="blur"
              blurDataURL={placeholderBlurhash}
              className="rounded-lg object-cover object-center"
            />
          )}
        </div>
        <div className="md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
          <div className="g:py-8 text-center md:text-left">
            {post.primary_tag && (
              <span className="font-bold text-primary-500 text-sm text-center md:text-left uppercase">
                {post.primary_tag.name}
              </span>
            )}
            <h3 className="font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left">
              {post.title}
            </h3>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
              {truncateStr(post.excerpt, 250)}
            </p>
            <Link href={'/'}>
              <p className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Tìm hiểu thêm
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBlockWithImage;
