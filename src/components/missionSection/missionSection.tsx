import React from "react";
import MissionItem from "./missionItem";

const MissionSection = () => {
  return (
    <section id="mission">
      <div className="pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Beyond the Code
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <MissionItem
          header={"Volunteering"}
          text={
            "I'm also committed to giving back to the community, organizing annual donor recruitment events with the National Marrow Donor Program, which has added over 350 potential donors to the blood and bone marrow registry."
          }
          src={"nmdp.jpg"}
          alt={"Be the Match/NMDP Logo"}
        />
      </div>
    </section>
  );
};

export default MissionSection;
