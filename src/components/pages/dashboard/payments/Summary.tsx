export const BalanceSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg">
      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm text-gray-500 flex items-center gap-1">
          💰 Balance
        </h4>
        <p className="text-lg font-bold">0</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm text-gray-500 flex items-center gap-1">
          🏪 Lifetime earnings
        </h4>
        <p className="text-lg font-bold">0</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm text-gray-500 flex items-center gap-1">
          ⏳ Pending Completion
        </h4>
        <p className="text-lg font-bold">0</p>
      </div>
      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm text-gray-500 flex items-center gap-1">
          🏦 In Withdrawal
        </h4>
        <p className="text-lg font-bold">₹0</p>
      </div>
    </div>
  );
};
