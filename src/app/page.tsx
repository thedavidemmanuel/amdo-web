'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhatWeDo from '@/components/WhatWeDo';
import BlogPreview from '@/components/BlogPreview';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Stats Section */}
      <Stats />

      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
              About <span className="text-[#2B9348]">Amdo Foundation</span>
            </h1>
            <p className="text-gray-600 text-justify mb-8 max-w-[600px]">
            The Amdo Foundation is dedicated to empowering individuals and communities to thrive through education, career development, entrepreneurship, 
            and enhancing social well-being. Our programs and initiatives equip people with valuable skills and knowledge for personal and professional growth, 
            fostering sustainable community development. We continually strive to broaden our impact, exploring innovative solutions to improve lives 
            and enable communities to achieve lasting prosperity.
            </p>
            <button className="bg-[#2B9348] text-white px-8 py-3 rounded-lg hover:bg-[#228B22] transition-colors duration-300">
              More About Us
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/about-image.jpg"
              alt="About Amdo Foundation"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Join Initiative Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-[#F9A602] text-sm font-medium mb-2">Join the Amdo Initiative for Education</p>
              <h2 className="text-3xl text-black font-medium mb-6">Who can apply?</h2>
              <p className="text-gray-600 mb-8">
                Recipients will be selected based on financial need, academic performance,
                leadership potential, curiosity, courage, and character traits indicative of a person
                who is already engaged in their community and will give back and perpetuate the
                shared outcomes and goals of the Foundation for their fellows.
              </p>
              <button 
                className="bg-[#2B9348] text-white px-8 py-3 rounded-lg hover:bg-[#228B22] transition-colors duration-300"
                onClick={() => {
                  window.location.href = 'https://forms.gle/H94wBpX3GSZUZiHB9';
                }}
              >
                Apply Now
              </button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/home-students.png"
                alt="Students raising hands"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogPreview />

      <ContactForm />

      <Footer />
    </div>
  );
}
