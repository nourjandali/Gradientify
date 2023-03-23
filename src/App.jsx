import { useState } from "react";
import palettes from "./tailwind-palette.json";
import Logo from "./components/Logo";
import HeroSection from "./components/HeroSection";
import DropdownMenu from "./components/DropdownMenu";
import GradientType from "./components/GradientType";

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
    paletteName: "gray",
    name: "900",
    hex: "#1f2937",
  });
  const [viaColor, setViaColor] = useState({
    paletteName: "gray",
    name: "900",
    hex: "#1f2937",
  });
  const [toColor, setToColor] = useState({
    paletteName: "gray",
    name: "900",
    hex: "#1f2937",
  });
  const [activeTab, setActiveTab] = useState("From Color");
  const [gradientDirection, setGradientDirection] = useState("to top");
  const [via, setVia] = useState(false);

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
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm5.6-5.225q.2 0 .375-.062q.175-.063.325-.213l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275L10.6 13.4l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.5q.15.15.325.213q.175.062.375.062Z"/></svg> Copied`;
    setTimeout(() => {
      button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" > <path fill="currentColor" d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Z" /></svg> Copy `;
    }, 2000);
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
            // className={`pb-96 w-[40%] h-[426px] ml-8 rounded-xl bg-gradient-to-r ${tailwindCSSGradient}`}
            style={{
              background:
                via === "Inactive"
                  ? `linear-gradient(${gradientDirection}, ${fromColor.hex}, ${toColor.hex})`
                  : `linear-gradient(${gradientDirection}, ${fromColor.hex}, ${viaColor.hex}, ${toColor.hex})`,
            }}
          ></div>

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

        <div className="mt-6 flex justify-evenly items-center">
          <div className="w-[515px]" />
          <div className="w-[50%] flex gap-2">
            {/* CSS */}
            <input
              className="w-full rounded-md bg-gray-200 px-3 py-3 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 outline-none"
              type="text"
              readOnly
              value={`${
                via === "Inactive"
                  ? `bg-gradient-${tailwindDirection} from-${fromColor.paletteName}-${fromColor.name} to-${toColor.paletteName}-${toColor.name}`
                  : `bg-gradient-${tailwindDirection} from-${fromColor.paletteName}-${fromColor.name} via-${viaColor.paletteName}-${viaColor.name} to-${toColor.paletteName}-${toColor.name}`
              }`}
            />
            {/* Copy */}
            <button
              className="inline-flex w-fit bg-gray-900 hover:bg-gray-700 justify-between items-center gap-x-1.5 rounded-md px-3 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300"
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
