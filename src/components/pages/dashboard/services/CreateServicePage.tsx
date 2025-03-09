import { useState } from "react";
import PageHeader from "../../common/PageHeader";
import { ServiceSelection } from "./create-service/ServiceSelect";
import { InputField } from "./create-service/InputField";
import { NextButton } from "./create-service/NextButton";


const CreateService: React.FC = () => {
  const [selectedType, setSelectedType] = useState("1:1 Call");
  const [title, setTitle] = useState("1:1 Consultation");
  const [duration, setDuration] = useState(30);
  const [price, setPrice] = useState(500);

  return (
    <div className="p-6 bg-white min-h-screen w-screen">
      <PageHeader title="What are you creating today?" />

      {/* Service Type Selection */}
      <h3 className="mt-6 mb-2 px-6 text-lg font-sora font-semibold">Select type</h3>
      <ServiceSelection
        selectedType={selectedType}
        onSelect={setSelectedType}
      />

      {/* Service Details */}
      <div className="pb-6 px-6 font-poppins mt-6">
        <InputField label="Title" value={title} onChange={setTitle} />
        <InputField
          label="Duration (mins)"
          value={duration}
          onChange={(value) => setDuration(Number(value))}
          type="number"
        />
        <InputField
          label="Amount (₹)"
          value={price}
          onChange={(value) => setPrice(Number(value))}
          type="number"
        />
      <NextButton onClick={() => console.log("Proceed to customization")} />
      </div>

      {/* Next Button */}
    </div>
  );
};

export default CreateService;
