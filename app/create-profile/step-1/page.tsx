"use client";

import { useRouter } from "next/navigation";
import ProfileLayout from "@/components/ProfileLayout";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Location {
  city: string;
  country: string;
}

export default function StepOne() {
  const router = useRouter();
  const [location, setLocation] = useState<Location>({ city: "", country: "" });
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/create-profile/step-2");
  };

  return (
    <ProfileLayout step={1}>
      <h2 className="text-2xl font-bold mb-6 text-center">Basic Info</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-lg mx-auto p-6 text-black  shadow-md rounded-lg"
      >
        <div className="flex flex-col md:flex-row gap-3 ">
          <label className="block font-semibold mb-1 text-white">
            Full Name
          </label>
          <input placeholder="Full Name"
            type="text"
            className="text-white bg-slate-700 p-3 flex-1 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-3 ">
          <label className="block font-semibold mb-1 text-white">City</label>
          <input placeholder="city"
            type="text"
            className="text-white bg-slate-700 p-3 flex-1 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={location.city}
            onChange={(e) => setLocation({ ...location, city: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 ">
          <label className="block font-semibold mb-1 text-white">Country</label>
          <input placeholder="country"
            type="text"
            className="text-white bg-slate-700 p-3 flex-1 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={location.country}
            onChange={(e) =>
              setLocation({ ...location, country: e.target.value })
            }
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 ">
          <label className="block font-semibold mb-1 text-white">
            Phone Number
          </label>
          <div className="">
            <PhoneInput
              country={"et"}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputClass="custom-phone-input bg-slate-700 w-full p-3 rounded-lg outline-none  focus:ring-2 focus:ring-blue-500"
              buttonClass="custom-phone-inpust"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 ">
          <label className="block font-semibold mb-1 text-white">Email</label>
          <input placeholder="email"
            type="email"
            className="text-white bg-slate-700 p-3 flex-1 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="">
          <label className="block font-semibold mb-1 text-white">
            About You
          </label>
          <textarea title="about"
            className="text-white bg-slate-700 p-3 flex-1 w-full h-40 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
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
