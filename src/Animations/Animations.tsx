import React, { useState } from 'react';
import '../Periphrazed/Periphrazed.css';

interface ITitle {
    title: string;
    videoUrl: string;
}

const AnimationBox: React.FC<ITitle> = ({ title, videoUrl }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDivs = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="periphrazed-box">
            <div className="periphrazed-box-header">
                <h3 className="periphrazed-box-title">
                    <strong>{title}</strong>
                </h3>
                <button className="periphrazed-box-button" onClick={toggleDivs}>
                    {isOpen ? 'დახურე' : 'უყურე'}
                </button>
            </div>
            {isOpen && (
                <div className="periphrazed-expanded-container">
                    <div className="periphrazed-expanded-content">
                    <video style={{ height: "50vh", width: "100%" }} controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    </div>
                </div>
            )}
        </div>
    );
};

const Animation: React.FC = () => {
    const videoData = [
        { title: "დასაწყისი", videoUrl: "/dasawyisi.mp4" }, // Corrected path for local file
        { title: "ამბავი როსტევან არაბთა მეფისა", videoUrl: "https://www.youtube.com/shorts/1ZcwlBs7ugk" },
        { title: "როსტევან მეფისაგან და ავთანდილისაგან ნადირობა", videoUrl: "https://www.youtube.com/shorts/Uwo4BE8dhM8" },
        { title: "ნახვა არაბთა მეფისაგან მის ყმისა ვეფხისტყაოსნისა", videoUrl: "https://www.youtube.com/shorts/MxRYsnIneA4" },
        { title: "თინათინისაგან ავთანდილის გაგზავნა მის ყმის საძებრად", videoUrl: "https://www.youtube.com/shorts/u3VJTpy9xyQ" }
    ];

    return (
        <>
            <div className="periphrazed-title-container">
                <h1 className="periphrazed-title">ანიმაციები</h1>
            </div>
            {videoData.map((item, index) => (
                <AnimationBox key={index} title={item.title} videoUrl={item.videoUrl} />
            ))}
        </>
    );
};

export default Animation;
