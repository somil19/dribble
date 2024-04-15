/* eslint-disable react/prop-types */
import { useState } from "react";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export default function Card({ imgUrl, title, text, onSelect }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
    // console.log(title, !isChecked);
    onSelect(title, !isChecked);
  };

  return (
    <div
      className={`w-72 mt-8  bg-white h-64  rounded-2xl px-5 relative ${
        isChecked ? "border-2 border-pink-500" : "border-2 border-gray-200"
      }`}
    >
      <div
        className={`transition-all duration-200 transform ${
          isChecked ? "-translate-y-20" : ""
        }`}
      >
        <div className="relative overflow-hidden">
          <img src={imgUrl} alt="Your Image" className="w-full h-50 " />
          <p className="text-lg text-center font-bold mb-2 ">{title}</p>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-y-4 flex-col items-center">
        {isChecked && (
          <p className="text-sm text-center text-slate-700 px-4 py-1">{text}</p>
        )}
        <div>
          <FontAwesomeIcon
            icon={!isChecked ? faCircle : faCircleCheck}
            size="xl"
            onClick={handleRadioChange}
            className="text-pink-500"
          />
        </div>
      </div>
    </div>
  );
}
