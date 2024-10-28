import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CarouselNavigation = ({ next, prev }: { next: () => void; prev: () => void }) => {
      return (
            <>
                  {/* Custom Previous Button */}
                  <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#15151580] text-white rounded-full w-10 h-10 flex justify-center items-center shadow-md"
                        style={{ zIndex: 10 }}
                  >
                        <FiChevronLeft size={24} />
                  </button>

                  {/* Custom Next Button */}
                  <button
                        onClick={next}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#15151580] text-white rounded-full w-10 h-10 flex justify-center items-center shadow-md"
                        style={{ zIndex: 10 }}
                  >
                        <FiChevronRight size={24} />
                  </button>
            </>
      );
};

export default CarouselNavigation;
