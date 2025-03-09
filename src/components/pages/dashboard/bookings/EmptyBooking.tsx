export const EmptyBookings: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <img
        src="https://via.placeholder.com/150"
        alt="Empty State"
        className="w-24 h-24 mb-4"
      />
      <h3 className="text-lg font-semibold">Share your page</h3>
      <p className="text-gray-500 text-sm text-center max-w-xs">
        A new booking might just be around the corner, share your page today!
      </p>
      <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">
        Share page
      </button>
    </div>
  );
};
