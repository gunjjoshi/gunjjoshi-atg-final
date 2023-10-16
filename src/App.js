import './App.css';
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Mainpage from './Components/mainpage';
import Card from './Components/Card';
import card1man from "./Assets/card1man.svg";
import post2 from "./Assets/post2-img.svg";
import post3 from "./Assets/post3.svg";
import post4 from "./Assets/post4.svg";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import EditIcon from "@material-ui/icons/Edit";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import img2 from "./Assets/post_img2.svg"
import img3 from "./Assets/post_img3.svg"
import card1 from "./Assets/card1.svg"
import visit_btn from "./Assets/vist_btn.svg"
import apply_btn from "./Assets/apply_btn.svg"
import visit_mbl from "./Assets/visit_mbl.svg"
import apply_mbl from "./Assets/apply_mbl.svg"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Mainpage />
      <div className="part">
        <div className="location_card">
          <Card name={"✍️ Article"}
            first_line={" What if famous brands had regular fonts? Meet RegulaBrands! "}
            second_line={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
            name_man={"Sarthak Kamra"}
            card1man={card1man}
            Card_img={card1}
          />

          <Card name={"🔬️ Education"}
            first_line={"Tax Benefits for Investment under National Pension Scheme launched by Government"}
            second_line={"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"}
            name_man={"Sarah West"}
            card1man={post2}
            Card_img={img2}
          />
          <Card name={"🗓️ Meetup"}
            first_line={"Finance & Investment Elite Social Mixer @Lujiazui "}
            date={"Fri, 12 Oct, 2018"}
            adress={"Ahmedabad, India"}
            name_man={"Ronal Jones"}
            card1man={post3}
            Card_img={img3}
            btn={visit_btn}
            btn_mbl={visit_mbl}
          />
          <Card name={"💼️ Job"}
            first_line={"Software Developer "}
            date={"Innovaccer Analytics.."}
            adress={"Noida, India"}
            name_man={"Joseph Gray"}
            card1man={post4}
            btn={apply_btn}
            btn_mbl={apply_mbl}
          />
        </div>


        <div className="Location">
          <div
            style={{
              borderBottom: "0.04rem solid #B8B8B8",
              paddingBottom: "1.0rem",
              width: "67%"
            }}
          >
            <LocationOnOutlinedIcon
              style={{ verticalAlign: "text-bottom", marginRight: ".8rem" }}
            />
            Noida, India
            <EditIcon
              style={{ verticalAlign: "text-bottom", marginLeft: "1.5rem" }}
            />
          </div>
          <div style={{ paddingTop: "1rem", display: "flex", width: "67%" }}>
            <InfoOutlinedIcon
              style={{ opacity: "50%", marginRight: ".9rem" }}
            />
            <p style={{ opacity: "50%", width: "22rem", fontSize: "12px" }}>
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
