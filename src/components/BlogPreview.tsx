import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

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

export default function BlogPreview() {
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
  );
}
