import React from "react";

function Heading({size, text, line, lineSize}) {
  const sizes = {
    md: "text-xl",
    lg: "text-3xl",
    xl: "text-5xl",
  };

  const lineSizes = {
    md: "w-[70px]",
    lg: "w-[100px]",
    xl: "w-[150px]",
  };
  size = sizes[size] || sizes.md;
  lineSize = lineSizes[lineSize] || lineSizes.md;

  return (
    <div className="text-center py-2 flex-col flex items-center">
      <h2 className={`${size} font-bold`}>{text}</h2>
      {line && (
        <div
          className={`bg-accent-hover mt-1 ${lineSize} h-1 rounded-full`}
        ></div>
      )}
    </div>
  );
}

export default Heading;
