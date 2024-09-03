import React, { useState } from "react";
import Img from "../../assets/images/aboutus.jpg";
import DetailsInfo from "../detailsinfo/DetailsInfo";
// import { Link } from "react-router-dom";
// import AboutImg from "../../assets/images/aboutus.png";

const MoreAbout = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShow = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <div className="font-poppins px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 ">
          <img
            src={Img}
            alt="Sasto Bazar"
            className="w-full h-full max-w-md object-contain animate-pulse"
          />
        {/* </div> */}
        {/* <div className="grid lg:grid-cols-2"> */}
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-none sm:text-4xl">
              <span className="mr-2">About</span>
              <span className="text-purple-500">Our Company</span>
            </h2>

            <p className="mb-4 text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              nostrum numquam quae iste nobis delectus aspernatur quidem, ipsam
              magni quis labore repellat iusto tenetur eius maxime possimus
              incidunt officia atque minima sed tempore! Autem id voluptatem
              delectus in, molestiae quam, rem corrupti aliquid mollitia
              laudantium necessitatibus soluta dignissimos, esse ratione?
            </p>
            <>
              <p className="mb-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                asperiores facere ipsa accusamus libero in, consequuntur aliquam
                enim ad atque tempora impedit ratione fuga ut sit eligendi
                blanditiis, assumenda nihil!
              </p>
            </>
            <button
              onClick={handleShow}
              className="inline-block py-2 px-4 text-white bg-orange-500 hover:bg-orange-600 rounded-lg no-underline"
            >
              About our company
            </button>
          </div>
        </div>
      {showMore ? <DetailsInfo /> : ""}
      </div>
    </>
  );
};

export default MoreAbout;
