import React from "react";

interface FooterProps {
  handleApply: () => void;
  handleClear: () => void;
}

const FooterModal: React.FC<FooterProps> = ({ handleApply, handleClear }) => (
  <div className="flex justify-end gap-4 p-4 rounded-b-lg bg-white border-t-[1px] border-blackC-light">
    <button className="bg-white text-[#2C2C2C]  px-16 py-2 rounded" onClick={handleClear}>
      Clear
    </button>
    <button className="bg-primary text-[#F5F5F5] px-16 py-2 rounded " onClick={handleApply}>
      Apply
    </button>
  </div>
);

export default FooterModal;
