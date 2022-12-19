
import Banner from "../components/Banner";
import CardImage from "../components/CardImage";
import Contact from "../components/FeaturesCards";

const HomePage = ({props}) => {
 
  return (
    <div>
      <Banner />
      <div className="flex items-center justify-center ">
        <input
          type="text"
          placeholder="Search Movies"
          className="w-[50%] h-10 mt-5 border text-center "
        />
      </div>
      <CardImage props={props} />
      <Contact />
    </div>
  );
};

export default HomePage;
