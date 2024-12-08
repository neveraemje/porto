


// //JOSSSSSS
// import React from "react";

// interface ColorData {
//   name: string;
//   hues: {
//     name: string;
//     colors: string[];
//   }[];
//   tones: string[];
// }

// interface ColorPreviewProps {
//   data: ColorData;
// }

// const ColorPreview: React.FC<ColorPreviewProps> = ({ data }) => {
//   return (
//     <div className="flex flex-col items-start">
//       {/* Hue Names (Horizontal Header) */}
//       {/* <div className="flex mb-4">

//         <div className="w-12"></div>
//         {data.hues.map((hue) => (
//           <div
//             key={hue.name}
//             className="w-10 flex justify-center font-medium text-sm mx-2"
//           >
//             {hue.name}
//           </div>
//         ))}
//       </div> */}
//       {/* Color Shades Grid */}
//       {data.tones.map((_, toneIndex) => (
//         <div key={toneIndex} className="flex items-center">
//           {/* Tone Index */}
//           <div className="w-12 h-10 flex items-center justify-center text-sm font-medium">
//             {data.tones[toneIndex]}
//           </div>
//           {/* Hue Colors */}
//           {data.hues.map((hue) => (
//             <div
//               key={hue.name + toneIndex}
//               className="w-10 h-10 mx-2"
//               style={{ backgroundColor: hue.colors[toneIndex] }}
//             ></div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ColorPreview;



//JOSSSS YG INI
// "use client";
// import React, { useState } from "react";

// // Function to calculate contrast ratio using WCAG 2.1 formula
// const calculateContrastRatio = (color1: string, color2: string): number => {
//   const getLuminance = (color: string): number => {
//     const rgb = color.match(/\w\w/g)?.map((x) => parseInt(x, 16));
//     if (!rgb) return 0;
//     const [r, g, b] = rgb;
//     const a = [r, g, b].map((val) => {
//       val = val / 255;
//       return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
//     });
//     return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
//   };

//   const lum1 = getLuminance(color1);
//   const lum2 = getLuminance(color2);
//   const ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
//   return ratio;
// };

// interface ColorData {
//   name: string;
//   hues: { name: string; colors: string[] }[];
//   tones: string[];
// }

// interface ColorPreviewProps {
//   data: ColorData;
// }

// const ColorPreview: React.FC<ColorPreviewProps> = ({ data }) => {
//   const [selectedColors, setSelectedColors] = useState<string[]>([]);

//   const handleColorSelect = (color: string) => {
//     setSelectedColors((prev) => {
//       if (prev.length === 2) return [color]; // Keep only 2 colors selected at a time
//       return [...prev, color];
//     });
//   };

//   const contrastRatio =
//     selectedColors.length === 2
//       ? calculateContrastRatio(selectedColors[0], selectedColors[1])
//       : null;

//   return (
//     <div className="flex flex-col items-start">
//       {/* Color Shades Grid */}
//       {data.tones.map((_, toneIndex) => (
//         <div key={toneIndex} className="flex items-center relative">
//           {/* Tone Index */}
//           <div className="w-12 h-10 flex items-center justify-center text-sm font-medium">
//             {data.tones[toneIndex]}
//           </div>
//           {/* Hue Colors */}
//           <div className="flex">
//             {data.hues.map((hue) => {
//               const color = hue.colors[toneIndex];
//               const isSelected = selectedColors.includes(color);

//               return (
//                 <div
//                   key={hue.name + toneIndex}
//                   className={`cursor-pointer relative ${
//                     isSelected ? "border-4 border-blue-500" : ""
//                   }`}
//                   style={{
//                     backgroundColor: color,
//                     width: "40px",
//                     height: "40px",
//                     transform: isSelected ? "scale(1.2)" : "scale(1)",
//                     zIndex: isSelected ? 10 : 1,
//                     transition: "transform 0.2s ease, z-index 0.2s ease",
//                   }}
//                   onClick={() => handleColorSelect(color)}
//                 >
//                   {isSelected && (
//                     <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-xs">
//                       {selectedColors.indexOf(color) === 0 ? "1" : "2"}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}

