// import React, { useState } from "react";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose }) => {
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = ["Sort by", "Features", "Opening hours", "Rating", "City"];

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white w-[1082px] h-[850px] rounded-lg shadow-lg flex">
//         {/* Sidebar */}
//         <div className="w-1/4 bg-[#F5F5F5] p-6">
//           <ul className="space-y-4">
//             {steps.map((step, index) => (
//               <li
//                 key={index}
//                 className={`p-4 rounded-lg transition-all ${
//                   activeStep === index
//                     ? "bg-white font-semibold"
//                     : "bg-[#F5F5F5] text-[#757575]"
//                 }`}
//               >
//                 {step}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Content */}
//         <div className="w-3/4 p-6">

//           <h2 className="text-xl font-semibold mb-4">{steps[activeStep]}</h2>

//           <div>
//             {activeStep === 0 && <p>Form or content for "Sort by" goes here.</p>}
//             {activeStep === 1 && <p>Form or content for "Features" goes here.</p>}
//             {activeStep === 2 && <p>Form or content for "Opening hours" goes here.</p>}
//             {activeStep === 3 && <p>Form or content for "Rating" goes here.</p>}
//             {activeStep === 4 && <p>Form or content for "City" goes here.</p>}
//           </div>

//           <div className="mt-8 flex justify-end gap-4">
//             <button
//               className="px-6 py-2 bg-gray-200 rounded-lg"
//               onClick={() => {
//                 setActiveStep(0);
//                 onClose();
//               }}
//             >
//               Cancel
//             </button>
//             <button
//               className="px-6 py-2 bg-red-500 text-white rounded-lg"
//               onClick={() => {
//                 if (activeStep < steps.length - 1) {
//                   setActiveStep((prev) => prev + 1);
//                 } else {
//                   setActiveStep(0);
//                   onClose();
//                 }
//               }}
//             >
//               {activeStep === steps.length - 1 ? "Finish" : "Apply"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModalComponent;
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Sort by", "Features", "Opening hours", "Rating", "City"];

  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <div>
            <h3 className="mb-4">Sort by</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="sort" />
                <span>Popularity</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="sort" />
                <span>Rating: High to Low</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="sort" />
                <span>Cost: Low to High</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="sort" />
                <span>Cost: High to Low</span>
              </label>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3 className="mb-4">Features</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Smoking", "WiFi", "Delivery", "Takeaway"].map(
                (feature, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" name="features" />
                    <span>{feature}</span>
                  </label>
                )
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="mb-4">Opening hours</h3>
            <div className="grid grid-cols-2 gap-4">
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                (day, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" name="openingHours" />
                    <span>{day}</span>
                  </label>
                )
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="mb-4">Rating</h3>
            <input type="range" className="w-full" min="0" max="5" step="0.1" />
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="mb-4">City</h3>
            <input
              type="text"
              placeholder="Enter city"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed 
     inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white w-[80%] h-[80%]   shadow-lg flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#F5F5F5] ">
          <ul className="space-y-4">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`p-4 rounded-lg transition-all cursor-pointer ${
                  activeStep === index
                    ? "bg-white font-semibold"
                    : "bg-[#F5F5F5] text-[#757575]"
                }`}
                onClick={() => setActiveStep(index)}
              >
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="w-3/4 p-6">
          <h2 className="text-xl font-semibold mb-4">{steps[activeStep]}</h2>
          <div>{renderContent()}</div>

          {/* Footer Buttons */}
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
