import { classNames } from "@/app/ui.stylex";
interface CycleSelectProps {
  isOpen: boolean;
  sendCycle: (cycle: number) => void;
  selectedCycle?: number | null;
}

const CycleSelect = ({
  isOpen,
  sendCycle,
  selectedCycle,
}: CycleSelectProps) => {
  const getClasses = (cycleNum: number) =>
    ` ${classNames.CycleSelect81} ${
      selectedCycle === cycleNum ? classNames.CourseList75 : ""
    }`;

  return (
    <div
      className={` ${classNames.CycleSelect84} ${
        isOpen
          ? classNames.CycleSelect82
          : classNames.CycleSelect83
      }`}
    >
      <div className={classNames.CycleSelect85}>
        <div
          onClick={() => sendCycle(0)} // Physics Cycle = 0
          className={getClasses(0)}
        >
          Physics Cycle
        </div>
        <div
          onClick={() => sendCycle(1)} // Chem Cycle = 1
          className={getClasses(1)}
        >
          Chemistry Cycle
        </div>
      </div>
    </div>
  );
};

export default CycleSelect;
