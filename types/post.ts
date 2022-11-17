export interface Authors {
  id: string;
  name: string;
  slug: string;
  profile_image: string;
  cover_image?: any;
  bio: string;
  website: string;
  location?: any;
  facebook: string;
  twitter: string;
  meta_title?: any;
  meta_description?: any;
  url: string;
}

export interface Tags {
  id: string;
  name: string;
  slug: string;
  description?: any;
  feature_image?: any;
  visibility: string;
  meta_title?: any;
  meta_description?: any;
  url: string;
}

export interface PrimaryAuthor {
  id: string;
  name: string;
  slug: string;
  profile_image: string;
  cover_image?: any;
  bio: string;
  website: string;
  location?: any;
  facebook: string;
  twitter: string;
  meta_title?: any;
  meta_description?: any;
  url: string;
}

export interface PrimaryTag {
  id: string;
  name: string;
  slug: string;
  description?: any;
  feature_image?: any;
  visibility: string;
  meta_title?: any;
  meta_description?: any;
  url: string;
}

export interface Post {
  slug: string;
  id: string;
  uuid: string;
  title: string;
  html: string;
  comment_id: string;
  feature_image: string;
  feature_image_alt?: any;
  feature_image_caption?: any;
  featured: boolean;
  meta_title?: any;
  meta_description?: any;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt: string;
  codeinjection_head?: any;
  codeinjection_foot?: any;
  og_image?: any;
  og_title?: any;
  og_description?: any;
  twitter_image?: any;
  twitter_title?: any;
  twitter_description?: any;
  custom_template?: any;
  canonical_url?: any;
  authors?: Authors[];
  tags?: Tags[];
  primary_author?: PrimaryAuthor;
  primary_tag?: PrimaryTag;
  url: string;
  excerpt: string;
}
