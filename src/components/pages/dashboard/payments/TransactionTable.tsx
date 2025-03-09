export const TransactionsTable: React.FC<{ transactions: any[] }> = ({ transactions }) => {
    return (
      <div className="mt-4 p-4 bg-white rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Count</th>
              <th className="text-left p-2">Earnings</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((tx, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{tx.name}</td>
                  <td className="p-2">{tx.type}</td>
                  <td className="p-2">{tx.count}</td>
                  <td className="p-2">{tx.earnings}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };
  