import Timeline from "./TimeLine";
import {  EduData, JobData, VolData } from "../../constants/aboutData";

const TimeLineTitle = () => {
  return (
    <div className="mt-3 ml-3">
      <Timeline EduData={EduData} />
      <Timeline EduData={JobData} />
      <Timeline EduData={VolData} />
    </div>
  );
};

export default TimeLineTitle;
