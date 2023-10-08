import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const {event_name, image, price, description} = service || {}
  return (
    <div className="card shadow-xl" data-aos="zoom-in-up" data-aos-duration="1000">
      <figure>
        <img src={image} className="w-full h-[300px]" alt="Event image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#e237f8] text-2xl">{event_name}</h2>
        <h3 className="card-title text-[#a03aad] text-xl">{price}</h3>
        <p className="text-[#838083]">
          {description.length > 100
            ? description.slice(0, 100)
            : { description }}
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary">Details</button>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;
