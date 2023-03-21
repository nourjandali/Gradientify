import { useState } from "react";
import palettes from "./tailwind-palette.json";
import Logo from "./components/Logo";
import HeroSection from "./components/HeroSection";
import GradientType from "./components/GradientType";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  const [fromColor, setFromColor] = useState("rgb(47, 133, 90)");
  const [viaColor, setViaColor] = useState("rgb(236, 201, 75)");
  const [toColor, setToColor] = useState("rgb(72, 187, 120)");
  const [isFromColorActive, setIsFromColorActive] = useState(true);
  const [isViaColorActive, setIsViaColorActive] = useState(false);
  const [isToColorActive, setIsToColorActive] = useState(false);
  const [gradientDirection, setGradientDirection] = useState("to right");
  const [via, setVia] = useState("Inactive");

  const optionsVia = [
    { label: "Inactive", value: "Inactive" },
    { label: "Active", value: "Active" },
  ];

  const optionsDirections = [
    { label: "To Top", direction: "to top" },
    { label: "To Top Right", direction: "to top right" },
    { label: "To Right", direction: "to right" },
    { label: "To Bottom Right", direction: "to bottom right" },
    { label: "To Bottom", direction: "to bottom" },
    { label: "To Bottom Left", direction: "to bottom left" },
    { label: "To Left", direction: "to left" },
    { label: "To Top Left", direction: "to top left" },
  ];

  const handleFromColorClick = () => {
    setIsFromColorActive(true);
    setIsToColorActive(false);
    setIsViaColorActive(false);
  };

  const handleToColorClick = () => {
    setIsToColorActive(true);
    setIsFromColorActive(false);
    setIsViaColorActive(false);
  };

  const handleViaColorClick = () => {
    setIsViaColorActive(true);
    setIsFromColorActive(false);
    setIsToColorActive(false);
  };

  const handleDirectionsChange = (direction) => {
    setGradientDirection(direction.direction);
  };

  const handleViaChange = (selectedOption) => {
    setVia(selectedOption.value);
    console.log(via);
  };

  return (
    <div className="max-w-6xl mb-12 mx-auto">
      <Logo />
      <HeroSection />

      <div className="mt-16 pb-20 pt-12 bg-gray-200 rounded-xl shadow-md">
        <GradientType />
        {/* Main  */}
        <div className="mt-16 flex justify-evenly items-center">
          {/* Left side */}
          <div
            className="pb-96 w-[40%] h-[426px] ml-8 rounded-xl"
            style={{
              background:
                via === "Inactive"
                  ? `linear-gradient(${gradientDirection}, ${fromColor}, ${toColor})`
                  : `linear-gradient(${gradientDirection}, ${fromColor}, ${viaColor}, ${toColor})`,
            }}
          ></div>

          {/* Right side  */}
          <div>
            <div className="flex gap-8 mb-2 text-sm font-semibold">
              {/* From Color  */}
              <button
                className={`text-gray-500 ${
                  isFromColorActive ? "text-gray-900" : ""
                }`}
                onClick={handleFromColorClick}
              >
                From Color
              </button>

              {/* Via Color  */}
              {via === "Active" && (
                <button
                  className={`text-gray-500 ${
                    isViaColorActive ? "text-gray-900" : ""
                  }`}
                  onClick={handleViaColorClick}
                >
                  Via Color
                </button>
              )}

              {/* To Color  */}
              <button
                className={`text-gray-500 ${
                  isToColorActive ? "text-gray-900" : ""
                }`}
                onClick={handleToColorClick}
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
                            if (isFromColorActive) {
                              setFromColor(swatch.color);
                            } else if (isToColorActive) {
                              setToColor(swatch.color);
                            } else if (isViaColorActive) {
                              setViaColor(swatch.color);
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

        <div className="mt-8 flex justify-evenly items-center ">
          <div className="w-72" />
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
      </div>
    </div>
  );
}

export default App;
