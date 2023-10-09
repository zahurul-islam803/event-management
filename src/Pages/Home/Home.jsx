import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import ServiceCard from "../ServiceCard/ServiceCard";
import Team from "../Team/Team";
import EventAttractions from "../EvenAttractions/EventAttractions";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-5xl font-semibold text-center mt-20 mb-14 uppercase">Our Services</h1>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
          {services?.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <div>
        <Team></Team>
      </div>
      <div>
        <EventAttractions></EventAttractions>
      </div>
      
    </div>
  );
};

export default Home;