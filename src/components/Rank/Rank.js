import React from "react";

const Rank = ({name, entries}) => {
  return (
    <div>
      <div className="display-4 text-center mt-3">
        {`Hi ${name}, your current entry count is...`}
      </div>
      <div
        className="display-3
       text-center"
      >
        {entries}
      </div>
    </div>
  );
};

export default Rank;
