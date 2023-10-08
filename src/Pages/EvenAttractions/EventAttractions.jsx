import {
  FaHome,
  FaCrown,
  FaCarSide,
  FaCamera,
  FaBirthdayCake,
  FaFilter,
} from "react-icons/fa";
const EventAttractions = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-semibold text-4xl uppercase">Event Attractions</h1>
        <p className="text-[#838083] my-4">
          {" "}
          Event attractions can vary widely, from musical performances and art{" "}
          exhibitions <br /> to sporting events and interactive experiences.
          Heres a general template you can use to <br /> create a description,
          but you should tailor it to the
          <br /> particular event and attraction.
        </p>
        <hr />
      </div>
      <div className="mt-8 mb-14 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex justify-center items-center text-center"
        >
          <div className="space-y-2">
            <FaHome className="text-4xl text-[#a5935a] mx-auto"></FaHome>
            <h2 className="text-2xl">Accommodation</h2>
            <p className="text-[#838083]">
              An accommodation description provides potential guests with
              essential information about a place to stay, whether its a hotel,
              vacation rental, or any other lodging option.
            </p>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex justify-center items-center text-center"
        >
          <div className="space-y-2">
            <FaCrown className="text-4xl text-[#a5935a] mx-auto"></FaCrown>
            <h2 className="text-2xl">What to Wear</h2>
            <p className="text-[#838083]">
              These descriptions serve as general guidelines, but ultimately,
              your clothing choices should reflect your preferences and the
              specific circumstances you are in.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex justify-center items-center text-center"
        >
          <div className="space-y-2">
            <FaCarSide className="text-4xl text-[#a5935a] mx-auto"></FaCarSide>
            <h2 className="text-2xl">Parking Area</h2>
            <p className="text-[#838083]">
              A parking area, often referred to as a parking lot or car park, is
              a designated space or facility where vehicles, such as cars,
              motorcycles, and bicycles, can be parked and temporarily stored.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex justify-center items-center text-center"
        >
          <div className="space-y-2">
            <FaCamera className="text-4xl text-[#a5935a] mx-auto"></FaCamera>
            <h2 className="text-2xl">Documentation</h2>
            <p className="text-[#838083]">
              Documentation refers to the process of creating, collecting,
              organizing, and maintaining written, visual, or digital materials
              to convey information, instructions, or details about a particular
              subject, process, product, or system.
            </p>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex justify-center items-center text-center"
        >
          <div className="space-y-2">
            <FaBirthdayCake className="text-4xl text-[#a5935a] mx-auto"></FaBirthdayCake>
            <h2 className="text-2xl">Celebration</h2>
            <p className="text-[#838083]">
              A celebration is a joyful and festive event or gathering that
              marks a special occasion or achievement. It typically involves
              activities such as socializing, music, dancing, feasting, and
              often includes decorations,
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex justify-center items-center text-center"
        >
          <div className="space-y-2">
            <FaFilter className="text-4xl text-[#a5935a] mx-auto"></FaFilter>
            <h2 className="text-2xl">Food & Drinks</h2>
            <p className="text-[#838083]">
              Food and drinks are essential elements of human sustenance and
              culture, providing nourishment, pleasure, and a means of social
              interaction.Both food and drinks are integral to human life,
              offering sustenance, taste, and an opportunity for cultural
              expression and social bonding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAttractions;
