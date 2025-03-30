import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Simple, transparent pricing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Connect with your audience through authentic influencer partnerships
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Single-Language */}
          <div className="bg-slate-800 rounded-xl shadow-sm border border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-1">Single-Language</h3>
              <p className="text-slate-400 text-sm mb-4">Ideal for brands focusing on one language</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">3,000</span>
                <span className="text-slate-400 ml-1">ETB/mo</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">1 Language Content</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">1 Graphic/Post</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">Weekly Posts</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Get started
              </button>
            </div>
          </div>

          {/* Multi-Language */}
          <div className="bg-slate-800 rounded-xl shadow-sm border border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-1">Multi-Language</h3>
              <p className="text-slate-400 text-sm mb-4">Expand your reach across languages</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">5,000</span>
                <span className="text-slate-400 ml-1">ETB/mo</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">3+ Language Content</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">1 Graphic/Post</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">Bi-Weekly Posts</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Get started
              </button>
            </div>
          </div>

          {/* Basic Package */}
          <div className="bg-slate-800 rounded-xl shadow-sm border border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-1">Basic Package</h3>
              <p className="text-slate-400 text-sm mb-4">Regular content with community interaction</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">8,000</span>
                <span className="text-slate-400 ml-1">ETB/mo</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">3 Weekly Posts</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">Basic Analytics</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">Community Management</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">2 TikTok Videos</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Popular choice
              </button>
            </div>
          </div>

          {/* Standard Package */}
          <div className="bg-slate-800 rounded-xl shadow-sm border border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-1">Standard Package</h3>
              <p className="text-slate-400 text-sm mb-4">Comprehensive engagement & analytics</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">18,000</span>
                <span className="text-slate-400 ml-1">ETB/mo</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">4 Weekly Posts</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">Monthly Reports</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">Engagement Strategies</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">4 TikTok Videos</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Get started
              </button>
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-slate-800 rounded-xl shadow-md border-2 border-indigo-900 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-white mb-1">Premium Package</h3>
                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-4">Full-service management & support</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">25,000</span>
                <span className="text-slate-400 ml-1">ETB/mo</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">5 Weekly Posts</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">Ad Campaign Management</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">Weekly Analytics</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">24/7 Support</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-slate-300">8 TikTok Videos</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Get started
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-700">
              <h3 className="font-medium text-white">Can I change plans later?</h3>
              <p className="mt-1 text-slate-400 text-sm">Yes, you can upgrade or downgrade your plan at any time.</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-700">
              <h3 className="font-medium text-white">Is there a contract?</h3>
              <p className="mt-1 text-slate-400 text-sm">No, our plans are month-to-month with no long-term commitment.</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-700">
              <h3 className="font-medium text-white">Do you offer custom plans?</h3>
              <p className="mt-1 text-slate-400 text-sm">Yes, contact us to discuss your specific needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}