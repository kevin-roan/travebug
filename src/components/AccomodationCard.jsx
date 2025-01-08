import React from "react";
import { ChevronRight, MapPin, Star } from "lucide-react";

const AccomodationCard = () => {
  return (
    <div>
      const AccommodationCard = ({(title, content, images)}) => (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-white text-xl font-semibold">{title}</h2>
            <div className="flex items-center text-teal-300">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">Location</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className="text-teal-500 fill-current"
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              5.0 (123 reviews)
            </span>
          </div>
          <p className="text-gray-600 text-sm line-clamp-3">{content}</p>
          <button
            className="mt-4 w-full bg-teal-500 text-white py-2 rounded-md flex items-center justify-center transition-colors duration-300 hover:bg-teal-600"
            style={{ boxShadow: "0 4px 6px rgba(20, 184, 166, 0.25)" }}
          >
            View Details
            <ChevronRight size={20} className="ml-1" />
          </button>
        </div>
      </div>
      );
    </div>
  );
};

export default AccomodationCard;
