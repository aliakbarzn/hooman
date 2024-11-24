import CashPayment from "@/assets/icons/search-page/ic-cash-payment";
import sona from "@/assets/icons/search-page/ic-sona";
import giftCard from "@/assets/icons/search-page/ic-giftCard";
import Parking from "@/assets/icons/search-page/ic-parking";
import Shower from "@/assets/icons/search-page/ic-shower";
import IcClose from "@/assets/icons/search-page/ic-close";
import React, { useState, createContext, useContext } from "react";
import { useForm, Control, FieldValues, UseFormRegister, UseFormWatch, FieldErrors, Controller } from "react-hook-form";


interface FormContextType {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  control: Control<FieldValues>;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setValue: (name: string, value: any) => void;
}


const FormContext = createContext<FormContextType | null>(null);


const steps = ["Sort by", "Features", "Opening hours", "Rating"];


const ModalComponent: React.FC<{applyFilters: (filters: any) => void; isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { control, handleSubmit, watch, setValue, register, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    if (activeStep === 0 && !data.sortBy) {
      alert("Please select a sorting option.");
      return;
    }

    if (activeStep === 2 && !data.openingHours) {
      alert("Please select an opening hour.");
      return;
    }

    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log("Form Data Submitted:", data);
      setActiveStep(0);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <FormContext.Provider
      value={{
        activeStep,
        setActiveStep,
        control,
        register,
        watch,
        errors,
        setValue,
      }}
    >
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-[80%] max-w-[1072px]  h-[85%] rounded-xl shadow-lg flex flex-col">
        <Header onClose={onClose}/>
          <div className="flex flex-grow">
            <Sidebar />
            <Content />
          </div>
          <Footer onClose={onClose} />
        </form>
      </div>
    </FormContext.Provider>
  );
};
const Header: React.FC<{ onClose: () => void }> = ({ onClose }) =>{
  return(
    <div className="p-4 h-16 bg-white flex justify-between items-center border-b border-[#757575]">
      <span className="text-2xl">Filters</span>
      <button
        type="button"
       className="w-14 h-14"
        onClick={() => {
          onClose();
        }}
      >
<IcClose/>
      </button>

    </div>
   
  )
}
const Sidebar: React.FC = () => {
  const { activeStep, setActiveStep } = useSafeFormContext();

  return (
    <div className="w-1/4 bg-gray-100">
      <ul className="space-y-2 py-4">
        {steps.map((step, index) => (
          <li
            key={index}
            onClick={() => setActiveStep(index)}
            className={`cursor-pointer px-4 py-2 flex items-center text-lg ${activeStep === index ? "bg-white border-l-4 border-orange-500" : ""
              }`}
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Content: React.FC = () => {
  const { activeStep } = useSafeFormContext();

  switch (activeStep) {
    case 0:
      return <SortBy />;
    case 1:
      return <Features />;
    case 2:
      return <OpeningHours />;
    case 3:
      return <Rating />;
    default:
      return null;
  }
};

const SortBy: React.FC = () => {
  const { register, watch } = useSafeFormContext();
  const selectedOption = watch("sortBy");
  const options = ["Popularity", "Rating: High to Low", "Cost: Low to High", "Cost: High to Low"];

  return (
    <div className="p-6">
      <div className="space-y-4">
        {options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center cursor-pointer ${selectedOption === option ? "text-orange-500" : "text-gray-700"
              }`}
          >
            <input
              type="radio"
              value={option}
              className="mr-2 hidden"
              {...register("sortBy", { required: true })}
            />
            <span
              className={`w-5 h-5 border rounded-full flex items-center justify-center ${selectedOption === option ? "border-orange-500 bg-orange-500 text-white" : "border-gray-300"
                }`}
            >
              {selectedOption === option && "●"}
            </span>
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const { watch, setValue } = useSafeFormContext();
  const selectedFeatures = watch("features") || [];

  const featureOptions = [
    { icon: CashPayment, label: "cash payment" },
    { icon: Parking, label: "parking" },
    { icon: Shower, label: "Shower" },
    { icon: sona, label: "sona" },
    { icon: giftCard, label: "gift card" },

  ];


  const toggleFeature = (label: string) => {
    const updatedFeatures = selectedFeatures.includes(label)
      ? selectedFeatures.filter((item: string) => item !== label)
      : [...selectedFeatures, label];
    setValue("features", updatedFeatures);
  };

  return (
    <div className="p-6 grid h-24 grid-cols-5 gap-6">
      {featureOptions.map((feature, index) => {
        const isSelected = selectedFeatures.includes(feature.label);

        return (
          <div
            key={index}
            onClick={() => toggleFeature(feature.label)}
            className={`cursor-pointer h-full flex flex-col items-center justify-center  transition-all ${isSelected ? "border-orange-500  text-orange-500" : "border-gray-300 text-gray-700"
              }`}
          >
            <div className={`border-2 rounded-lg p-4 ${isSelected ? "border-orange-500" : "border-gray-300"}`}>

              <feature.icon />
            </div>


            <span
              className="mt-2 text-sm font-medium "
            >
              {feature.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const OpeningHours: React.FC = () => {
  const { register, watch } = useSafeFormContext();
  const selectedDay = watch("openingHours");
  const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="p-6">
      <div className="space-y-4">
        {days.map((day, index) => (
          <label
            key={index}
            className={`flex items-center cursor-pointer ${selectedDay === day ? "text-orange-500" : "text-gray-700"
              }`}
          >
            <input
              type="radio"
              value={day}
              className="mr-2 hidden"
              {...register("openingHours", { required: true })}
            />
            <span
              className={`w-5 h-5 border rounded-full flex items-center justify-center ${selectedDay === day ? "border-orange-500 bg-orange-500 text-white" : "border-gray-300"
                }`}
            >
              {selectedDay === day && "●"}
            </span>
            <span className="ml-2">{day}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

const Rating: React.FC = () => {
  const { control } = useSafeFormContext();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Rating</h2>
      <Controller
        name="rating"
        control={control}
        defaultValue={3.5}
        render={({ field }) => (
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min={0}
              max={5}
              step={0.5}
              {...field}
              className="w-full"
            />
            <span className="text-gray-700">{field.value}+</span>
          </div>
        )}
      />
    </div>
  );
};

const Footer: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { activeStep, setActiveStep } = useSafeFormContext();

  return (
    <div className="p-4 bg-white flex justify-end items-center">
      <button
        type="button"
        className="bg-gray-300 px-4 py-2 mx-4 rounded"
        onClick={() => {
          setActiveStep(0);
          onClose();
        }}
      >
        Clear All
      </button>
      <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded">
        {activeStep === steps.length - 1 ? "Apply" : "Next"}
      </button>
    </div>
  );
};

const useSafeFormContext = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("This component must be used within a FormContext.Provider");
  return context;
};

export default ModalComponent;
