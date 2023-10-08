
const Team = () => {
  return (
    <div className="my-14 p-2">
      <h1 className="uppercase text-5xl text-center my-10 font-semibold">
        Our Team
      </h1>
      <hr />
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex items-center justify-center gap-3 my-4"
        >
          <img
            src="https://i.ibb.co/gDhZz36/suit.jpg"
            className="rounded-full border h-[100px] w-[100px]"
            alt="suit"
          />
          <div>
            <h3 className="text-2xl font-medium">Suit</h3>
            <p className="text-xl">Wedding Manager</p>
            <p className="text-[#838083]">
              He expert in Wedding event management
            </p>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex items-center justify-center gap-3 my-4"
        >
          <img
            src="https://i.ibb.co/v1jTXdW/dayana.jpg"
            className="rounded-full border h-[100px] w-[100px]"
            alt="dayana"
          />
          <div>
            <h3 className="text-2xl font-medium">Dayana</h3>
            <p className="text-xl">Birthday Manager</p>
            <p className="text-[#838083]">
              She expert in Birthday event management
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex items-center justify-center gap-3 my-4"
        >
          <img
            src="https://i.ibb.co/3fsvXMV/depek-mahajan.jpg"
            className="rounded-full border h-[100px] w-[100px]"
            alt="depek"
          />
          <div>
            <h3 className="text-2xl font-medium">Depek Mahajan</h3>
            <p className="text-xl">Anniversary Manager</p>
            <p className="text-[#838083]">
              He expert in Anniversary event management
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex items-center justify-center gap-3 my-4"
        >
          <img
            src="https://i.ibb.co/s9bMWYL/meysam-jarahkar.jpg"
            className="rounded-full border h-[100px] w-[100px]"
            alt="mehsam"
          />
          <div>
            <h3 className="text-2xl font-medium">Mehsam Jarahkar</h3>
            <p className="text-xl">Engagement Manager</p>
            <p className="text-[#838083]">
              He expert in Engagement event management
            </p>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-duration="1000"
          className="flex items-center justify-center gap-3 my-4"
        >
          <img
            src="https://i.ibb.co/rFKjRxc/belo.jpg"
            className="rounded-full border h-[100px] w-[100px]"
            alt="persona"
          />
          <div>
            <h3 className="text-2xl font-medium">Persona</h3>
            <p className="text-xl">Retirement Manager</p>
            <p className="text-[#838083]">
              He expert in Retirement event management
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex items-center justify-center gap-3 my-4"
        >
          <img
            src="https://i.ibb.co/5k376YM/quynah.jpg"
            className="rounded-full border h-[100px] w-[100px]"
            alt="quynah"
          />
          <div>
            <h3 className="text-2xl font-medium">Quynah</h3>
            <p className="text-xl">Baby Shower Manager</p>
            <p className="text-[#838083]">
              She expert in Baby Shower event management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;