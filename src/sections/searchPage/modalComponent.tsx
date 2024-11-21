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
      <div className="bg-white w-[1082px] h-[850px] rounded-lg shadow-lg flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#F5F5F5] p-6">
          <ul className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`p-4 rounded-lg transition-all ${
                  activeStep === index
                    ? "bg-white font-semibold"
                    : "bg-[#F5F5F5] text-[#757575]"
                }`}
              >
                {step}
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

       
          <div className="mt-8 flex justify-end gap-4">
            <button
              className="px-6 py-2 bg-gray-200 rounded-lg"
              onClick={() => {
                setActiveStep(0); 
                onClose(); 
              }}
            >
              Cancel
            </button>
            <button
              className="px-6 py-2 bg-red-500 text-white rounded-lg"
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
    </div>
  );
};

export default ModalComponent;
