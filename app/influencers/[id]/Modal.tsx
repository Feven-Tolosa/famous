import { useState } from "react";

interface ModalProps {
  type: "edit" | "add";
  section:
    | "Languages"
    | "Services"
    | "About"
    | "Portfolio"
    | "Niches"
    | "Social media";
  data?: any;
  onClose: () => void;
}

const languages = ["English", "Spanish", "French", "Oromo", "Amharic", "Afar"];
const niches: string[] = [
  "Fashion",
  "Travel",
  "Food",
  "Fitness",
  "Technology",
  "Beauty",
  "Lifestyle",
  "Gaming",
];
interface Service {
  name: string;
  fee: string;
}
interface SocialMedia {
  icon: string;
  platform: string;
  link: string;
}
const Modal: React.FC<ModalProps> = ({ type, section, data, onClose }) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    Array.isArray(data?.content) ? data.content : []
  );
  const [selectedNiches, setSelectedNiches] = useState<string[]>(
    Array.isArray(data?.content) ? data.content : []
  );
  const [services, setServices] = useState<Service[]>(
    Array.isArray(data?.content) ? data.content : []
  );
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>(
    Array.isArray(data?.content) ? data.content : []
  );

  const [about, setAbout] = useState(data?.content || "");


  const handleCheckboxChange = (language?: string, niche?: string) => {
    if (language) {
      setSelectedLanguages((prev) =>
        prev.includes(language)
          ? prev.filter((lang) => lang !== language)
          : [...prev, language]
      );
    }

    if (niche) {
      setSelectedNiches((prev) =>
        prev.includes(niche)
          ? prev.filter((n) => n !== niche)
          : [...prev, niche]
      );
    }
  };

  // Separate languages into checked and unchecked
  const checkedLanguages = languages.filter((lang) =>
    selectedLanguages.includes(lang)
  );
  const uncheckedLanguages = languages.filter(
    (lang) => !selectedLanguages.includes(lang)
  );

  // Separate niches into checked and unchecked
  const checkedNiches = niches.filter((niche) =>
    selectedNiches.includes(niche)
  );
  const uncheckedNiches = niches.filter(
    (niche) => !selectedNiches.includes(niche)
  );
  const addService = () => {
    setServices([...services, { name: "", fee: "" }]);
  };
  const addLink = () => {
    setSocialMedia([...socialMedia, { platform: "", link: "", icon: "" }]);
  };
  

  const removeService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };
  const removeLink = (index: number) => {
    setSocialMedia(socialMedia.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    index: number,
    field: keyof Service | keyof SocialMedia,
    value: string
  ) => {
    if (section === "Services") {
      const updatedServices = [...services];
      updatedServices[index] = {
        ...updatedServices[index],
        [field]: value, // Explicitly assert type
      } as Service;
      setServices(updatedServices);
    }
  
    if (section === "Social media") {
      const updatedSocialMedia = [...socialMedia];
      updatedSocialMedia[index] = {
        ...updatedSocialMedia[index],
        [field]: value, // Explicitly assert type
      } as SocialMedia;
      setSocialMedia(updatedSocialMedia);
    }
  };
  

  const handleSave = () => {
    console.log("Saving...");
    if (section === "Languages") {
      console.log(
        type === "edit" ? "Updating Language..." : "Adding Language...",
        selectedLanguages
      );
    } else if (section === "Niches") {
      console.log(
        type === "edit" ? "Updating Niches..." : "Adding Niches...",
        selectedNiches
      );
    } else if (section === "Services") {
      console.log(
        type === "edit" ? "Updating Service..." : "Adding Service...",
      );
    } else if (section === "About") {
      console.log("Updating About...", about);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center  z-40">
      <div className="bg-slate-900 p-6 rounded-lg sm:w-full md:w-4/6 max-h-96 overflow-y-auto ">
        <h2 className="text-xl font-semibold">
          {type === "edit" ? "Edit" : "Add"} {section}
        </h2>

        {/* About Form */}
        {section === "About" && (
          <div className="mt-4">
            <label className="block text-gray-300">About You</label>
            <textarea
              name="about"
              id="about"
              title="about"
              className="min-h-32 outline-none focus:outline-blue-600 w-full p-2 bg-slate-600 rounded mt-2"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
        )}

        {/* Language Form */}
        {section === "Languages" && (
          <div className="mt-4">
            <label className="block text-gray-300">Your Language</label>
            <div className="flex flex-col gap-3">
              {/* Render checked languages first */}
              <div className="flex flex-wrap gap-3 border-b border-slate-700">
                {checkedLanguages.map((language) => (
                  <div key={language} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={language}
                      checked={selectedLanguages.includes(language)}
                      onChange={() => handleCheckboxChange(language)}
                      className="mr-2"
                    />
                    <label htmlFor={language} className="text-gray-300">
                      {language}
                    </label>
                  </div>
                ))}
              </div>
              {/* Render unchecked languages below */}
              <div className="flex flex-wrap gap-3">
                {uncheckedLanguages.map((language) => (
                  <div key={language} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={language}
                      checked={selectedLanguages.includes(language)}
                      onChange={() => handleCheckboxChange(language)}
                      className="mr-2"
                    />
                    <label htmlFor={language} className="text-gray-300">
                      {language}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Niches Form */}
        {section === "Niches" && (
          <div className="mt-4">
            <label className="block text-gray-300">Select Your Niches</label>
            <div>
              {/* Render checked niches first */}
              <div className="flex flex-wrap gap-3 border-b border-slate-700">
                {checkedNiches.map((niche) => (
                  <div key={niche} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={niche}
                      checked={selectedNiches.includes(niche)}
                      onChange={() => handleCheckboxChange(undefined, niche)}
                      className="mr-2"
                    />
                    <label htmlFor={niche} className="text-gray-300">
                      {niche}
                    </label>
                  </div>
                ))}
              </div>
              {/* Render unchecked niches below */}
              <div className="flex flex-wrap gap-3">
                {uncheckedNiches.map((niche) => (
                  <div key={niche} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={niche}
                      checked={selectedNiches.includes(niche)}
                      onChange={() => handleCheckboxChange(undefined, niche)}
                      className="mr-2"
                    />
                    <label htmlFor={niche} className="text-gray-300">
                      {niche}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Social media Form */}
        {section === "Social media" && (
          <div className=" mx-auto p-6  shadow-md rounded-lg space-y-4 flex flex-col">
            {socialMedia.map((social, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-secondary p-3 rounded-lg  text-black   "
              >
                <div className="flex flex-col gap-2 md:flex-row md:gap-3 w-full">
                  <input
                    type="text"
                    placeholder="Platform Name (e.g., Instagram)"
                    value={social.platform}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                    className="text-white outline-none bg-slate-700 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Link (e.g., https://instagram/in/12)"
                    value={social.link}
                    onChange={(e) =>
                      handleInputChange(index, "link", e.target.value)
                    }
                    className="text-white outline-none bg-slate-700 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  onClick={() => removeLink(index)}
                  type="button"
                  className="text-red-500"
                >
                  ❌
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addLink}
              className="bg-green-600 text-white py-2 md:w-max px-4 rounded-lg w-full hover:bg-green-700 transition"
            >
              Add Another Link
            </button>
          </div>
        )}
        {/* Service Form */}
        {section === "Services" && (
          <div className=" mx-auto p-6  shadow-md rounded-lg space-y-4 flex flex-col">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border border-secondary p-3 rounded-lg  text-black   "
              >
                <div className="flex flex-col gap-2 md:flex-row md:gap-3 w-full">
                  <input
                    type="text"
                    placeholder="Service Name (e.g., Instagram Post)"
                    value={service.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                    className="text-white outline-none bg-slate-700 p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Fee (e.g., 100)"
                    value={service.fee}
                    onChange={(e) =>
                      handleInputChange(index, "fee", e.target.value)
                    }
                    className="text-white outline-none bg-slate-700 p-2 w-36 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  onClick={() => removeService(index)}
                  type="button"
                  className="text-red-500"
                >
                  ❌
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addService}
              className="bg-green-600 text-white py-2 md:w-max px-4 rounded-lg w-full hover:bg-green-700 transition"
            >
              Add Another Service
            </button>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
            onClick={handleSave}
          >
            {type === "edit" ? "Save Changes" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
