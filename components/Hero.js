'use client';

import ImageGallery from 'react-image-gallery';
import ImageSlider from './ImageSlider';

const Hero = () => {
  const images = [
    {
      original: '/photo1.avif',
    },
    {
      original: '/imo.jpg',
    },
    {
      original: '/photo3.jpg',
    },
  ];
  return (
    <div className="h-screen w-full">
      <ImageGallery
        renderItem={(item) => <ImageSlider item={item} />}
        items={images}
        autoPlay
        showBullets
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}
        useBrowserFullscreen={false}
        additionalClass="w-full"
      />
    </div>
  );
};

export default Hero;
