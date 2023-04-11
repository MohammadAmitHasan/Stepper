import { IoMdCheckmark } from 'react-icons/io';

const StepperItem = ({ step, text, stepNumber, isLast = false }) => {
  return (
    <>
      <div className="relative flex items-center">
        <div
          className={`${
            step >= stepNumber
              ? 'border-secondary bg-secondary text-white'
              : 'border-gray-400 bg-transparent text-dark'
          } flex h-8 w-8 items-center justify-center rounded-full border text-lg transition duration-500 ease-in-out md:h-10 md:w-10 md:text-xl lg:h-11 lg:w-11 lg:text-2xl`}
        >
          <IoMdCheckmark />
        </div>
        <div className="absolute top-0 mt-10 -ml-4 font-montserrat text-xs text-dark xs:-ml-12 xs:w-32 xs:text-center xs:text-sm md:mt-12 md:-ml-11 lg:mt-14 lg:-ml-10">
          {text}
        </div>
      </div>
      <div
        className={` ${
          step > stepNumber ? ' border-t-secondary' : 'border-t-gray-400'
        } flex-auto border-t-2 border-dashed transition duration-500 ease-in-out ${
          isLast ? 'hidden' : 'xs:block'
        }`}
      />
      {/* <div
        className={` ${
          step > stepNumber ? ' border-l-secondary' : 'border-l-gray-400'
        } relative left-3.5 flex h-8 justify-center border-l-2 border-solid transition duration-500 ease-in-out xs:border-l-0 ${
          isLast ? 'hidden' : 'sm:block'
        }`}
      /> */}
    </>
  );
};

export default StepperItem;
