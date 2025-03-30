import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function PricingPage() {
  return (
    <div className='mx-auto max-w-7xl px-6 py-8 md:py-12 lg:px-8'>
      {/* Pricing Section */}
      <section>
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold text-white text-center mb-6">Pricing Plans</h1>
          <p className="text-white text-center mb-8">Connecting Brands with Influencers, One Story at a Time</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Single-Language Package */}
          <div className=" bg-slate-800 border border-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between text-left">
            <h3 className="text-2xl font-semibold text-white text-center mb-2">Single-Language</h3>
            <p className="text-gray-400 mb-4">Perfect for brands starting their journey in social media, focusing on one language.</p>
            <ul className="text-lg  border-b border-slate-900 border-t p-2 text-gray-200 space-y-1 mb-4">
              <li><FaCheck className="inline text-green-500" /> 1 Language Content</li>
              <li><FaCheck className="inline text-green-500" /> 1 Graphic/Post</li>
              <li><FaCheck className="inline text-green-500" /> Weekly Posts</li>
            </ul>
            <p className="text-xl text-gray-100">3,000 ETB/mo</p>
          </div>

          {/* Multi-Language Package */}
          <div className=" bg-slate-800 border border-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between text-left">
            <h3 className="text-2xl font-semibold text-white text-center mb-2">Multi-Language</h3>
            <p className="text-gray-400 mb-4">Ideal for expanding your brand’s reach across multiple languages.</p>
            <ul className="text-lg  border-b border-slate-900 border-t p-2 text-gray-200 space-y-1 mb-4">
              <li><FaCheck className="inline text-green-500" /> 3+ Language Content</li>
              <li><FaCheck className="inline text-green-500" /> 1 Graphic/Post</li>
              <li><FaCheck className="inline text-green-500" /> Bi-Weekly Posts</li>
            </ul>
            <p className="text-xl text-gray-100">5,000 ETB/mo</p>
          </div>

          {/* Basic Package */}
          <div className=" bg-slate-800 border border-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between text-left">
            <h3 className="text-2xl font-semibold text-white text-center mb-2">Basic Package</h3>
            <p className="text-gray-400 mb-4">Great for brands needing regular content and community interaction.</p>
            <ul className="text-lg  border-b border-slate-900 border-t p-2 text-gray-200 space-y-1 mb-4">
              <li><FaCheck className="inline text-green-500" /> 3 Weekly Posts</li>
              <li><FaCheck className="inline text-green-500" /> Basic Analytics</li>
              <li><FaCheck className="inline text-green-500" /> Community Management</li>
              <li><FaCheck className="inline text-green-500" /> 2 TikTok Videos</li>
            </ul>
            <p className="text-xl text-gray-100">8,000 ETB/mo</p>
          </div>

          {/* Standard Package */}
          <div className=" bg-slate-800 border border-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between text-left">
            <h3 className="text-2xl font-semibold text-white text-center mb-2">Standard Package</h3>
            <p className="text-gray-400 mb-4">Designed for brands looking for comprehensive engagement and analytics.</p>
            <ul className="text-lg  border-b border-slate-900 border-t p-2 text-gray-200 space-y-1 mb-4">
              <li><FaCheck className="inline text-green-500" /> 4 Weekly Posts</li>
              <li><FaCheck className="inline text-green-500" /> Monthly Reports</li>
              <li><FaCheck className="inline text-green-500" /> Engagement Strategies</li>
              <li><FaCheck className="inline text-green-500" /> 4 TikTok Videos</li>
            </ul>
            <p className="text-xl text-gray-100">18,000 ETB/mo</p>
          </div>

          {/* Premium Package */}
          <div className=" bg-slate-800 border border-secondary rounded-lg shadow-lg p-6 flex flex-col justify-between text-left">
            <h3 className="text-2xl font-semibold text-white text-center mb-2">Premium Package</h3>
            <p className="text-gray-400 mb-4">The ultimate solution for brands seeking full-service management and support.</p>
            <ul className="text-lg  border-b border-slate-900 border-t p-2 text-gray-200 space-y-1 mb-4">
              <li><FaCheck className="inline text-green-500" /> 5 Weekly Posts</li>
              <li><FaCheck className="inline text-green-500" /> Ad Campaign Management</li>
              <li><FaCheck className="inline text-green-500" /> Weekly Analytics</li>
              <li><FaCheck className="inline text-green-500" /> 24/7 Support</li>
              <li><FaCheck className="inline text-green-500" /> 8 TikTok Videos</li>
            </ul>
            <p className="text-xl text-gray-100">25,000 ETB/mo</p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-8">
          <a href="#contact" className="bg-secondary hover:bg-secondary/70 text-slate-900 font-bold py-3 px-6 rounded-lg">
            Get Started Today!
          </a>
        </div>
      </section>
    </div>
  );
}