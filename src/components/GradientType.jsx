import React from "react";

const GradientType = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      {/* Header  */}
      <span className="font-bold text-2xl bg-gradient-to-r from-zinc-600 to-slate-600 bg-clip-text text-transparent">
        Choose if you are looking for <br /> text or background gradients.
      </span>

      {/* Buttons  */}
      <div className="flex flex-row items-center justify-center gap-6 font-bold mt-6">
        {/* Button 1 */}
        <button className=" text-white bg-emerald-700 hover:bg-emerald-500 transition duration-300 ease-in-out px-4 py-3 rounded-xl flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="currentColor"
                d="M12 2c5.523 0 10 4.477 10 10c0 .649-.062 1.284-.18 1.9c-.386 2.004-2.397 2.85-4.082 2.57l-1.74-.29a1.29 1.29 0 0 0-1.124.36c-.37.37-.547.879-.298 1.376c.423.846.429 1.812.055 2.603C14.131 21.58 13.11 22 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16l.195-.002c.258-.01.5-.06.628-.332a.993.993 0 0 0-.036-.855c-.63-1.262-.302-2.71.673-3.685a3.29 3.29 0 0 1 2.867-.919l1.74.29c.957.16 1.668-.348 1.789-.975A8 8 0 0 0 12 4Zm-4.5 7a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm7-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm-5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z"
              />
            </g>
          </svg>
          Background
        </button>

        <button className="text-emerald-700  bg-gray-300 hover:bg-gray-400 hover:text-white duration-300 ease-in-out px-4 py-3 rounded-xl flex items-center gap-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m18.5 4l1.16 4.35l-.96.26c-.45-.87-.91-1.74-1.44-2.18C16.73 6 16.11 6 15.5 6H13v10.5c0 .5 0 1 .33 1.25c.34.25 1 .25 1.67.25v1H9v-1c.67 0 1.33 0 1.67-.25c.33-.25.33-.75.33-1.25V6H8.5c-.61 0-1.23 0-1.76.43c-.53.44-.99 1.31-1.44 2.18l-.96-.26L5.5 4h13Z"
            />
          </svg>
          Text
        </button>
      </div>
    </div>
  );
};

export default GradientType;
