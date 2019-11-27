import React from "react";

import NavMain from "../components/NavMain";
import HeroUnit from "../components/HeroUnit";
import Map from "../components/Map";

export const LandingPage = () => {
  return (
    <React.Fragment>
      <NavMain>
        <HeroUnit />
        <Map />
      </NavMain>
    </React.Fragment>
  );
};

export default LandingPage;
