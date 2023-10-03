import "./Specials.css";
import greekSalad from "../../images/greeksalad.jpg";
import bruchetta from "../../images/bruchetta.png";
import lemonDessert from "../../images/lemonDessert.jpg";
import bike from "../../images/Bike.png";

const specialsDishes = [
  {
    name: "Greek Salad",
    price: "$14.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    image: greekSalad,
  },
  {
    name: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    image: bruchetta,
  },
  {
    name: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert,
  },
];

const SpecialCard = (props) => {
  return (
    <div className="special-card">
      <div className="special-card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="special-card-text">
        <div className="name-price">
          <h3>{props.name}</h3>
          <p id="price">{props.price}</p>
        </div>
        <p>{props.description}</p>
      </div>
      <div>
        <button className="special-card-button">
          <img src={bike} alt="bike" width={20} />
          Order a Delivery
        </button>
      </div>
    </div>
  );
};

const Specials = () => {
  const goToOrder = () => {
    window.location.href = "/order";
  };

  return (
    <section className="specials-container">
      <div className="special-header">
        <h2>Specials</h2>
        <button className="menu-button" onClick={goToOrder}>
          Online Menu
        </button>
      </div>

      <div className="specials-cards-container">
        {specialsDishes.map((dish) => (
          <SpecialCard
            key={dish.name}
            name={dish.name}
            price={dish.price}
            description={dish.description}
            image={dish.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Specials;
