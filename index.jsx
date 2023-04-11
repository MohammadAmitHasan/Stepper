import StepperItem from './StepperItem';

const PaymentStepper = ({ step }) => {
  const steppers = ['Processing', 'Payment', 'Shipped', 'Delivered'];
  return (
    <div className="mx-auto px-4 py-4 xs:px-7 lg:px-11 2xl:px-16 3xl:px-20">
      <div className="flex items-center pb-6 lg:pb-8">
        {steppers?.map((stepper, idx) => (
          <StepperItem
            key={Math.random()}
            step={step}
            text={stepper}
            stepNumber={idx + 1}
            isLast={steppers?.length === idx + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentStepper;
