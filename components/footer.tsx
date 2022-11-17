import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import BlurImage from './shared/blur_image';

const Footer = () => {
  const socials = [
    {
      title: 'Twitter',
      url: '/',
      icon: (
        <FaTwitter className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: 'Instagram',
      url: '/',
      icon: (
        <FaInstagram className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: 'YouTube',
      url: '/',
      icon: (
        <FaYoutube className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
  ];

  return (
    <footer className="relative px-8 py-6 md:py-4 mt-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto md:flex md:items-center">
        <div className="text-center mb-4 md:mb-0 md:text-left flex-shrink-0 relative">
          <a href="https://pandion.vn/" title="Pandion.vn">
            <BlurImage
              src="/assets/logo-horizontal.png"
              alt="logo-horizontal"
              width={90}
              height={24}
              priority={true}
            />
          </a>
        </div>
        <div className="flex-grow mb-4 md:mb-0">
          <p className="text-center md:text-left text-gray-600 text-xs md:ml-8 md:max-w-3xl">
            Powered by Pandion.{'\u00A0'}
          </p>
        </div>
        <div className="flex-1-grow">
          <ul className="flex justify-center md:justify-start">
            {socials.map((social, index) => (
              <li key={index} className="mx-4 md:mx-0">
                <a
                  href={social.url}
                  title={`Follow Ghost on ${social.title}`}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
