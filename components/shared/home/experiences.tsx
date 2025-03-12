// 'use client'

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Experiences() {
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         } else {
//           setIsInView(false);
//         }
//       },
//       {
//         threshold: 0.1, // When 50% of the section is in view
//       }
//     );

//     const section = document.querySelector("#experience-section");
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   return (
//     <div className="py-16 px-4 md:px-8 bg-white font-jost">
//       <div className="max-w-6xl mx-auto">
//         <div
//           id="experience-section"
//           className={`flex flex-col md:flex-row gap-12 items-center transition-all duration-1000 ease-in-out ${
//             isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//           }`}
//         >
//           <div className="md:w-1/2 space-y-6">
//             <h2 className="text-4xl md:text-xl font-bold tracking-wide uppercase text-yellow-500">
//               EXPERIENCES
//             </h2>
//             <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
//               We Provide You The<br />
//               <span className="text-primary">Best Experience</span>
//             </h1>
//             <div className="h-1 w-16 bg-yellow-500 my-6"></div>
//             <p className="text-gray-600 text-lg">
//               You don’t have to worry about the result because all of these
//               interiors are made by people who are professionals in their fields.
//             </p>
//           </div>

//           <div className="md:w-1/2 relative">
//             <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>

//             <div className="relative z-10 w-full h-64 md:h-auto">
//               <Image
//                 src="/images/homeso.jpg"
//                 alt="Best Experience Image"
//                 width={450}
//                 height={450}
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client'

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function Experiences() {
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//         } else {
//           setIsInView(false);
//         }
//       },
//       {
//         threshold: 0.5, // When 50% of the section is in view
//       }
//     );

//     const section = document.querySelector("#experience-section");
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   return (
//     <div className="py-16 px-4 md:px-8 bg-white font-jost">
//       <div className="max-w-6xl mx-auto">
//         <div
//           id="experience-section"
//           className={`flex flex-col md:flex-row gap-12 items-center transition-all duration-1000 ease-in-out ${
//             isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
//           }`}
//         >
//           {/* Text Content */}
//           <div className="md:w-1/2 space-y-6 px-4 md:px-0">
//             <h2 className="text-3xl sm:text-4xl md:text-xl font-bold tracking-wide uppercase text-yellow-500">
//               EXPERIENCES
//             </h2>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
//               We Provide You The<br />
//               <span className="text-primary">Best Experience</span>
//             </h1>
//             <div className="h-1 w-16 bg-yellow-500 my-6"></div>
//             <p className="text-gray-600 text-base sm:text-lg md:text-xl">
//               You don’t have to worry about the result because all of these
//               interiors are made by people who are professionals in their fields.
//             </p>
//           </div>

//           {/* Image Container */}
//           <div className="md:w-1/2 relative w-full">
//             {/* Shadow Background */}
//             <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>

//             <div className="relative z-10 w-full h-64 sm:h-80 md:h-auto">
//               <Image
//                 src="/images/homeso.jpg"
//                 alt="Best Experience Image"
//                 layout="responsive"
//                 width={450}
//                 height={450}
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import Image from "next/image";

export default function Experiences() {
  const [isInView, setIsInView] = useState(false);

  // Intersection observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.1, // When 50% of the section is in view
      }
    );

    const section = document.querySelector("#experience-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="py-16 px-4 md:px-8 bg-white font-jost">
      <div className="max-w-6xl mx-auto">
        <div
          id="experience-section"
          className={`flex flex-col md:flex-row gap-12 items-center transition-all duration-1000 ease-in-out transform ${
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 px-4 md:px-0">
            <h2 className="text-3xl sm:text-4xl md:text-xl font-bold tracking-wide uppercase text-yellow-500">
              EXPERIENCES
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              We Provide You The<br />
              <span className="text-primary">Best Experience</span>
            </h1>
            <div className="h-1 w-16 bg-yellow-500 my-6"></div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl">
              You don’t have to worry about the result because all of these
              interiors are made by people who are professionals in their fields.
            </p>
          </div>

          {/* Image Container */}
          <div className="md:w-1/2 relative w-full">
            {/* Shadow Background */}
            <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>

            <div className="relative z-10 w-full h-64 sm:h-80 md:h-auto">
              <Image
                src="/images/homeso.jpg"
                alt="Best Experience Image"
                layout="responsive"
                width={450}
                height={450}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
