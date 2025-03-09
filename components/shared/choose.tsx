"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why <br /> Choose Us
          </h2>

          {/* Card 1 */}
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-2">Luxury facilities</h3>
            <p className="text-gray-600">
              The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.
            </p>
            <a href="#" className="text-yellow-500 font-medium mt-3 inline-flex items-center">
              More Info <span className="ml-1">→</span>
            </a>
          </div>

          {/* Card 2 */}
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-2">Affordable Price</h3>
            <p className="text-gray-600">
              You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.
            </p>
            <a href="#" className="text-yellow-500 font-medium mt-3 inline-flex items-center">
              More Info <span className="ml-1">→</span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="text-gray-800">
            <h3 className="text-lg font-bold mb-2">Many Choices</h3>
            <p className="text-gray-600">
              We provide many unique workspace choices so that you can choose the workspace to your liking.
            </p>
            <a href="#" className="text-yellow-500 font-medium mt-3 inline-flex items-center">
              More Info <span className="ml-1">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
