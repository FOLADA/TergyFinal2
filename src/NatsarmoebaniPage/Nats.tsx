import React, { useState } from 'react';
import "./Nats.css";
import { Link } from 'react-router-dom';
interface NatsProps {
  image: string;
  title: string;
}

const NatsBox: React.FC<NatsProps> = ({ image, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDivs = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nats-box" onClick={toggleDivs}>
      <img src={image} alt={title} className="nats-box-image" />
      <h3 className="nats-box-title">
        <strong>{title}</strong>
      </h3>
      {isOpen && (
        <div className="expanded-divs">
          <Link to={"/ნაწარმოებანი/გეგმა"}><div className="expanded-div">სასწავლო გეგმა</div></Link>
         <Link to="/ნაწარმოებანი/პერიფრაზი"> <div className="expanded-div">პერიფრაზი</div> </Link>
          <Link to={"/ნაწარმოებანი/ანიმაცია"}><div className="expanded-div">ანიმაცია</div></Link>
          <Link to={"/ნაწარმოებანი/აფორიზმები"}><div className='expanded-div'>აფორიზმები</div></Link>
        </div>
      )}
    </div>
  );
};

const Nats: React.FC = () => {
  return (
    <>
      <div className="nats-h1-div">
        <h1 className="nats-h1">ნაწარმოებანი</h1>
      </div>
      <div className="natsarmoebani-div">
        <NatsBox image="vefxistyaosani.png" title="ვეფხისტყაოსანი" />
      </div>
      <div className="natsarmoebani-div">
        <NatsBox image="vefxistyaosani.png" title="ვეფხისტყაოსანი" />
      </div>
      <div className="natsarmoebani-div">
        <NatsBox image="vefxistyaosani.png" title="ვეფხისტყაოსანი" />
      </div>
      <div className="natsarmoebani-div">
        <NatsBox image="vefxistyaosani.png" title="ვეფხისტყაოსანი" />
      </div>
      <div className="natsarmoebani-div">
        <NatsBox image="vefxistyaosani.png" title="ვეფხისტყაოსანი" />
      </div>
      <div className="natsarmoebani-div">
        <NatsBox image="vefxistyaosani.png" title="ვეფხისტყაოსანი" />
      </div>
      <div className="natsarmoebani-div">
        <NatsBox image="vefxistyaosani.png" title="ვეფხისტყაოსანი" />
      </div>
    </>
  );
};

export default Nats;
