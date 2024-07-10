"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import Typewriter from './Typewriter';
import WordChanger from './Wordchanger';

const Flashlight = dynamic(() => import('./Flashlight'), { ssr: false });
const HeroSection = () => {
  return (
    <div className="flex items-center justify-between p-8">
      <div className="flex-1 pr-8">
        <h1 className="text-4xl font-bold mb-4">
          <Typewriter text="Hi, I'm Macauley 👋. I'm a " />
          <WordChanger />
        </h1>
        <Flashlight />
        
      </div>
      <div className="flex-1 max-w-md">
        <img 
          src="/HERO.png" 
          alt="Hero Image" 
          className="w-full h-auto rounded-full object-cover" 
        />
      </div>
    </div>
  );
};

export default HeroSection;
