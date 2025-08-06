 interface CardProps {
  title: string;
  items: string[];
}

export const Card: React.FC<CardProps> = ({ title, items }) => {
  return (
  <div className="border border-gray-600 rounded-lg p-4 mt-8 max-w-lg mx-auto">
      <p className="text-center title-color mb-2">{title}</p>
      <p className="text-center text-sm text-color">
        {items.join(" - ")}
      </p>
    </div>
  );
};