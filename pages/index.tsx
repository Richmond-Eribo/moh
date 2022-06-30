import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

import Features from '../components/Features';
import Highlights from '../components/Hightlights';
import News from '../components/News';

import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Navigation />
      <Hero />
      <Features />

      <Highlights />
      <News />

      <Footer />
    </div>
  );
};

export default Home;
