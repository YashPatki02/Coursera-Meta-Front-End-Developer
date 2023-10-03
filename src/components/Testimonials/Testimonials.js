import "./Testimonials.css";

import reviewer1 from "../../images/reviewer1.png";
import reviewer2 from "../../images/reviewer2.png";
import reviewer3 from "../../images/reviewer3.png";
import reviewer4 from "../../images/reviewer4.png";
import starImage from "../../images/star.png";

const testimonials = [
  {
    name: "John Smith",
    image: reviewer1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 5,
  },
  {
    name: "Jane Smith",
    image: reviewer2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 4,
  },
  {
    name: "Jane Doe",
    image: reviewer3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 3,
  },
  {
    name: "Joe Doe",
    image: reviewer4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stars: 2,
  },
];

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-stars">
        {props.stars > 0 && <img src={starImage} alt="star" />}
        {props.stars > 1 && <img src={starImage} alt="star" />}
        {props.stars > 2 && <img src={starImage} alt="star" />}
        {props.stars > 3 && <img src={starImage} alt="star" />}
        {props.stars > 4 && <img src={starImage} alt="star" />}
      </div>

      <div className="testimonial-card-header">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
      </div>
      <div className="testimonial-card-text">
        <p>{props.review}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials-container">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-cards">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            image={testimonial.image}
            review={testimonial.review}
            stars={testimonial.stars}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
