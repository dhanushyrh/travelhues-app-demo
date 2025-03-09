import React, { useState } from "react";

export const StoryHeader: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");
  const [place, setPlace] = useState("");

  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-xl font-semibold">View Story</h2>

      <div className="flex gap-6 mt-4">
        {/* Cover Photo */}
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Cover"
            className="w-32 h-40 object-cover rounded-md"
          />
          <button className="text-sm text-gray-500 mt-1">change photo</button>
        </div>

        {/* Input Fields */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 border rounded-md mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="w-full p-2 border rounded-md mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Country"
              className="w-1/2 p-2 border rounded-md"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="Place"
              className="w-1/2 p-2 border rounded-md"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
