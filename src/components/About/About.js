import "./About.css";
import marioAdrian1 from "../../images/manda1.jpg";
import marioAdrian2 from "../../images/manda2.jpg";

function About() {
  return (
    <header className="about-container">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quam
          quae impedit molestias. Illum quam corporis molestiae facere
          voluptatem perspiciatis cum ipsa fugit, consequatur veniam cupiditate
          fugiat, iure numquam quibusdam? Iure voluptatem blanditiis corrupti
          non eligendi quas quod facilis pariatur!
          <br /> <br />
          Explicabo dolores ducimus eligendi voluptatum illo ratione alias, modi
          architecto iure dicta nulla fuga numquam aliquid libero molestiae
          quasi repellendus. Repellendus eligendi, omnis dolores doloremque
          deleniti temporibus assumenda iste labore adipisci ipsum explicabo
          quae aperiam culpa beatae est expedita, incidunt quod? Doloremque
          dolor quis maiores veritatis quod dolorem similique adipisci.
        </p>
      </div>
      <div>
        <img className="about-image" src={marioAdrian1} alt="restaurant food"  />
        <img className="about-image2" src={marioAdrian2} alt="restaurant food"  />
      </div>
    </header>
  );
}

export default About;
