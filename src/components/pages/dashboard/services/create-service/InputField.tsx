export const InputField: React.FC<{ label: string; value: string | number; onChange: (value: string) => void; type?: string }> = ({
    label,
    value,
    onChange,
    type = "text",
  }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-semibold">{label}</label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mt-1"
        />
      </div>
    );
  };
  