
const Featured = () => {
  return (
    <div>
      <h1 className="uppercase text-5xl text-center my-10 font-semibold">
        Our Featured
      </h1>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/XSJJcDv/andrii-olishevskyi-i-Tc58-VLTt-Ew-unsplash.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#e237f8] text-lg">
              Wedding party arrangement
            </h2>
            <p className="text-[#838083]">
              Arranging a wedding party involves <br /> careful planning and
              attention to detail to <br /> ensure that the celebration <br />{" "}
              is a memorable and joyful event.
            </p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/kJ8f1ZL/pablo-heimplatz-ZODc-Bk-Eohk8-unsplash.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#e237f8] text-lg">
              Birthday party arrangement
            </h2>
            <p className="text-[#838083]">
              Arranging a birthday party can <br /> be a fun and creative
              process. <br /> Here is a description of how <br /> to plan and
              organize <br /> a birthday party:
            </p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/Lk6S3Dv/aditya-chinchure-Zh-QCZjr9f-Ho-unsplash.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#e237f8] text-lg">
              Anniversary party celebrate
            </h2>
            <p className="text-[#838083]">
              Planning an anniversary <br /> party is a wonderful way to <br />{" "}
              celebrate love and commitment. <br /> Here is a description of how{" "}
              <br /> to plan and organize an anniversary party:
            </p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/6r6m1np/mitchell-orr-Ly-FIj-Xo-FY-unsplash.jpg"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#e237f8] text-lg">
              Retirement party
            </h2>
            <p className="text-[#838083]">
              Planning a <br /> retirement party a <br /> thoughtful and <br />{" "}
              enjoyable <br /> way to celebrate <br /> someones career <br />{" "}
              achievements and transition into..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;