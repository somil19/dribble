/* eslint-disable react/prop-types */
import { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import boy from "../assets/boy.jpg";
import girl from "../assets/girl.jpg";
import boy1 from "../assets/boy1.jpg";
import girl1 from "../assets/girl1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { userAvatar } from "../features/userSlice";
const avatarOptions = [
  { value: "avatar1", label: "Avatar 1", image: boy },
  { value: "avatar2", label: "Avatar 2", image: girl },
  { value: "avatar3", label: "Avatar 3", image: boy1 },
  { value: "avatar4", label: "Avatar 4", image: girl1 },
];

export default function AvatarSelect() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const users = useSelector((state) => state.user.users);
  //current user
  const currentUser = users[users.length - 1];
  const currentUserAvatar = currentUser.avatar;
  const currentUserEmail = currentUser.email;
  // console.log(currentUser);
  // console.log(currentUserEmail);
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedAvatar(reader.result);
        console.log(reader.result);
        dispatch(
          userAvatar({ email: currentUserEmail, avatar: reader.result })
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (selectedOption) => {
    // console.log(selectedOption.image);
    setSelectedAvatar(selectedOption.image);

    dispatch(
      userAvatar({ email: currentUserEmail, avatar: selectedOption.image })
    );
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-7 mt-2">
      {" "}
      <div className="relative  mb-8 md:mb-5 mt-4 mx-auto lg:mt-0 lg:mx-0 md:mr-8">
        {" "}
        <div className="w-36 h-36 flex justify-center items-center rounded-full border-2 border-gray-300 p-1">
          {" "}
          {selectedAvatar || currentUserAvatar ? (
            <img
              src={selectedAvatar || currentUserAvatar}
              alt="Selected Avatar"
              className="w-full h-full rounded-full "
            />
          ) : (
            <button className="text-gray-500 text-3xl font-bold focus:outline-none">
              {" "}
              <FontAwesomeIcon icon={faCamera} />+{" "}
            </button>
          )}{" "}
          <input
            type="file"
            id="avatar-input"
            accept="image/*"
            className="absolute inset-0 z-0 cursor-pointer opacity-0 w-1/2 ml-8"
            onChange={handleFileChange}
          />{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex flex-col space-y-5">
        {" "}
        <button
          className="border rounded-lg border-gray-300 shadow-md py-2 px-4 text-black font-semibold focus:outline-none"
          onClick={() => document.getElementById("avatar-input").click()}
        >
          {" "}
          Choose an image{" "}
        </button>{" "}
        <Select
          onChange={handleChange}
          options={avatarOptions}
          components={{
            Option: Img,
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          isSearchable={false}
          styles={{
            control: (provided) => ({
              ...provided,

              border: "2px solid gray",
              paddingLeft: "0.6rem",
              boxShadow: "none",
            }),
            option: (provided) => ({
              ...provided,
              width: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }),
            menu: (provided) => ({
              ...provided,
              width: 150,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }),
          }}
          placeholder="Or choose one of your defaults"
        />{" "}
      </div>
    </div>
  );
}
function Img(props) {
  const { data, selectOption } = props;
  const { value, image } = data;

  return (
    <div onClick={() => selectOption(data)}>
      <img
        src={image}
        alt={value}
        className="h-32 w-32"
        style={{
          cursor: "pointer",
          padding: "5px",
          textAlign: "center",
        }}
      />
    </div>
  );
}
