import { FaRegFilePdf, FaRegMap, FaRegCalendarCheck } from "react-icons/fa";
import { CiDumbbell } from "react-icons/ci";
import { LuBrain } from "react-icons/lu";
import './RequirementIcon.scss';

const iconMap = {
  age: FaRegCalendarCheck,
  location: FaRegMap,
  documents: FaRegFilePdf,
  fitness: CiDumbbell,
  mental: LuBrain,
};

const RequirementIcon = ({ type }) => {

  const Icon = iconMap[type];

  return (
    <div className='iconWrapper'>
      {Icon ? <Icon /> : null}
    </div>
  );
};

export default RequirementIcon;
