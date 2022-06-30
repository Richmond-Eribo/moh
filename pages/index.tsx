import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Government from '../components/Government';
import Highlights from '../components/Hightlights';
import Updates from '../components/Updates';
import Pictures from '../components/Pictures';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className=''>
      <Navigation />
      <Hero />
      <About />
      <Government />
      <Highlights />
      <Updates />
      <Pictures />
      <Footer />
    </div>
  );
};

export default Home;
