import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";

const Service = () => {
  const [services, setServices] = useState({});
  const {id} = useParams();
  const service = useLoaderData();

  useEffect(()=>{
    const findServices = service?.find(serviceItem => serviceItem.id == id);
    setServices(findServices);
  },[id, service])

  return (
    <div>
      <ServiceDetails services={services}></ServiceDetails>
    </div>
  );
};

export default Service;