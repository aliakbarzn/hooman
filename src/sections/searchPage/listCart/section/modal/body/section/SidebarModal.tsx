import React from "react";

interface SidebarProps {
  steps: string[];
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const SidebarModal: React.FC<SidebarProps> = ({ steps, activeStep, setActiveStep }) => (
  <div className="w-full h-full bg-gray-200">
    <ul className="space-y-2 py-4">
      {steps.map((step, index) => (
        <li
          key={index}
          onClick={() => setActiveStep(index)}
          className={`cursor-pointer h-16 px-4 py-2 flex items-center text-lg ${
            activeStep === index ? "bg-white border-l-4 border-primary" : ""
          }`}
        >
          {step}
        </li>
      ))}
    </ul>
  </div>
);

export default SidebarModal;
