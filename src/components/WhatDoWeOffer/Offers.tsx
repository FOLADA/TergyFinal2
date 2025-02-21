import React from 'react';
import './Offers.css';

interface InfoBoxProps {
  image: string;
  title: string;
  paragraph: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ image, title, paragraph }) => (
  <div className="info-box">
    <img src={image} alt={title} className="info-box-image" />
    <h3 className="info-box-title"><strong>{title}</strong></h3>
    <p className="info-box-paragraph"><strong>{paragraph}</strong></p>
  </div>
);

const WhatWeOffer: React.FC = () => {
  return (
<>
<h1 className='offers-h1'>რას გთავაზობთ?</h1>
<div className="info-container">
      <InfoBox 
        image="book.jpg"
        title="ნაწარმოებანი" 
        paragraph="პერიფრაზირებული, ვიზიუალური და ვერბალიზებული ნაწარმოებები, წაკითხულის გააზრების ტესტებით, ციტატებითა და სწავლის გეგმით." 
      />
      <InfoBox 
        image="symposium.png" 
        title="სიმპოზიუმი" 
        paragraph="სივრცე, სადაც შესაძლებლობა გექნება დასვა კითხევბი, მოისმინო აზრები, იბაასო და განივითარო რიტორიკა" 
      />
      <InfoBox 
        image="essayst.webp" 
        title="ესეისტი AI" 
        paragraph="ესეისტი AI, რომელიც შეგიმოწმებს თემას და მოგცემს საუკეთესო რჩევებს, რათა თვით გიორგი ლეონიძის დონეს მიაღწიო" 
      />
    </div>
</>
  );
};

export default WhatWeOffer;
