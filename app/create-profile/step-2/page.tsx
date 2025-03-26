"use client";

import { useRouter } from "next/navigation";
import ProfileLayout from "@/components/ProfileLayout";
import { ReactNode, useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGlobe,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const socialIcons: { [key: string]: ReactNode } = {
  Tiktok: <FaTiktok className="text-black" />,
  Youtube: <FaYoutube className="text-red-600" />,
  Facebook: <FaFacebook className="text-blue-600" />,
  Twitter: <FaTwitter className="text-blue-400" />,
  Instagram: <FaInstagram className="text-pink-600" />,
  LinkedIn: <FaLinkedin className="text-blue-700" />,
  Other: <FaGlobe className="text-gray-500" />,
};

export default function StepTwo() {
  const router = useRouter();
  const [socialLinks, setSocialLinks] = useState<
    { platform: string; link: string }[]
  >([]);
  const [platform, setPlatform] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const addSocialLink = () => {
    if (platform && link) {
      setSocialLinks([...socialLinks, { platform, link }]);
      setPlatform("");
      setLink("");
    }
  };

  const removeSocialLink = (index: number) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/create-profile/step-3");
  };

  return (
    <ProfileLayout step={2}>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Social Media Links
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-lg mx-auto p-6 shadow-md rounded-lg"
      >
        <div className="flex flex-col md:flex-row gap-3 ">
          <label className="block font-semibold mb-1">
            Social Media Platform
          </label>
          <select title="platform"
            className=" p-3 flex-1 rounded-lg focus:ring-2 focus:ring-blue-500 text-white outline-none bg-slate-700"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="">Select Platform</option>
            <option value="Tiktok">Tiktok</option>
            <option value="Youtube">Youtube</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="Instagram">Instagram</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row gap-3 ">
          <label className="block font-semibold mb-1">Profile Link</label>
          <input placeholder="url"
            type="url"
            className=" p-3 flex-1 rounded-lg focus:ring-2 focus:ring-blue-500 text-white outline-none bg-slate-700"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          onClick={addSocialLink}
          className="bg-green-600 text-white py-2 px-4 rounded-lg w-full md:w-max hover:bg-green-700 transition"
        >
          Add Social Link
        </button>
        <div className="mt-4">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border p-3 rounded-lg bg-gray-100 mb-2"
            >
              {socialIcons[social.platform] || socialIcons["Other"]}
              <span className="text-black">{social.platform}:</span>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {social.link}
              </a>
              <button
                onClick={() => removeSocialLink(index)}
                className="text-red-500 ml-auto"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full md:w-max  hover:bg-blue-700 transition"
        >
          Next
        </button>
      </form>
    </ProfileLayout>
  );
}
