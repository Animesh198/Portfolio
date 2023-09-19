/*import React from "react";
import { motion } from "framer-motion";
import { AppWrapp, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Testimonials.scss";
const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type=="testimonials"]';
    const brandsQuery = '*[_type=="brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonials-item app__flex">
            <img
              src={urlFor(testimonials[currentIndex].imageurl)}
              alt="testimonials"
            />
          </div>
        </>
      )}
    </>
  );
};

export default AppWrapp(
  MotionWrap(Testimonials, "app__testimonials", "testimonial", "app__primarybg")
);*/
