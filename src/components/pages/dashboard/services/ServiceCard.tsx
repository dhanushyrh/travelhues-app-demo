interface ServiceCardProps {
  title: string;
  duration: string;
  price: string;
  isPublic: boolean;
  views: number;
  bookings: number;
  earnings: string;
  conversion: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  duration,
  price,
  isPublic,
  views,
  bookings,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-start w-full">
      {/* Left Side - Service Info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">
          {duration} | ₹ {price}+
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-gray-500 text-sm flex items-center">
            👁 {isPublic ? "Public" : "Private"}
          </span>
        </div>
        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <button className="bg-gray-200 px-3 py-1 rounded">Edit</button>
          <button className="bg-gray-200 px-3 py-1 rounded">🔗</button>
          <button className="bg-gray-200 px-3 py-1 rounded">⋮</button>
        </div>
      </div>

      {/* Right Side - Analytics */}
      <div className="bg-gray-100 p-3 rounded-lg text-center">
        <p className="text-sm font-bold">Views</p>
        <p>{views}</p>
        <p className="text-sm font-bold mt-2">Bookings</p>
        <p>{bookings}</p>
      </div>
    </div>
  );
};
