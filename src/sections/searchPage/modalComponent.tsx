import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Sort by", "Features", "Opening hours", "Rating", "City"];


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[1082px] h-[850px] rounded-lg shadow-lg flex flex-col">
        {/* Sidebar */}
        <div className="flex h-full">
          <div className="w-1/4 bg-[#F5F5F5]">
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <li
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 h-24  transition-all relative overflow-hidden ${activeStep === index
                    ? "bg-white font-semibold"
                    : "bg-[#F5F5F5] text-[#757575]"
                    }`}
                >

                  <span
                    className={`absolute top-0 left-0 h-full transition-all duration-300 ${activeStep === index ? "bg-orange-500 w-2" : "w-0"
                      }`}
                  ></span>

                  <span className="relative z-10">{step}</span>
                </li>
              ))}
            </ul>
          </div>


          {/* Content */}
          <div className="w-3/4 p-6">

            <h2 className="text-xl font-semibold mb-4">{steps[activeStep]}</h2>


            <div>
              {activeStep === 0 && <p>Form or content for "Sort by" goes here.</p>}
              {activeStep === 1 && <p>Form or content for "Features" goes here.</p>}
              {activeStep === 2 && <p>Form or content for "Opening hours" goes here.</p>}
              {activeStep === 3 && <p>Form or content for "Rating" goes here.</p>}
              {activeStep === 4 && <p>Form or content for "City" goes here.</p>}
            </div>



          </div>
        </div>
        <hr />
        <div className=" p-3 flex justify-end items-center  w-full gap-4">
          <button
            className="w-56 py-3 bg-gray-200 rounded-lg"
            onClick={() => {
              setActiveStep(0);
              onClose();
            }}
          >
            Cancel
          </button>
          <button
            className="w-56 px-6 py-3 bg-red-500 text-white rounded-lg"
            onClick={() => {
              if (activeStep < steps.length - 1) {
                setActiveStep((prev) => prev + 1);
              } else {
                setActiveStep(0);
                onClose();
              }
            }}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Apply"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
