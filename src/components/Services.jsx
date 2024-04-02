import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Clinics and medical offices",
      imageUrl: "/services/reciption.jpg",
    },
    {
      name: "Birth centers",
      imageUrl: "/services/five.jpg",
    },
    {
      name: "Imaging and radiology centers",
      imageUrl: "/services/mri.jpg",
    },
    {
      name: "Mental health and addiction treatment centers",
      imageUrl: "/services/three.jpg",
    },
    {
      name: "Pediatrics",
      imageUrl: "/services/cancer.jpg",
    },
    {
      name: "Pediatrics",
      imageUrl: "/services/two.jpg",
    },
    {
      name: "birth ",
      imageUrl: "/services/five.jpg",
    },
    {
      name: "Pediatrics",
      imageUrl: "/services/reciption.jpg",
    },
    {
      name: "Pediatrics",
      imageUrl: "/services/two.jpg",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Services</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
