import React from "react";
import ThemeTogglerCustom from './ThemeTogglerCustom';
import { Link } from "gatsby";
import { scale } from "../utils/typography";

const Sidebar = ({ title }) => {
  console.log({ title });
  return (
    <div
      className="md:h-screen p-4"
    >
      <ThemeTogglerCustom />
      <h2
        style={{
          ...scale(1),
          marginBottom: 0,
          marginTop: 0,
          fontFamily: `Montserrat, sans-serif`,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2>
    </div>
  );
};

export default Sidebar;