//       {/* WCAG Contrast Ratio */}
//       {/* <div className="mt-4">
//         {selectedColors.length === 2 ? (
//           <>
//             <p className="font-medium text-sm">
//               Contrast Ratio: {contrastRatio?.toFixed(2)} (WCAG 2.1)
//             </p>
//             <p className="text-sm">
//               {contrastRatio && contrastRatio >= 4.5
//                 ? "Meets WCAG AA standard"
//                 : "Does not meet WCAG AA standard"}
//             </p>
//           </>
//         ) : (
//           <p className="text-sm">Select two colors to check contrast ratio.</p>
//         )}
//       </div> */}

// <div className="mt-4 flex justify-between items-start gap-8 w-full bg-red-500 p-4 rounded-lg shadow-md">
//   {/* Side 1: Selected Colors */}
//   <div className="flex flex-col items-start w-1/2">
//     <div className=" text-test">Selected Colors:</div>
//     <div className="flex flex-col gap-2">
//       {[0, 1].map((index) => {
//         const color = selectedColors[index];
//         const hue = color ? data.hues.find((hue) => hue.colors.includes(color)) : undefined;
//         const toneIndex = hue ? hue.colors.indexOf(color) : -1;
//         const toneLevel = toneIndex !== -1 ? data.tones[toneIndex] : "Unknown";

//         return (
//           <div key={index} className="flex items-center gap-4">
//             {/* Color Preview Box */}
//             <div
//               className={`w-12 h-12 border border-gray-300 rounded-lg ${color ? '' : 'bg-gray-300'}`}
//               style={{ backgroundColor: color || '#cccccc' }} // Grey if no color
//             ></div>
//             {/* Text Info */}
//             <p className="text-xs font-medium text-gray-700">
//               {color ? `${hue?.name} ${toneLevel}` : 'Select two colors'}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   </div>

//   {/* Side 2: WCAG Info */}
//   <div className="w-1/2">
//     <p className="text-sm font-semibold mb-2 text-green-800">Contrast Ratio based on WCAG:</p>
//     {selectedColors.length === 2 ? (
//       <>
//         <p className="text-sm text-gray-700">{`Contrast Ratio: ${contrastRatio?.toFixed(2)}`}</p>
//         <p
//           className={`text-sm ${
//             contrastRatio && contrastRatio >= 4.5 ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           {contrastRatio && contrastRatio >= 4.5
//             ? "Meets WCAG AA standard"
//             : "Does not meet WCAG AA standard"}
//         </p>
//       </>
//     ) : (
//       <p className="text-sm text-gray-500">
//         Select two colors to check contrast ratio.
//       </p>
//     )}
//   </div>
// </div>



//     </div>
//   );
// };

// export default ColorPreview;

"use client";
import React, { useState } from "react";
import { HiCheck, HiX, HiOutlineMinus } from "react-icons/hi";
import { Badge } from "@/components/ui/badge";


