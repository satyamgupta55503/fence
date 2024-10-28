import lt1 from "../assets/marqueimage/lt1.png";
import lt2 from "../assets/marqueimage/lt2.png";
import lt3 from "../assets/marqueimage/lt3.png";
import lt4 from "../assets/marqueimage/lt4.png";
import lt5 from "../assets/marqueimage/lt5.png";

const Marque = () => {
    return (
        <>
            <div>
                <marquee behavior="scroll" direction="left">
                    <div style={{ display: "flex", gap: "40px", paddingTop: "10px", paddingBottom: "10px" }}>
                        <img src={lt1} alt="Scrolling Image 1" width="300" height="200" />
                        <img src={lt2} alt="Scrolling Image 2" width="350" height="200" />
                        <img src={lt3} alt="Scrolling Image 3" width="350" height="200" />
                        <img src={lt4} alt="Scrolling Image 4" width="350" height="200" />
                        <img src={lt5} alt="Scrolling Image 5" width="350" height="200" />
                    </div>
                </marquee>
            </div>
        </>
    );
};

export default Marque;
