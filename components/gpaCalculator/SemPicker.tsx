import { classNames } from "@/app/ui.stylex";
interface SemSelector {
  isOpen: boolean;
  sendSemester: (sem: number) => void;
  selectedSemester?: number | null;
}

const SemPicker = ({ isOpen, sendSemester, selectedSemester }: SemSelector) => {
  const getClasses = (semNum: number) =>
    ` ${classNames.SemPicker114} ${
      selectedSemester === semNum ? classNames.CourseList75 : ""
    }`;

  return (
    <div
      id="semester"
      className={`${
        isOpen
          ? classNames.SemPicker115
          : classNames.SemPicker116
      } ${classNames.SemPicker117} `}
    >
      <div className={classNames.SemPicker118}>
        <span onClick={() => sendSemester(1)} className={getClasses(1)}>
          I
        </span>
        <div onClick={() => sendSemester(2)} className={getClasses(2)}>
          II
        </div>
        <div onClick={() => sendSemester(3)} className={getClasses(3)}>
          III
        </div>
        <div onClick={() => sendSemester(4)} className={getClasses(4)}>
          IV
        </div>
        <div onClick={() => sendSemester(5)} className={getClasses(5)}>
          V
        </div>
        <div onClick={() => sendSemester(6)} className={getClasses(6)}>
          VI
        </div>
        <div onClick={() => sendSemester(7)} className={getClasses(7)}>
          VII
        </div>
        <div onClick={() => sendSemester(8)} className={getClasses(8)}>
          VIII
        </div>
      </div>
    </div>
  );
};

export default SemPicker;
