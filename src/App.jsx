import { useState } from "react";
import palettes from "./tailwind-palette.json";
import Logo from "./components/Logo";
import HeroSection from "./components/HeroSection";
import DropdownMenu from "./components/DropdownMenu";

const optionsVia = [
  { label: "Inactive", value: "Inactive" },
  { label: "Active", value: "Active" },
];

const optionsDirections = [
  { label: "To Top", direction: "to top", tailwindCSS: "to-t" },
  { label: "To Top Right", direction: "to top right", tailwindCSS: "to-tr" },
  { label: "To Right", direction: "to right", tailwindCSS: "to-r" },
  {
    label: "To Bottom Right",
    direction: "to bottom right",
    tailwindCSS: "to-br",
  },
  { label: "To Bottom", direction: "to bottom", tailwindCSS: "to-b" },
  {
    label: "To Bottom Left",
    direction: "to bottom left",
    tailwindCSS: "to-bl",
  },
  { label: "To Left", direction: "to left", tailwindCSS: "to-l" },
  { label: "To Top Left", direction: "to top left", tailwindCSS: "to-tl" },
];

function App() {
  const [fromColor, setFromColor] = useState({
    paletteName: "emerald",
    name: "500",
    hex: "#10b981",
  });
  const [viaColor, setViaColor] = useState({
    paletteName: "emerald",
    name: "700",
    hex: "#047857",
  });
  const [toColor, setToColor] = useState({
    paletteName: "emerald",
    name: "900",
    hex: "#064e3b",
  });
  const [activeTab, setActiveTab] = useState("From Color");
  const [gradientDirection, setGradientDirection] = useState("to top");
  const [via, setVia] = useState("Inactive");
  const [gradientType, setGradientType] = useState("Background");

  const tailwindDirection = optionsDirections.find(
    (option) => option.direction === gradientDirection
  ).tailwindCSS;

  const handleDirectionsChange = (direction) => {
    setGradientDirection(direction.direction);
  };

  const handleViaChange = (selectedOption) => {
    setVia(selectedOption.value);
  };

  const handleCopyClick = (event) => {
    const button = event.target;
    const input = document.querySelector("input");
    navigator.clipboard.writeText(input.value);
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41l2.07 2.08L17.6 6L19 7.41L12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/></svg> Copied`;
    setTimeout(() => {
      button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" > <path fill="currentColor" d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Z" /></svg> Copy`;
    }, 2000);
  };

  function generateRandomColor() {
    const randomPaletteIndex = Math.floor(Math.random() * palettes.length);
    const randomSwatchIndex = Math.floor(
      Math.random() * palettes[randomPaletteIndex].swatches.length
    );
    const randomSwatch =
      palettes[randomPaletteIndex].swatches[randomSwatchIndex];

    return {
      paletteName: palettes[randomPaletteIndex].paletteName,
      name: randomSwatch.name,
      hex: randomSwatch.color,
    };
  }

  const handleRandomClick = () => {
    const fromColor = generateRandomColor();
    const viaColor = generateRandomColor();
    const toColor = generateRandomColor();

    setFromColor(fromColor);
    setViaColor(viaColor);
    setToColor(toColor);
  };

  return (
    <div className="max-w-6xl mb-12 mx-auto">
      <Logo />
      <HeroSection />

      <div className="mt-16 pb-20 pt-12 bg-gray-200 rounded-xl shadow-md">
        {/* Gradient Type  */}
        <div className="flex flex-col justify-center items-center text-center">
          {/* Header  */}
          <span className="font-bold text-2xl bg-gradient-to-r from-zinc-600 to-slate-600 bg-clip-text text-transparent">
            Choose if you are looking for <br /> text or background gradients.
          </span>

          {/* Buttons  */}
          <div className="flex flex-row items-center justify-center gap-6 font-bold mt-6">
            {/* Button 1 */}
            <button
              onClick={() => setGradientType("Background")}
              className={`text-white px-4 py-3 rounded-xl flex items-center gap-4 ${
                gradientType === "Background"
                  ? "bg-emerald-700 hover:bg-emerald-900 transform -translate-y-1 transition duration-300 ease-in-out border-b-4 border-emerald-900"
                  : "bg-emerald-700 hover:bg-emerald-900 transition duration-300 ease-in-out"
              } `}
            >
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

            <button
              onClick={() => setGradientType("Text")}
              className={`text-emerald-700 hover:text-white px-4 py-3 rounded-xl flex items-center gap-4 ${
                gradientType === "Text"
                  ? "bg-gray-300 hover:bg-gray-400 transform -translate-y-1 transition duration-300 ease-in-out border-b-4 border-gray-500"
                  : "bg-gray-300 hover:bg-gray-400 transition duration-300 ease-in-out"
              } `}
            >
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

        {/* Main  */}
        <div className="mt-16 flex justify-evenly items-center">
          {/* Left side */}
          {gradientType === "Background" ? (
            <div
              className="pb-96 w-[40%] h-[426px] ml-8 rounded-xl"
              style={{
                background:
                  via === "Inactive"
                    ? `linear-gradient(${gradientDirection}, ${fromColor.hex}, ${toColor.hex})`
                    : `linear-gradient(${gradientDirection}, ${fromColor.hex}, ${viaColor.hex}, ${toColor.hex})`,
              }}
            ></div>
          ) : (
            <div
              className="flex items-center justify-center text-center w-[42.8%] text-5xl font-bold "
              style={{
                backgroundImage:
                  via === "Inactive"
                    ? `linear-gradient(${gradientDirection}, ${fromColor.hex}, ${toColor.hex})`
                    : `linear-gradient(${gradientDirection}, ${fromColor.hex}, ${viaColor.hex}, ${toColor.hex})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                backgroundColor: "transparent",
              }}
            >
              Gradient Text
            </div>
          )}
          {/* Right side  */}
          <div>
            <div className="flex gap-8 mb-2 text-sm font-semibold">
              {/* From Color  */}
              <button
                className={`text-gray-500 ${
                  activeTab === "From Color" ? "text-gray-900" : ""
                }`}
                onClick={() => setActiveTab("From Color")}
              >
                From Color
              </button>

              {/* Via Color  */}
              {via === "Active" && (
                <button
                  className={`text-gray-500 ${
                    activeTab === "Via Color" ? "text-gray-900" : ""
                  }`}
                  onClick={() => setActiveTab("Via Color")}
                >
                  Via Color
                </button>
              )}

              {/* To Color  */}
              <button
                className={`text-gray-500 ${
                  activeTab === "To Color" ? "text-gray-900" : ""
                }`}
                onClick={() => setActiveTab("To Color")}
              >
                To Color
              </button>
            </div>
            {/* Palette */}
            <div className="h-[400px] overflow-y-scroll scrollbar border-2 px-8 pb-8 border-gray-300 rounded-xl">
              {palettes.map((palette) => (
                <div key={palette.paletteName}>
                  <h2 className="font-semibold uppercase text-xs mt-8 mb-2 text-gray-500">
                    {palette.paletteName}
                  </h2>
                  <div className="flex items-center justify-start gap-4">
                    {palette.swatches.map((swatch) => (
                      <div
                        key={swatch.color}
                        className="flex flex-col items-center justify-center"
                      >
                        <button
                          style={{
                            backgroundColor: swatch.color,
                            width: "40px",
                            height: "40px",
                            borderRadius: "0.5rem",
                          }}
                          onClick={() => {
                            const selectedColor = {
                              paletteName: palette.paletteName,
                              name: swatch.name,
                              hex: swatch.color,
                            };
                            if (activeTab === "From Color") {
                              setFromColor(selectedColor);
                            } else if (activeTab === "Via Color") {
                              setViaColor(selectedColor);
                            } else if (activeTab === "To Color") {
                              setToColor(selectedColor);
                            }
                          }}
                          className="focus:border-2 focus:border-emerald-400"
                        ></button>

                        <div className="mt-2 text-sm text-gray-500">
                          {swatch.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Random Generator  */}
        <div className="mt-8 flex justify-evenly items-center">
          <button
            onClick={handleRandomClick}
            className="w-72 flex justify-center items-center text-start -mt-20 gap-2 text-sm text-gray-500 font-semibold hover:text-emerald-700 transition duration-200 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M341.3 28.3v85.3H128c-70.7 0-128 57.3-128 128c0 21.5 5.8 41.4 15.2 59.2L68 263.2c-2.4-6.8-4-13.9-4-21.5c0-35.4 28.7-64 64-64h213.3V263L512 156.3V135L341.3 28.3zM444 262.8c2.4 6.8 4 13.9 4 21.5c0 35.4-28.6 64-64 64H170.7V263L0 369.7V391l170.7 106.7v-85.3H384c70.7 0 128-57.3 128-128c0-21.5-5.8-41.4-15.2-59.2L444 262.8z"
              />
            </svg>
            Random
          </button>
          <div className="w-[40%] flex justify-between gap-2">
            <div>
              <h1 className="text-gray-500 text-sm mb-2 font-semibold">Via</h1>
              <DropdownMenu options={optionsVia} onChange={handleViaChange} />
            </div>

            <div>
              <h1 className="text-gray-500 text-sm mb-2 font-semibold">
                Directions
              </h1>
              <DropdownMenu
                options={optionsDirections}
                onChange={handleDirectionsChange}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-evenly items-center">
          <div className="w-[515px]" />
          <div className="w-[50%] flex gap-2">
            {/* CSS */}
            <input
              className="w-full rounded-md bg-gray-200 px-3 py-3 font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 outline-none text-sm"
              type="text"
              readOnly
              value={`${
                via === "Inactive"
                  ? `bg-gradient-${tailwindDirection} from-${fromColor.paletteName}-${fromColor.name} to-${toColor.paletteName}-${toColor.name}`
                  : `bg-gradient-${tailwindDirection} from-${fromColor.paletteName}-${fromColor.name} via-${viaColor.paletteName}-${viaColor.name} to-${toColor.paletteName}-${toColor.name}`
              }${
                gradientType === "Text" ? " bg-clip-text text-transparent" : ""
              }`}
            />
            {/* Copy */}
            <button
              className="inline-flex w-fit bg-emerald-700 hover:bg-emerald-900 transition duration-300 ease-in-out justify-between items-center gap-x-1.5 rounded-md px-3 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
              onClick={handleCopyClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Z"
                />
              </svg>
              Copy
            </button>
          </div>
        </div>

        {/* ---- */}
      </div>
    </div>
  );
}

export default App;
