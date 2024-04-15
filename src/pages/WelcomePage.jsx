/* eslint-disable react/prop-types */
import AvatarSelect from "../components/AvatarSelect";
import { useNavigate } from "react-router-dom";
import Location from "../components/Location";
import Button from "../components/Button";
/* eslint-disable react/no-unescaped-entities */
export default function WelcomePage() {
  const navigate = useNavigate();
  function handleNext() {
    navigate("/select");
  }
  return (
    <div className="py-8 px-4 h-screen">
      {/* RADHE RADHE! */}
      <h1 className="text-2xl ml-5 font-semibold text-pink-500">dribbble</h1>
      <div className="mx-auto flex flex-col justify-between px-4 py-16 h-full max-w-3xl">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome! Let's Create your profile
          </h1>
          <p className="text-lg text-gray-500 mt-5">
            Let's others get to know you better! You can do these later.
          </p>
        </div>
        <p className="text-xl font-bold mt-8">Add an Avatar</p>
        <AvatarSelect />
        <div className="mt-4">
          <Location />
        </div>

        <Button
          onClick={handleNext}
          content="Next"
          className="md:w-1/4 w-full mt-8"
        />
      </div>
    </div>
  );
}
