import { useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../Footer/Footer";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="text-5xl font-semibold text-center mt-20">Our Services</h1>
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14 p-2">
          {services?.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;