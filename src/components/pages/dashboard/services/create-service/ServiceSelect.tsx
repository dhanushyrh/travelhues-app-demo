export const ServiceSelection: React.FC<{ selectedType: string; onSelect: (type: string) => void }> = ({ selectedType, onSelect }) => {
    const services = [
      { name: "1:1 Call", description: "Conduct 1:1 video sessions", icon: "📅" },
      { name: "Priority DM", description: "Setup your priority inbox", icon: "📩" },
      { name: "Webinar", description: "Host one-time or recurring group sessions", icon: "📺" },
      { name: "Digital Product", description: "Sell digital products, courses, paid videos & more", icon: "🛍" },
      { name: "Package", description: "Bundle your offerings into one", icon: "📦" },
    ];
  
    return (
      <div className="p-6 font-sora grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <button
            key={service.name}
            className={`p-4 border rounded-lg text-left ${selectedType === service.name ? "border-black bg-gray-100" : "border-gray-300"}`}
            onClick={() => onSelect(service.name)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{service.icon}</span>
              <h3 className="text-md font-bold">{service.name}</h3>
            </div>
            <p className="text-sm text-gray-500">{service.description}</p>
          </button>
        ))}
      </div>
    );
  };
  