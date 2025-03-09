export const NextButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
      <button className="w-full bg-black text-white p-3 rounded-lg mt-4" onClick={onClick}>
        Next: Customize
      </button>
    );
  };
  