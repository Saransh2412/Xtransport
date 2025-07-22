// import React, { useState } from 'react';
// import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// const TestimonialCarousel = () => {
//   const reviews = [
//     {
//       rating: 5,
//       text: "The team exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched.",
//       company: "Tech Solutions Inc.",
//       name: "Sarah Johnson",
//       location: "New York, NY"
//     },
//     {
//       rating: 5,
//       text: "Professional, reliable, and innovative. They transformed our vision into reality with exceptional craftsmanship.",
//       company: "Creative Design Studio",
//       name: "Mike Chen",
//       location: "San Francisco, CA"
//     },
//     {
//       rating: 5,
//       text: "Outstanding service from start to finish. The project was completed on time and within budget. Highly recommended!",
//       company: "Global Enterprises",
//       name: "Emily Rodriguez",
//       location: "Austin, TX"
//     },
//     {
//       rating: 4,
//       text: "Great communication throughout the process. The final result was exactly what we were looking for.",
//       company: "Local Business Co.",
//       name: "David Thompson",
//       location: "Seattle, WA"
//     },
//     {
//       rating: 5,
//       text: "Incredible attention to detail and customer service. They went above and beyond to ensure our satisfaction.",
//       company: "Startup Innovations",
//       name: "Lisa Wang",
//       location: "Boston, MA"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const currentReview = reviews[currentIndex];

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-900">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Testimonials</h2>

//         <div className="relative max-w-4xl mx-auto">
//           {/* Navigation Arrows */}
//           <button
//             onClick={goToPrevious}
//             className="absolute left-2 sm:-left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition duration-200 z-10"
//             aria-label="Previous testimonial"
//           >
//             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>

//           <button
//             onClick={goToNext}
//             className="absolute right-2 sm:-right-12 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition duration-200 z-10"
//             aria-label="Next testimonial"
//           >
//             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//           </button>

//           {/* Testimonial Card */}
//           <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg min-h-[300px] flex flex-col justify-between transition-all duration-300">
//             <div>
//               <div className="flex items-center mb-4">
//                 {Array.from({ length: currentReview.rating }).map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                 ))}
//                 {Array.from({ length: 5 - currentReview.rating }).map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-gray-300" />
//                 ))}
//               </div>
//               <p className="mb-6 text-base sm:text-lg leading-relaxed">{currentReview.text}</p>
//             </div>

//             <div className="border-t pt-4 text-sm">
//               <strong className="text-base">{currentReview.company}</strong>
//               <div className="mt-1 text-gray-700">{currentReview.name}</div>
//               <div className="flex items-center mt-1 text-gray-500">
//                 <MapPin className="w-4 h-4 mr-1" />
//                 {currentReview.location}
//               </div>
//             </div>
//           </div>

//           {/* Dots */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {reviews.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition duration-200 ${
//                   index === currentIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Index Counter */}
//           <div className="text-center mt-4 text-sm text-gray-500">
//             {currentIndex + 1} of {reviews.length}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialCarousel;
