import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import cmp from "../Assets/cmp.png"; // Ensure the path to the image is correct

const companyDetails = [
  `Titan Ceramics is the leading tiles showroom in Coimbatore providing an extensive range of floor tiles and wall tiles having great quality in Coimbatore and nearest areas.`,
  `Are you looking for the best tiles dealer in Coimbatore for your home or commercial establishment? Titan Ceramics is the best choice, offering a wide range of quality tiles. Our tiles are sure to please the most discerning buyers, in terms of both design and functionality. For more than 15 years, we have been serving the Coimbatore region with a 100% client satisfaction rate. Titan Ceramics strongly believes in keeping commitments and serving customers with the best products.`,
  `Titan Ceramics meets the specific needs of our customers by producing various categories of tiles that complement distinctive styles...`
];

const CompanyDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // Create a ref for the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible to true when in viewport
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current); // Start observing the component
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div
      ref={ref} // Attach the ref to the container div
      className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg shadow-lg mt-6 max-w-5xl mx-auto"
    >
      <motion.div
        className="flex-1"
        initial={{ y: -100, x: 100, opacity: 0 }} // Start above the screen, to the right
        animate={isVisible ? { y: 0, x: 0, opacity: 1 } : {}} // Animate to original position
        transition={{ duration: 4 }} // Animation duration
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Company Details</h2>
        {companyDetails.map((detail, index) => (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">{detail}</p>
        ))}
      </motion.div>
      <motion.div
        className="flex-shrink-0 ml-8 mt-6 lg:mt-0"
        initial={{ y: -100, x: -100, opacity: 0 }} // Start above the screen, to the left
        animate={isVisible ? { y: 0, x: 0, opacity: 1 } : {}} // Animate to original position
        transition={{ duration: 4 }} // Animation duration
      >
        <img
          src={cmp} // Use the imported variable here
          alt="Titan Ceramics showroom"
          className="rounded-lg shadow-md border border-gray-200 h-89 w-96 object-cover" // Adjust height and width as needed
        />
      </motion.div>
    </div>
  );
};

export default CompanyDetails;
