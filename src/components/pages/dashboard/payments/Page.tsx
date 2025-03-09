import { useState } from "react";
import PageHeader from "../../common/PageHeader";
import { BalanceSummary } from "./Summary";

import { PaymentTabs } from "./Tabs";
import { TransactionsTable } from "./TransactionTable";


const PaymentsPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Summary");

  return (
    <div className="min-h-screen w-screen">
      <PageHeader title="Payments" />

      {/* Connect Payout Button */}
      {/* <div className="flex justify-end">
        <button className="bg-black text-white px-4 py-2 rounded">Connect Payout</button>
      </div> */}

      {/* Summary + Plan Section */}
      <div className="flex px-4 justify-between items-start mt-6">
        <BalanceSummary />
        {/* <CurrentPlan /> */}
      </div>

      {/* Tabs Navigation */}
      <PaymentTabs onTabChange={setSelectedTab} />

      {/* Transactions Table */}
      {selectedTab === "Summary" && <TransactionsTable transactions={[]} />}
      {selectedTab === "Transactions" && <TransactionsTable transactions={[]} />}
      {selectedTab === "Withdrawals" && <TransactionsTable transactions={[]} />}
      {selectedTab === "Incentives" && <TransactionsTable transactions={[]} />}


    </div>
  );
};

export default PaymentsPage;
