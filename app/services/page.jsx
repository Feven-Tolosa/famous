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
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 z-0"></div>
        <div className="container mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
            Our <span className="text-white">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive marketing solutions designed to elevate your brand's digital presence through innovation and strategy.
          </p>
          <div className="mt-10">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/70 to-slate-950"></div>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 text-blue-400 font-medium">WHAT WE OFFER</span>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Strategic Marketing Solutions</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-300 leading-relaxed">
                DECX Marketing Agency bridges the gap between businesses and digital creators through targeted influencer partnerships, data-driven campaigns, and comprehensive brand management.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 p-8 rounded-2xl border border-slate-800 hover:border-blue-400 transition-all hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">👑</span>
                </div>
                <h4 className="text-2xl font-bold">For Influencers</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                  </div>
                  <p className="text-slate-300">Create a detailed profile with location, niche, and follower stats.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                  </div>
                  <p className="text-slate-300">Apply to projects or receive direct invitations from brands.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    </div>
                  </div>
                  <p className="text-slate-300">Collaborate with top brands and boost your career.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/70 p-8 rounded-2xl border border-slate-800 hover:border-purple-400 transition-all hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <h4 className="text-2xl font-bold">For Businesses</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                  </div>
                  <p className="text-slate-300">Post campaigns with clear budgets, timelines, and criteria.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                  </div>
                  <p className="text-slate-300">Access a curated pool of influencers tailored to your needs.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    </div>
                  </div>
                  <p className="text-slate-300">Outsource tasks like social media management to DECX.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 text-blue-400 font-medium">OUR EXPERTISE</span>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Marketing Services</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Storytelling & e-Magazine",
                description: "Share your brand's journey through engaging stories and curated articles.",
                image: story,
                color: "from-blue-600/20 to-blue-900/30",
                icon: "📖"
              },
              {
                title: "Video Production",
                description: "Professional video creation to amplify your brand's message.",
                image: video,
                color: "from-purple-600/20 to-purple-900/30",
                icon: "🎥"
              },
              {
                title: "Graphics Design",
                description: "Stunning visuals tailored to your brand's identity.",
                image: graphics,
                color: "from-emerald-600/20 to-emerald-900/30",
                icon: "🎨"
              },
              {
                title: "Social Media Management",
                description: "Let DECX manage your social profiles for consistent growth.",
                image: social,
                color: "from-amber-600/20 to-amber-900/30",
                icon: "📱"
              },
              {
                title: "Influencer Campaigns",
                description: "Match with influencers to execute impactful campaigns.",
                image: influencer,
                color: "from-pink-600/20 to-pink-900/30",
                icon: "🌟"
              },
              {
                title: "E-Magazine Creation",
                description: "Publish compelling digital magazines to showcase your success.",
                image: eMagazine,
                color: "from-indigo-600/20 to-indigo-900/30",
                icon: "📚"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-70 z-10 transition-all duration-500 group-hover:opacity-90 ${service.color}"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10"></div>
                <Image
                  alt={service.title}
                  src={service.image}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-105"
                  width={500}
                  height={300}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="w-14 h-14 rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-500 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 text-blue-400 font-medium">OUR ADVANTAGE</span>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">DECX</span> Stands Out
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We transform your digital presence with innovative strategies and measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Tailored Strategies",
                desc: "Custom social media strategies aligned with your business goals to maximize engagement and growth.",
                icon: "📊"
              },
              {
                title: "Multi-Platform Expertise",
                desc: "Experience managing content across TikTok, Facebook, Instagram, LinkedIn, and Twitter.",
                icon: "🌐"
              },
              {
                title: "Data-Driven Insights",
                desc: "Advanced analytics to track performance and optimize campaigns for measurable results.",
                icon: "📈"
              },
              {
                title: "Creative Excellence",
                desc: "Eye-catching visuals and engaging content that resonates with your target audience.",
                icon: "🎨"
              },
              {
                title: "Affordable Packages",
                desc: "Premium-quality services with competitive pricing to fit your budget.",
                icon: "💲"
              },
              {
                title: "End-to-End Support",
                desc: "We handle everything from content creation to community management.",
                icon: "🛠️"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-slate-800/20 backdrop-blur-sm rounded-xl p-8 border border-slate-800 hover:border-blue-400 transition-all hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-700/30 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-500/40 transition-all">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-slate-800/20 rounded-2xl p-8 max-w-4xl mx-auto border border-slate-800 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white mb-6">Platforms We Master</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok'].map((platform) => (
                <span 
                  key={platform}
                  className="px-5 py-2.5 bg-slate-800/50 rounded-full text-white font-medium hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"></div>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-slate-900 to-blue-900/30 rounded-3xl p-8 md:p-12 border border-slate-800">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h3>
              <p className="text-xl text-slate-300 mb-8">
                Let's discuss how DECX can transform your digital presence with our tailored marketing solutions.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                Contact Our Team
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;