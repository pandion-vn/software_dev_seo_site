import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import ReactHtmlParser from 'react-html-parser';
import type { Meta, WithChildren } from '@/types';

interface LayoutProps extends WithChildren {
  meta: Meta;
  siteId?: string;
}

export default function Layout({ meta, children }: LayoutProps) {
  let additionalHeaderMarkup = null;
  if (meta.metaHTML) {
    additionalHeaderMarkup = ReactHtmlParser(meta.metaHTML);
  }

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="generator" content="Ghost CMS" />
        <meta name="timestamp" content={new Date().toLocaleString()} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
        {additionalHeaderMarkup}
      </Head>
      <div id="site-wrapper">
        <div id="site">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
