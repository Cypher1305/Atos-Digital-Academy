interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 text-black font-medium px-6 py-2 rounded-full hover:bg-gray-300 transition"
    >
      {label}
    </button>
  );
};
