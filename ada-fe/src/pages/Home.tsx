import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export const Home = () => {
  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center p-8">
      <Header/>

      <div className="mt-6">
        <Button label="Apply now !" onClick={() => alert("Apply clicked")} />
      </div>

      <Card
        title="Thanks to :"
        items={[
          "Apple",
          "pie",
          "ice",
          "cream",
          "sugar",
          "plum",
          "brownie",
          "liquorice",
          "chocolate",
          "cake",
          "oat",
          "cake",
          "cake",
          "apple",
          "pie",
          "Cookie",
          "topping",
          "topping",
          "jelly",
          "chocolate",
          "tiramisu",
          "biscuit",
        ]}
      />
    </div>
  );
};
