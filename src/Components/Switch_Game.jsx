import React, { useState } from "react";

const options = [
  { label: "Work" },
  { label: "Love" },
  { label: "Chill" },
];

const Switch_Game = () => {
  // Start with none selected
  const [active, setActive] = useState([false, false, false]);
  // Track the order of selection
  const [selectedOrder, setSelectedOrder] = useState([]);

  const handleToggle = (idx) => {
    if (active[idx]) {
      // Deselect: turn off and remove from order
      const newActive = [...active];
      newActive[idx] = false;
      setActive(newActive);
      setSelectedOrder(selectedOrder.filter((i) => i !== idx));
    } else {
      // Select: if already two, remove the oldest, then add this one
      let newOrder = [...selectedOrder, idx];
      let newActive = [...active];
      if (newOrder.length > 2) {
        const toRemove = newOrder[0];
        newActive[toRemove] = false;
        newOrder = newOrder.slice(1);
      }
      newActive[idx] = true;
      setActive(newActive);
      setSelectedOrder(newOrder);
    }
  };

  return (
    <div className="max-w-full max-sm:mx-2 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-16 my-8 md:my-16 p-4 md:p-8 bg-[#63e]/10 ring-2 ring-[#63e]/30 shadow-lg max-sm:rounded-2xl">
      <div className="mb-8 md:mb-0 w-full md:w-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Choose Wisely
        </h2>
        <p className="text-gray-300 text-center text-base sm:text-lg">
          You can select any <span className="text-[#63e] font-semibold">two</span> out
          of <span className="text-[#63e] font-semibold">Work</span>,{" "}
          <span className="text-[#63e] font-semibold">Love</span>, and{" "}
          <span className="text-[#63e] font-semibold">Chill</span>. You can't
          have all three at once!
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto justify-center items-center">
        {options.map((opt, idx) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => handleToggle(idx)}
            className={`flex items-center gap-4 px-4 py-2 rounded-full w-60 sm:w-40 cursor-pointer transition-colors duration-300 ${
              active[idx]
                ? "bg-[#63e]/20 ring-2 ring-[#63e]/40"
                : "bg-gray-800/40"
            }`}
          >
            <span className="flex-1 text-lg font-semibold text-white">
              {opt.label}
            </span>
            {/* Switch */}
            <span
              className={`relative inline-block w-12 h-7 transition-colors duration-300 ${
                active[idx] ? "bg-[#63e]" : "bg-gray-600"
              } rounded-full`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  active[idx] ? "translate-x-5" : ""
                }`}
              ></span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Switch_Game;