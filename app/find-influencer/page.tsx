"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const influencers = [
  {
    id: 1,
    name: "John Doe",
    categories: ["Tech", "Gaming"],
    location: "New York, USA",
    languages: ["English", "Spanish"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.5,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Tech enthusiast and gaming expert with a passion for sharing knowledge.",
  },
  {
    id: 2,
    name: "Jane Smith",
    categories: ["Fashion"],
    location: "Los Angeles, USA",
    languages: ["Spanish", "French"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.8,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Fashion guru sharing the latest trends and styles.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    categories: ["Fitness", "Health"],
    location: "Chicago, USA",
    languages: ["French", "English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.3,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Helping people stay fit and healthy with workout and nutrition tips.",
  },
  {
    id: 4,
    name: "Sarah Lee",
    categories: ["Travel"],
    location: "Miami, USA",
    languages: ["English", "German"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.7,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Travel blogger exploring the world and sharing experiences.",
  },
  {
    id: 5,
    name: "Emily Davis",
    categories: ["Beauty", "Lifestyle"],
    location: "San Francisco, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.6,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Sharing beauty tips and lifestyle hacks.",
  },
  {
    id: 6,
    name: "Chris Brown",
    categories: ["Food", "Cooking"],
    location: "New Orleans, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.9,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Food lover and chef sharing delicious recipes.",
  },
  {
    id: 7,
    name: "Anna Taylor",
    categories: ["Fitness", "Health"],
    location: "Seattle, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.4,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Personal trainer helping others achieve their fitness goals.",
  },
  {
    id: 8,
    name: "David Wilson",
    categories: ["Travel", "Adventure"],
    location: "Denver, USA",
    languages: ["English", "Spanish"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.8,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Adventure seeker exploring breathtaking landscapes.",
  },
  {
    id: 9,
    name: "Laura Miller",
    categories: ["Art", "Design"],
    location: "Austin, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.7,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Artist sharing my journey and creative process.",
  },
  {
    id: 10,
    name: "James Anderson",
    categories: ["Tech", "Gadgets"],
    location: "Boston, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.5,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Tech reviewer helping you choose the best gadgets.",
  },
  {
    id: 11,
    name: "Olivia Thomas",
    categories: ["Parenting", "Family"],
    location: "Phoenix, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.6,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Sharing parenting tips and family fun activities.",
  },
  {
    id: 12,
    name: "Sophia Garcia",
    categories: ["Fashion", "Vlogs"],
    location: "San Diego, USA",
    languages: ["English", "Spanish"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.2,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Vlogging about fashion and lifestyle.",
  },
  {
    id: 13,
    name: "Liam Martinez",
    categories: ["Gaming"],
    location: "Toronto, Canada",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.9,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Gamer sharing tips and live streams.",
  },
  {
    id: 14,
    name: "Mia Robinson",
    categories: ["Fitness", "Yoga"],
    location: "Miami, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.5,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Yoga instructor promoting wellness and mindfulness.",
  },
  {
    id: 15,
    name: "Noah Clark",
    categories: ["Travel", "Photography"],
    location: "Vancouver, Canada",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.6,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Photographer capturing the beauty of travel.",
  },
  {
    id: 16,
    name: "Emma Rodriguez",
    categories: ["Food", "Nutrition"],
    location: "Dallas, USA",
    languages: ["English", "Spanish"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.7,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Nutritionist sharing healthy recipes and tips.",
  },
  {
    id: 17,
    name: "Ethan Lewis",
    categories: ["Tech", "Education"],
    location: "Atlanta, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.8,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Educator sharing knowledge on tech innovations.",
  },
  {
    id: 18,
    name: "Charlotte Hall",
    categories: ["DIY", "Crafts"],
    location: "Boston, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.6,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "DIY enthusiast sharing creative craft ideas.",
  },
  {
    id: 19,
    name: "Amelia Young",
    categories: ["Beauty", "Makeup"],
    location: "Seattle, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.4,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Makeup artist sharing tips and tutorials.",
  },
  {
    id: 20,
    name: "Alexander King",
    categories: ["Sports", "Fitness"],
    location: "Las Vegas, USA",
    languages: ["English"],
    profilePic: "https://via.placeholder.com/150",
    rating: 4.5,
    socials: { facebook: "#", twitter: "#", instagram: "#" },
    bio: "Fitness coach motivating others to achieve their goals.",
  },
];
const FindInfluencer = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredInfluencers, setFilteredInfluencers] = useState(influencers);

  const handleSearch = () => {
    const results = influencers.filter((influencer) => {
      return (
        influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === "" || influencer.categories.includes(category)) &&
        (location === "" || influencer.location === location) &&
        (language === "" || influencer.languages.includes(language))
      );
    });
    setFilteredInfluencers(results);
  };

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto max-w-7xl px-6 py-8 md:py-12 lg:px-8">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-primary">Discover</span> the{" "}
            <span className="text-secondary">Best</span> Influencers
          </h1>
          <p className="mt-4 text-lg text-textSecondary">
            Connect with the most inspiring influencers across various
            categories and locations.
          </p>
        </section>
        <div className="flex flex-col md:flex-row md:justify-end items-baseline gap-4">
          <div className="mb-4 text-center relative flex-grow">
            <input
              type="text"
              placeholder="Search by name..."
              className="p-2  rounded-full w-full px-4   bg-slate-700 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button title="search"
              className="absolute right-0 rounded-r-full w-10   top-0 bottom-0 p-2 text-white bg-primary"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>

          <div className="mb-4 text-center md:hidden">
            <button
              className="p-2 bg-blue-500 text-white rounded-md"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          <div
            className={`flex flex-wrap gap-4 justify-center mb-8 ${
              showFilters ? "block" : "hidden"
            } md:flex`}
          >
            <select title="category"
              className="p-2  rounded-md w-full sm:w-auto bg-slate-700 outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {Array.from(
                new Set(influencers.flatMap((i) => i.categories))
              ).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select title="location"
              className="p-2  rounded-md w-full sm:w-auto bg-slate-700 outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {Array.from(new Set(influencers.map((i) => i.location))).map(
                (loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                )
              )}
            </select>
            <select title="language"
              className="p-2  rounded-md w-full sm:w-auto bg-slate-700 outline-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">All Languages</option>
              {Array.from(new Set(influencers.flatMap((i) => i.languages))).map(
                (lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredInfluencers.length > 0 ? (
            filteredInfluencers.map((influencer) => (
              <div
                key={influencer.id}
                className="shadow-md p-6 bg-bgSecondary text-center rounded-lg border border-primary hover:shadow hover:shadow-primary"
              >
                <Image
                  width={500}
                  height={500}
                  src="/profile/pic.png"
                  alt={influencer.name}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="mt-4 text-xl font-semibold">
                  {influencer.name}
                </h3>
                <p className=" flex items-center justify-evenly gap-2">
                  {influencer.categories.map((category, index) => (
                    <span
                      className="text-textSecondary bg-slate-600 mr-2 px-2 py-1 rounded"
                      key={index}
                    >
                      {category}
                    </span>
                  ))}
                </p>
                <p className="text-textSecondary">{influencer.location}</p>
                {/* <p className="text-textSecondary">{influencer.languages.join(", ")}</p>
              <p className="text-gray-700 text-sm mt-2">{influencer.bio}</p> */}
                <p className="text-yellow-500 font-bold">
                  Rating: ⭐ {influencer.rating}
                </p>
                <div className="flex justify-evenly items-center gap-4 mt-2">
                  <Link
                    href={influencer.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-blue-600 text-xl" />
                  </Link>
                  <Link
                    href={influencer.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-blue-400 text-xl" />
                  </Link>
                  <Link
                    href={influencer.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-pink-500 text-xl" />
                  </Link>
                </div>
                <button
                  className="mt-4 p-2 bg-secondary hover:bg-primary transition-all duration-300  text-white rounded-md"
                  onClick={() =>
                    router.push(`/find-influencer/${influencer.id}`)
                  }
                >
                  View Profile
                </button>
              </div>
            ))
          ) : (
            <p className="text-textSecondary text-center col-span-full">
              No influencers found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindInfluencer;
