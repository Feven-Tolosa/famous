"use client";
import Image from "next/image";
import { JSX, useState } from "react";
import {
  FaCheck,
  FaLink,
  FaPen,
  FaPlus,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import Modal from "./Modal";
import Link from "next/link";

interface SocialMediaLinkProps {
  icon: JSX.Element;
  platform: string;
  link: string;
}

interface ServiceItemProps {
  name: string;
  price: number;
}

interface PortfolioItemProps {
  src: string;
  alt: string;
  title: string;
}

interface Review {
  brand: string;
  comment: string;
}

interface Service {
  name: string;
  price: number;
}
const socilaLinks=[
  {
    "icon": "FaLink",
    "platform": "Instagram",
    "link": "#"
  },
  {
    "icon": "FaLink",
    "platform": "YouTube",
    "link": "#"
  },
  {
    "icon": "FaLink",
    "platform": "Facebook",
    "link": "#"
  },
  {
    "icon": "FaLink",
    "platform": "Twitter",
    "link": "#"
  }
]
export default function InfluencerProfile() {
  const [modalType, setModalType] = useState<"edit" | "add" | null>(null);
  const [modalSection, setModalSection] = useState<
    | "Languages"
    | "Services"
    | "About"
    | "Portfolio"
    | "Niches"
    | "Social media"
    | null
  >(null);
  const [editData, setEditData] = useState<any>(null);

  const openModal = (
    type: "edit" | "add",
    section:
      | "Languages"
      | "Services"
      | "About"
      | "Portfolio"
      | "Niches"
      | "Social media",
    data?: any
  ) => {
    setModalType(type);
    setModalSection(section);
    if (type === "edit" && data) setEditData(data);
  };
  return (
    <section className="bg-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12 lg:px-8 ">
        <div className="bg-slate-900 shadow-md rounded-2xl">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row justify-between items-center p-6 gap-6">
            <div className=" flex items-center gap-6">
              <Image
                width={500}
                height={500}
                src="/profile/pic.png"
                alt="Influencer Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-white">
                  <FaLocationDot className="text-primary inline" /> New York,
                  USA
                </p>
              </div>
            </div>
            <div className=" ml-auto  ">
              <Link href='/settings/1'>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-xl flex items-center justify-center hover:bg-blue-700 ">
                <IoSettingsSharp className="inline mr-2" />
                Settings
              </button>
              </Link>
            </div>
          </div>

          {/* Bio */}
          <div className="p-6 mt-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold mb-2 text-secondary">
                About
              </h3>
              <div
                className="p-2 bg-slate-600 hover:bg-blue-600 rounded-full transition-all duration-200 cursor-pointer"
                onClick={() =>
                  openModal("edit", "About", {
                    content:
                      "Hi, I'm John, a lifestyle influencer with over 100K followers across Instagram and TikTok. I specialize in creating engaging video content and product reviews for brands looking to reach a young, vibrant audience.",
                  })
                }
              >
                <FaPen className="" />
              </div>
            </div>
            <p className="text-white">
              Hi, I&apos;m John, a lifestyle influencer with over 100K followers
              across Instagram and TikTok. I specialize in creating engaging
              video content and product reviews for brands looking to reach a
              young, vibrant audience.
            </p>
          </div>
        </div>
        {/* Modals */}
        {modalType && modalSection && (
          <Modal
            type={modalType}
            section={modalSection}
            data={editData}
            onClose={() => {
              setModalType(null);
              setModalSection(null);
            }}
          />
        )}
        {/* Languages and Niches */}
        <div className="bg-slate-900 rounded-2xl p-6 mt-6 ">
          <div className="flex items-start justify-between ">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              Languages
            </h3>
            <div className="flex gap-2">
              <div
                className="p-2 bg-slate-600 hover:bg-blue-600 rounded-full transition-all duration-200 cursor-pointer"
                onClick={() =>
                  openModal("edit", "Languages", {
                    content: ["English", "Spanish", "French"],
                  })
                }
              >
                <FaPen className="" />
              </div>
            </div>
          </div>
          <div className="text-white flex gap-4 flex-wrap">
            {["English", "Spanish", "French"].map((lang) => (
              <LanguageItem language={lang} key={lang} />
            ))}
          </div>
          <div className="flex items-start justify-between mt-4">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              Niches
            </h3>
            <div className="flex gap-2">
              <div
                className="p-2 bg-slate-600 hover:bg-blue-600 rounded-full transition-all duration-200 cursor-pointer"
                onClick={() =>
                  openModal("edit", "Niches", {
                    content: [
                      "Lifestyle",
                      "Travel",
                      "Health & Fitness",
                      "Fashion",
                    ],
                  })
                }
              >
                <FaPen className="" />
              </div>
  
            </div>
          </div>
          <div className="text-white flex gap-4 flex-wrap">
            {["Lifestyle", "Travel", "Health & Fitness", "Fashion"].map(
              (niche) => (
                <NicheItem niche={niche} key={niche} />
              )
            )}
          </div>
          <div className="flex items-start justify-between mt-4 ">
      <h3 className="text-xl font-semibold mb-4 text-secondary">
        Social Media
      </h3>
      <div className="flex gap-2">
      <div
                className="p-2 bg-slate-600 hover:bg-blue-600 rounded-full transition-all duration-200 cursor-pointer"
                onClick={() =>
                  openModal("edit", "Social media", {
                    content: socilaLinks
                  })
                }
              >
                <FaPen className="" />
              </div>
        
      </div>
    </div>
    <div className="flex gap-4">
      {socilaLinks.map((link,index)=>(
        <div key={index}>
          <SocialMediaLink
            icon={<FaLink className="text-blue-600" />}
            platform={link.platform}
            link="#"
          />
        </div>
      ))}
    </div>
        </div>

        {/* Services & Pricing */}
        <div className="bg-slate-900 shadow-md rounded-2xl p-6 mt-6">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              Services & Pricing
            </h3>
            <div className="flex gap-2">
              <div
                className="p-2 bg-slate-600 hover:bg-blue-600 rounded-full transition-all duration-200 cursor-pointer"
                onClick={() =>
                  openModal("edit", "Services", {
                    content: services,
                  })
                }
              >
                <FaPen className="" />
              </div>
  
            </div>
          </div>
          <ul className="space-y-2">
            {services.map((service) => (
              <ServiceItem key={service.name} {...service} />
            ))}
          </ul>
        </div>

        {/* Portfolio */}
        <Portfolio />

        {/* Reviews */}
        <Reviews />

        {/* Contact / Hire Button (Sticky) */}
        <div className="fixed bottom-4 right-4">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-700">
            Contact & Hire
          </button>
        </div>
      </div>
    </section>
  );
}

// Social Media Link Component
const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  icon,
  platform,
  link,
}) => (
  <a
    href={link}
    className="text-primary hover:underline flex gap-2 items-center justify-center"
  >
    {icon} {platform}
  </a>
);

