export const CurrentPlan: React.FC = () => {
  return (
    <div className="p-4 bg-green-100 rounded-lg text-center">
      <h4 className="text-sm text-gray-500">Current Plan</h4>
      <p className="text-lg font-bold">Basic</p>
      <p className="text-sm text-gray-500">7% + txn charges</p>
      <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded">
        Try Premium
      </button>
    </div>
  );
};
