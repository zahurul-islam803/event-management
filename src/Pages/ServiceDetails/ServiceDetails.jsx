import PropTypes from "prop-types";
const ServiceDetails = ({ services }) => {
  const { event_name, image, price, description } = services;
  return (
    <div>
      <h1 className="uppercase text-5xl text-center my-10 font-semibold">
        Service Details
      </h1>
      <hr />
      <div className="card lg:card-side bg-base-100 shadow-xl mt-16">
        <figure>
          <img src={image} alt="event image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#e237f8] text-2xl">{event_name}</h2>
          <h4 className="text-[#a03aad] text-xl">{price}</h4>
          <p className="text-[#838083]">{description}</p>
        </div>
      </div>
    </div>
  );
};
ServiceDetails.propTypes = {
  services: PropTypes.object,
};
export default ServiceDetails;