// Function to calculate contrast ratio using WCAG 2.1 formula
const calculateContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\w\w/g)?.map((x) => parseInt(x, 16));
    if (!rgb) return 0;
    const [r, g, b] = rgb;
    const a = [r, g, b].map((val) => {
      val = val / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const ratio = (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
  return ratio;
};

interface ColorData {
  name: string;
  hues: { name: string; colors: string[] }[];
  tones: string[];
}

interface ColorPreviewProps {
  data: ColorData;
}

const ColorPreview: React.FC<ColorPreviewProps> = ({ data }) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleColorSelect = (color: string) => {
    setSelectedColors((prev) => {
      if (prev.length === 2) return [color]; // Keep only 2 colors selected at a time
      return [...prev, color];
    });
  };

  const contrastRatio =
    selectedColors.length === 2
      ? calculateContrastRatio(selectedColors[0], selectedColors[1])
      : null;

  return (
    <div className="flex flex-col items-start w-full">
      {/* Color Shades Grid */}
      {data.tones.map((_, toneIndex) => (
        <div key={toneIndex} className="flex items-center gap-4 relative w-full">
          {/* Hue Colors */}
          <div className="flex gap-1 w-full">
            {data.hues.map((hue) => {
              const color = hue.colors[toneIndex];
              const isSelected = selectedColors.includes(color);

              return (
                <div
                  key={hue.name + toneIndex}
                  className={`cursor-pointer relative ${isSelected ? "rounded-md" : ""}`}
                  style={{
                    backgroundColor: color,
                    width: "35px",
                    height: "35px",
                    transform: isSelected ? "scale(1.2)" : "scale(1)",
                    zIndex: isSelected ? 10 : 1,
                    transition: "transform 0.2s ease, z-index 0.2s ease",
                  }}
                  onClick={() => handleColorSelect(color)}
                >
                  {isSelected && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="selected-box">
                        {selectedColors.indexOf(color) === 0 ? "1" : "2"}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

  


      {/* Result Section 2 */}
      <div className="wcag-container">
      <div className="wcag-sub-container">
          <div className="wcag-title">Selected colors</div>
          <div className="flex flex-col gap-2">
            {[0, 1].map((index) => {
              const color = selectedColors[index];
              const hue = color
                ? data.hues.find((hue) => hue.colors.includes(color))
                : undefined;
              const toneIndex = hue ? hue.colors.indexOf(color) : -1;
              const toneLevel = toneIndex !== -1 ? data.tones[toneIndex] : "Unknown";

              return (
                //RESULT
                <div key={index} className="flex items-center gap-4">
                  {/* Color Preview Box */}
                  <div
                    className="relative w-9 h-9 rounded-lg"
                    style={{ backgroundColor: color || "#cccccc" }}
                  >
                    {/* Circle with 1 or 2 inside */}
                    {color && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="selected-box">
                          {selectedColors.indexOf(color) === 0 ? "1" : "2"}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Text Info */}
                  <div className="wcag-color">
                    {color ? `${hue?.name} ${toneLevel}` : "Select color"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

          {/* Right Side */}
        <div className="wcag-sub-container">
        <div className="wcag-title">Contrast ratio</div>
          {/* Show contrast ratio or dash if not available */}
          <div className="text-sm text-gray-500 font-medium mt-1">
            {contrastRatio ? `${contrastRatio.toFixed(2)}:1` : <HiOutlineMinus/> }
          </div>

          {selectedColors.length === 2 ? (
            <div className="mt-2  gap-2">
              {/* AA Normal Text */}
              <Badge
                variant={contrastRatio && contrastRatio >= 4.5 ? "default" : "destructive"}
              >
                {contrastRatio && contrastRatio >= 4.5 ? (
                  <HiCheck className="text-green-500" />
                ) : (
                  <HiX className="text-red-500" />
                )}
                <span className="text-sm font-medium ml-2">AA Normal text</span>
              </Badge>

              {/* AAA Large Text */}
              <Badge
                variant={contrastRatio && contrastRatio >= 3.0 ? "default" : "destructive"}
              >
                {contrastRatio && contrastRatio >= 3.0 ? (
                  <HiCheck className="text-green-500" />
                ) : (
                  <HiX className="text-red-500" />
                )}
                <span className="text-sm font-medium ml-2">AAA Large text</span>
              </Badge>

              {/* AA Graphical Objects */}
              <Badge
                variant={contrastRatio && contrastRatio >= 3.0 ? "default" : "destructive"}
              >
                {contrastRatio && contrastRatio >= 3.0 ? (
                  <HiCheck className="text-green-500" />
                ) : (
                  <HiX className="text-red-500" />
                )}
                <span className="text-sm font-medium ml-2">AA Graphical object</span>
              </Badge>
            </div>
          ) : (
            // Default view when no colors are selected
            <div className="mt-2 gap-2">
              <Badge
                variant="secondary"
              >
                <HiOutlineMinus className="text-gray-500" />
                <span className="text-sm font-medium ml-2">AA Normal text</span>
              </Badge>
              <Badge
                variant="secondary"
              >
                <HiOutlineMinus className="text-gray-500" />
                <span className="text-sm font-medium ml-2">AAA Large text</span>
              </Badge>

              <Badge
                variant="secondary"
              >
                <HiOutlineMinus className="text-gray-500" />
                <span className="text-sm font-medium ml-2">AA Graphical object</span>
              </Badge>
            </div>
          )}
        </div>

      </div>

    </div>

    
  );
};

export default ColorPreview;
