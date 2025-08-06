import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";
import { Button } from "../components/Button";
import { ThanksCard } from "../components/ThanksCard";


export const Home = () => {
  return (
    <>
    <div className="text min-h-screen flex flex-col justify-center items-center p-4 mx-auto sm:p-8 gap-5">
      <Header/>

      <h1 className="title title-color justify-center ">Atos Digital Academy</h1>

      <p className="text-color paragraph">Marshmallow pudding danish candy canes gummies sugar plum tiramisu. Macaroon shortbread chupa chups jelly beans topping tiramisu. Gummi bears dragée jelly pie cupcake dragée biscuit danish candy. Toffee pie biscuit candy gummi bears. Gummi bears pastry toffee sweet sugar plum cheesecake. Topping chocolate cake dessert muffin chocolate bar chocolate cake gummi bears. Croissant icing bear claw pudding halvah marzipan icing.</p>

      <div className="mt-6">
        <Button label="Apply now !" onClick={() => alert("Apply clicked")} />
      </div>

      <ThanksCard/>
      <Footer/>
    </div>
</>
  );
};
