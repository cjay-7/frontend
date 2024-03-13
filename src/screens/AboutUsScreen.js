import React from "react";
import OurStory from "../components/screens/AboutUs/OurStory";
import OurManagement from "../components/screens/AboutUs/OurManagement";
import WhyRuia from "../components/screens/AboutUs/WhyRuia";
import ExportLocations from "../components/screens/AboutUs/ExportLocations";

export default function AboutUsScreen() {
  return (
    <div>
      <OurStory />
      <OurManagement />
      <WhyRuia />
      <ExportLocations />
    </div>
  );
}
