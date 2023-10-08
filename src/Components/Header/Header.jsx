
const Header = () => {
  return (
    <div className="carousel h-[80vh] w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/2PN2phB/carlo-buttinoni-l-KCp-UYu2-TDk-unsplash.jpg"
          className="w-full rounded-lg opacity-[0.5]"
        />
        <div className="absolute top-[20%] left-[30%] right-[30%]">
          <h2 className="text-4xl font-semibold text-[#e237f8]">
            Wedding party
          </h2>
          <p className="text-[#af39be]">
            A wedding party is a joyous celebration where two people come
            together in holy matrimony.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/hZsLRKw/birthday.png"
          className="w-full rounded-lg opacity-[0.5]"
        />
        <div className="absolute top-[20%] left-[30%] right-[30%]">
          <h2 className="text-4xl font-semibold text-[#e237f8]">
            Birthday party
          </h2>
          <p className="text-[#af39be]">
            A birthday party is a festive occasion where friends and family
            gather to celebrate a persons special day.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/dDMmDvz/joy-memon-rdj-AQGAb-LT4-unsplash.jpg"
          className="w-full rounded-lg opacity-[0.5]"
        />
        <div className="absolute top-[20%] left-[30%] right-[30%]">
          <h2 className="text-4xl font-semibold text-[#e237f8]">
            Anniversary party
          </h2>
          <p className="text-[#af39be]">
            An anniversary party is a heartfelt celebration of a significant
            milestone in a couples life, whether its a wedding anniversary.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/tZTfC6z/michael-negrete-OYA4j-Uccon-I-unsplash.jpg"
          className="w-full rounded-lg opacity-[0.5]"
        />
        <div className="absolute top-[20%] left-[30%] right-[30%]">
          <h2 className="text-4xl font-semibold text-[#e237f8]">
            Engagement Party
          </h2>
          <p className="text-[#af39be]">
            An engagement party is a joyous pre-wedding celebration held to
            announce and celebrate a couples recent engagement.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/khCrrDL/BLOG-86.jpg"
          className="w-full rounded-lg opacity-[0.5]"
        />
        <div className="absolute top-[20%] left-[30%] right-[30%]">
          <h2 className="text-4xl font-semibold text-[#e237f8]">
            Retirement Party
          </h2>
          <p className="text-[#af39be]">
            A retirement party is a special event held to honor an individual
            who is concluding their professional career and entering the
            well-deserved phase of retirement.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/gPrtpsY/aboodi-vesakaran-ox-P3bl3x-QPI-unsplash.jpg"
          className="w-full rounded-lg opacity-[0.5]"
        />
        <div className="absolute top-[20%] left-[30%] right-[30%]">
          <h2 className="text-4xl font-semibold text-[#e237f8]">
            Baby shower Party
          </h2>
          <p className="text-[#af39be]">
            A baby shower is a joyful event celebrating an expecting mother and
            the imminent arrival of her baby.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;