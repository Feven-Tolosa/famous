import Image from "next/image";
import React from "react";

import story from "@/public/story1.jpg";
import video from "@/public/video.jpg";
import graphics from "@/public/graphic.jpg";
import social from "@/public/social1.jpg";
import influencer from "@/public/influe1.jpg";
import eMagazine from "@/public/e-magazine.jpg";

const ServicesPage = () => {
  return (
    <div className="bg-slate-900 text-white ">
      {/* Hero Section */}
      <section className="serviceBackground  ">
      <div className="bg-overlay py-16">
      
        <div className="container  mx-auto max-w-7xl px-6 py-8 md:py-12 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Our<span className='text-primary'> Services</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore our range of marketing services designed to help your brand shine. From storytelling to influencer partnerships, we have you covered.
          </p>
          
        </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16">
        <div className="container mx-auto max-w-7xl px-6 py-8 md:py-12 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Overview & Purpose</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              DEXC Marketing Agency connects businesses with social media influencers, brand ambassadors, and promoters based on location, niche, and language. We foster collaboration, share real-world insights, and inspire growth through shared experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-3">For Influencers</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Create a detailed profile with location, niche, and follower stats.</li>
                <li>Apply to projects or receive direct invitations from brands.</li>
                <li>Collaborate with top brands and boost your career.</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-3">For Businesses</h4>
              <ul className="list-disc list-inside text-gray-300">
                <li>Post campaigns with clear budgets, timelines, and criteria.</li>
                <li>Access a curated pool of influencers tailored to your needs.</li>
                <li>Outsource tasks like social media management to DEXC.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     {/* Service section */}
           <section className="bg-bgSecondary border-t border-slate-800">
             <div className="mx-auto  max-w-7xl py-6 px-6 lg:px-8 ">
               <div className="flex flex-col gap-4 items-center justify-center shadow-sm py-5 md:py-12">
                 <div className="md:py-6">
                   <h2 className="text-subheading">Our Services</h2>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                   <div className="flex flex-col bg-slate-800  hover:shadow-primary  rounded-lg shadow w-full  overflow-hidden hover:scale-105 transform duration-300 ">
                     <Image
                       alt="Story image"
                       src={story}
                       className="w-full  object-cover flex-1 max-h-72"
                       width={500}
                     />
                     <div className="flex flex-col p-6 gap-2">
                       <h3 className="text-xl font-semibold mb-2 text-secondary">
                         Storytelling & e-Magazine
                       </h3>
                       <p className="text-textSecondary">
                         Share your brand’s journey through engaging stories and
                         curated articles.
                       </p>
                     </div>
                   </div>
                   <div className="flex flex-col bg-slate-800  hover:shadow-primary  rounded-lg shadow w-full  overflow-hidden hover:scale-105 transform duration-300 ">
                     <Image
                       alt="Story image"
                       src={video}
                       className="w-full  object-cover flex-1 max-h-72 "
                       width={500}
                     />
                     <div className="flex flex-col p-6 gap-2">
                       <h3 className="text-xl font-semibold mb-2 text-secondary">
                         Company Video Production
                       </h3>
                       <p className="text-textSecondary">
                         Professional video creation to amplify your brand’s message.
                       </p>
                     </div>
                   </div>
                   <div className="flex flex-col bg-slate-800  hover:shadow-primary  rounded-lg shadow w-full  overflow-hidden hover:scale-105 transform duration-300 ">
                     <Image
                       alt="Story image"
                       src={graphics}
                       className="w-full  object-cover flex-1 max-h-72"
                       width={500}
                     />
                     <div className="flex flex-col p-6 gap-2">
                       <h3 className="text-xl font-semibold mb-2 text-secondary">
                         Graphics Design{" "}
                       </h3>
                       <p className="text-textSecondary">
                         Stunning visuals tailored to your brand’s identity.
                       </p>
                     </div>
                   </div>
                   <div className="flex flex-col bg-slate-800  hover:shadow-primary  rounded-lg shadow w-full  overflow-hidden hover:scale-105 transform duration-300 ">
                     <Image
                       alt="Story image"
                       src={social}
                       className="w-full  object-cover flex-1 max-h-72"
                       width={500}
                     />
                     <div className="flex flex-col p-6 gap-2">
                       <h3 className="text-xl font-semibold mb-2 text-secondary">
                         Social Media Management
                       </h3>
                       <p className="text-textSecondary">
                         Let DECx manage your social profiles for consistent growth.
                       </p>
                     </div>
                   </div>
                   <div className="flex flex-col bg-slate-800  hover:shadow-primary  rounded-lg shadow w-full  overflow-hidden hover:scale-105 transform duration-300 ">
                     <Image
                       alt="Story image"
                       src={influencer}
                       className="w-full  object-cover flex-1 max-h-72"
                       width={500}
                     />
                     <div className="flex flex-col p-6 gap-2">
                       <h3 className="text-xl font-semibold mb-2 text-secondary">
                         Influencer Campaigns
                       </h3>
                       <p className="text-textSecondary">
                         Match with influencers to execute impactful campaigns.
                       </p>
                     </div>
                   </div>
                   <div className="flex flex-col bg-slate-800  hover:shadow-primary  rounded-lg shadow w-full  overflow-hidden hover:scale-105 transform duration-300 ">
                     <Image
                       alt="Story image"
                       src={eMagazine}
                       className="w-full  object-cover flex-1 max-h-72"
                       width={500}
                     />
                     <div className="flex flex-col p-6 gap-2">
                       <h3 className="text-xl font-semibold mb-2 text-secondary">
                         E-Magazine Creation
                       </h3>
                       <p className="text-textSecondary">
                         Publish compelling digital magazines to showcase your
                         success.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>

      {/* Contact Section */}
      <section id="contact" className=" py-16">
        <div className="container mx-auto max-w-7xl px-6 py-8 md:py-12 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-4">Get in Touch</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to take your brand to the next level? Contact us today to discuss your needs and explore our services.
          </p>
          <a
            href="/contact-us"
            className="mt-6 inline-block bg-blue-600 text-white font-medium py-3 px-6  hover:bg-blue-700 rounded-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;