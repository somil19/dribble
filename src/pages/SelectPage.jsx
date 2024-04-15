/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import firstOption from "../assets/firstOption.png";
import secOption from "../assets/secOption.png";
import thirdOption from "../assets/thirdOption.png";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateUserChoices } from "../features/userSlice";
export default function SelectPage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  //current user
  const currentUser = users[users.length - 1];
  const hasChoices = currentUser.usersChoices.length === 0;
  const handleOption = (title, isChecked) => {
    // console.log(title, isChecked);
    dispatch(updateUserChoices({ title, isChecked }));
  };

  const navigate = useNavigate();
  return (
    <div className="py-4 px-4 h-screen">
      <div className="flex justify-between items-center space-x-8 w-fit">
        <h1 className="text-2xl ml-5 font-semibold text-pink-500">dribbble</h1>
        <button
          className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg w-fit "
          onClick={() => navigate("/welcome")}
        >
          <FontAwesomeIcon icon={faAngleLeft} color="black" size="sm" />
        </button>
      </div>
      <div className="mx-auto flex flex-col justify-between  items-center px-4 py-10 max-w-5xl">
        <div className="text-center space-y-4 mb-4">
          <h1 className="text-4xl font-bold">What brings you to Dribble?</h1>
          <p className="text-md font-semibold text-gray-500">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:space-x-8  gap-y-16 mt-10 lg:mt-12 lg:mb-6">
          <Card
            imgUrl={firstOption}
            title={"I'm a designer looking to share my work"}
            text={
              "Share your Work, get feedback, and join a vibrant community of fellow designers."
            }
            onSelect={handleOption}
          />
          <Card
            imgUrl={secOption}
            title={"I am looking to hire a designer"}
            text={
              "Find the perfect designer for your project on Dribbble.Browse portfolios, collaborate, and hire with confidence."
            }
            onSelect={handleOption}
          />
          <Card
            imgUrl={thirdOption}
            title={"I'm looking for design inspiration"}
            text={
              "With over 7 million shots from a vast community of designers,Dribbble is the leading source for design inspiration."
            }
            onSelect={handleOption}
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-10">
          {!hasChoices && (
            <p className="text-md font-bold">
              Anything else? You can select multiple.
            </p>
          )}

          <Button
            content={"Finish"}
            className="w-1/4 mt-4"
            onClick={() => navigate("/home")}
            disabled={hasChoices}
          />

          {!hasChoices && (
            <button
              className="font-semibold text-sm text-gray-500 mt-2"
              onClick={() => navigate("/welcome")}
            >
              or Press RETURN
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