// Service Item Component
const ServiceItem: React.FC<ServiceItemProps> = ({ name, price }) => (
  <li className="flex justify-between">
    <span>{name}</span>
    <span className="font-semibold">${price}</span>
  </li>
);

// Portfolio Component
const Portfolio: React.FC = () => (
  <div className="bg-slate-900 shadow-md rounded-2xl p-6 mt-6">
    <div className="flex items-start justify-between ">
      <h3 className="text-xl font-semibold mb-4 text-secondary">Portfolio</h3>
      <div className="flex gap-2">
        <div className="p-2 bg-slate-600 hover:bg-blue-600 rounded-full transition-all duration-200 cursor-pointer">
          <FaPen className="" />
        </div>
        
      </div>
    </div>{" "}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.alt} {...item} />
      ))}
    </div>
  </div>
);

// Portfolio Item Component
const PortfolioItem: React.FC<PortfolioItemProps> = ({ src, alt, title }) => (
  <div className="relative group w-full h-48">
    <Image fill src={src} alt={alt} className="rounded-xl object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
      <p className="text-white font-semibold">{title}</p>
    </div>
  </div>
);

// Reviews Component
const Reviews: React.FC = () => (
  <div className="bg-slate-900 shadow-md rounded-2xl p-6 mt-6">
    <h3 className="text-xl font-semibold mb-4 text-secondary">Reviews</h3>
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.brand}>
          <p className="font-medium">⭐️⭐️⭐️⭐️⭐️ by {review.brand}</p>
          <p className="text-white">{review.comment}</p>
        </div>
      ))}
    </div>
  </div>
);

// Sample Data
const services: Service[] = [
  { name: "Instagram Post (1 Image + Caption)", price: 150 },
  { name: "Instagram Reel (Up to 60 sec)", price: 250 },
  { name: "TikTok Video (Up to 90 sec)", price: 300 },
];

const portfolioItems: PortfolioItemProps[] = [
  {
    src: "/profile/profile.png",
    alt: "Project 1",
    title: "Fashion Brand Collab",
  },
  {
    src: "/profile/profile2.png",
    alt: "Project 2",
    title: "Product Review Reel",
  },
  { src: "/profile/profile3.png", alt: "Project 3", title: "Event Promotion" },
  {
    src: "/profile/profile4.png",
    alt: "Project 4",
    title: "Travel Vlog Series",
  },
  { src: "/profile/profile5.png", alt: "Project 5", title: "Food Campaign" },
  {
    src: "/profile/profile6.png",
    alt: "Project 6",
    title: "Tech Unboxing Video",
  },
];

const reviews: Review[] = [
  {
    brand: "BrandCo",
    comment:
      "John was amazing to work with! The video he created boosted our engagement significantly.",
  },
  {
    brand: "FreshSnacks",
    comment:
      "Highly professional and creative content. We&apos;ll definitely work with John again.",
  },
];

// Language Item Component
const LanguageItem: React.FC<{ language: string }> = ({ language }) => (
  <div className="flex gap-2 justify-center items-center">
    <FaCheck className="text-secondary" />
    <p>{language}</p>
  </div>
);

// Niche Item Component
const NicheItem: React.FC<{ niche: string }> = ({ niche }) => (
  <div className="flex gap-2 justify-center items-center">
    <FaCheck className="text-secondary" />
    <p>{niche}</p>
  </div>
);

