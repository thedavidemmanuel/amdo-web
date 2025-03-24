'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';

interface WorkCardProps {
  icon: string;
  title: string;
  description: string;
}

const WorkCard = ({ icon, title, description }: WorkCardProps) => (
  <div className="bg-[#1B1B3A] p-20 rounded-lg">
    <div className="mb-8 text-8xl ">{icon}</div>
    <h3 className="text-white text-xl font-medium mb-3">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
}

const BlogCard = ({ image, title, description }: BlogCardProps) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-lg mb-4">
      <Image 
        src={image} 
        alt={title} 
        width={300}
        height={200}
        className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className="font-medium text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
    <div className="flex items-center text-[#2B9348] text-sm font-medium">
      Read More
      <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
    </div>
  </div>
);

export default function HomePage() {
  const workItems: WorkCardProps[] = [
    {
      icon: "🎓",
      title: "Scholarships",
      description: "Providing financial assistance to deserving students to help them achieve their educational goals."
    },
    {
      icon: "📈",
      title: "People Development",
      description: "Offering mentorship, training, and personal development workshops to empower individuals with the skills they need to succeed."
    },
    {
      icon: "👥",
      title: "Community Development",
      description: "Implementing sustainable projects that improve the quality of life in communities."
    }
  ];

  const blogPosts: BlogCardProps[] = [
    {
      image: "/rec1.png",
      title: "Education for Children",
      description: "Our recent outreach to the streets of Kibera has shown positive results as we helped kids with school supplies and..."
    },
    {
      image: "/rec2.png",
      title: "Solving for Poverty",
      description: "Our recent outreach to the streets of Kibera has shown positive results as we helped kids with school supplies..."
    },
    {
      image: "/rec3.png",
      title: "Undergraduate Scholarships",
      description: "Our recent outreach to the streets of Kibera has shown positive results as we helped kids with school supplies..."
    },
    {
      image: "/rec4.png",
      title: "Sustainable Development",
      description: "Our recent outreach to the streets of Kibera has shown positive results as we helped kids with school supplies..."
    }
  ];

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
            <p className="text-gray-600 mb-8 max-w-[500px]">
              The Amdo Foundation is committed to empowering individuals through education,
              career development, entrepreneurship, and social well-being. By offering
              education and training programs, we aim to help people develop skills that will help
              them personally and professionally.
            </p>
            <button className="bg-[#2B9348] text-white px-8 py-3 rounded-lg hover:bg-[#228B22] transition-colors duration-300">
              More About Us
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/home-students.png"
              alt="Students in classroom"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>


      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-[#F9A602] text-sm font-medium mb-2">What we do</p>
            <h2 className="text-3xl text-black font-medium">Our Work</h2>
          </div>
          <Link href="#" className="text-[#2B9348] flex items-center hover:underline">
            Read More
            <ArrowUpRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
          {workItems.map((item, index) => (
            <WorkCard key={index} {...item} />
          ))}
        </div>
        <div className='mt-20' /> 
      </section>

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
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="text-[#F9A602] text-md font-medium mb-2">Blog</p>
          <h2 className="text-3xl text-black font-medium">Stay updated with us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 overflow-hidden text-black">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>

      <ContactForm />

      <Footer />
    </div>
  );
}
