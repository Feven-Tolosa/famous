"use client";

import { useRouter } from "next/navigation";
import ProfileLayout from "@/components/ProfileLayout";
import { useState } from "react";

interface PortfolioItem {
  file: File | null;
  description: string;
}

export default function StepFour() {
  const router = useRouter();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  const addPortfolioItem = () => {
    setPortfolio([...portfolio, { file: null, description: "" }]);
  };

  const handleFileChange = (index: number, file: File | null) => {
    const updatedPortfolio = [...portfolio];
    updatedPortfolio[index].file = file;
    setPortfolio(updatedPortfolio);
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const updatedPortfolio = [...portfolio];
    updatedPortfolio[index].description = value;
    setPortfolio(updatedPortfolio);
  };

  const removePortfolioItem = (index: number) => {
    setPortfolio(portfolio.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(portfolio);
    router.push("/create-profile/step-5");
  };

  return (
    <ProfileLayout step={4}>
      <h2 className="text-2xl font-bold mb-6 text-center">Portfolio</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-lg mx-auto p-6 text-black shadow-md rounded-lg flex flex-col"
      >
        {portfolio.map((item, index) => (
          <div
            key={index}
            className="border border-secondary p-3 rounded-lg bg-background mb-4"
          >
            <input placeholder="file"
              type="file"
              accept="image/*,video/*"
              className=" p-2 w-full rounded-lg text-white outline-none bg-slate-700"
              onChange={(e) =>
                handleFileChange(index, e.target.files?.[0] || null)
              }
            />
            <textarea
              placeholder="Description of your work"
              className=" p-2 w-full rounded-lg mt-2 text-white outline-none bg-slate-700 focus:ring-2 focus:ring-blue-500"
              value={item.description}
              onChange={(e) => handleDescriptionChange(index, e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => removePortfolioItem(index)}
              className="text-red-500 mt-2"
            >
              ❌ Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addPortfolioItem}
          className="bg-green-600 text-white md:w-max py-2 px-4 rounded-lg w-full hover:bg-green-700 transition"
        >
          Add Portfolio Item
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white md:w-max py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition"
        >
          Finish
        </button>
      </form>
    </ProfileLayout>
  );
}
