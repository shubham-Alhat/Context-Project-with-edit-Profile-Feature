import React, { useState } from "react";
import { UserContext, useUserContext } from "../Contexts/UserContext";

function Editprofile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const { username, password, setUsername, setPassword } =
    useUserContext(UserContext);

  function handleClick() {
    setIsEditMode(!isEditMode);
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-3">Profile</h1>
      <div className="w-full flex justify-center">
        <div className="p-4 flex flex-col gap-4 justify-center items-center">
          <span className="text-xl font-light text-center">
            Name:
            {isEditMode ? (
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="bg-transparent ml-5 p-3 border-[1px] border-gray-500"
              />
            ) : (
              <span className="text-xl ml-3">{username}</span>
            )}
          </span>
          <span className="text-xl font-light text-center">
            Password:
            {isEditMode ? (
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-transparent ml-4 p-3 border-[1px] border-gray-500"
              />
            ) : (
              <span className="text-xl ml-3">{password}</span>
            )}
          </span>
          <button
            className="w-full bg-blue-500 py-2 px-4 hover:bg-blue-600 text-xl hover:scale-95 duration-150"
            onClick={handleClick}
          >
            {isEditMode ? "Save" : "Edit Profile"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Editprofile;
