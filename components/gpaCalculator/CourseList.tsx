import { classNames } from "@/app/ui.stylex";
interface CourseListProps {
  isOpen: boolean;
  sendCourse: (course: string) => void;
  selectedCourse?: string | null;
}

const CourseList = ({
  isOpen,
  sendCourse,
  selectedCourse,
}: CourseListProps) => {
  const getClasses = (courseCode: string) =>
    ` ${classNames.CourseList76} ${
      selectedCourse === courseCode ? classNames.CourseList75 : ""
    }`;

  return (
    <div
      className={` ${classNames.CourseList79} ${
        !isOpen
          ? classNames.CourseList77
          : classNames.CourseList78
      }`}
    >
      <div className={classNames.CourseList80}>
        <span onClick={() => sendCourse("CS")} className={getClasses("CS")}>
          CSE
        </span>
        <span onClick={() => sendCourse("AIML")} className={getClasses("AIML")}>
          AIML
        </span>
        <span onClick={() => sendCourse("CCE")} className={getClasses("CCE")}>
          CCE
        </span>
        <span onClick={() => sendCourse("IT")} className={getClasses("IT")}>
          IT
        </span>
        <span onClick={() => sendCourse("DSE")} className={getClasses("DSE")}>
          DSE
        </span>
        <span onClick={() => sendCourse("MNC")} className={getClasses("MNC")}>
          MNC
        </span>
        <span onClick={() => sendCourse("CSFT")} className={getClasses("CSFT")}>
          CSFT
        </span>
        <span onClick={() => sendCourse("ECE")} className={getClasses("ECE")}>
          ECE
        </span>
        <span onClick={() => sendCourse("VLSI")} className={getClasses("VLSI")}>
          VLSI
        </span>
        <span onClick={() => sendCourse("ENI")} className={getClasses("ENI")}>
          ENI
        </span>
        <span onClick={() => sendCourse("EEE")} className={getClasses("EEE")}>
          EEE
        </span>
        <span onClick={() => sendCourse("CPS")} className={getClasses("CPS")}>
          CPS
        </span>
        <span
          onClick={() => sendCourse("BioMed")}
          className={getClasses("BioMed")}
        >
          BioMed
        </span>
        <span
          onClick={() => sendCourse("MechX")}
          className={getClasses("MechX")}
        >
          MechX
        </span>
        <span onClick={() => sendCourse("Mech")} className={getClasses("Mech")}>
          Mech
        </span>
        <span onClick={() => sendCourse("Aero")} className={getClasses("Aero")}>
          Aero
        </span>
        <span onClick={() => sendCourse("Auto")} className={getClasses("Auto")}>
          Auto
        </span>
        <span
          onClick={() => sendCourse("Industrial")}
          className={getClasses("Industrial")}
        >
          Industrial
        </span>
        <span
          onClick={() => sendCourse("Civil")}
          className={getClasses("Civil")}
        >
          Civil
        </span>
        <span
          onClick={() => sendCourse("BioTech")}
          className={getClasses("BioTech")}
        >
          BioTech
        </span>
        <span onClick={() => sendCourse("Chem")} className={getClasses("Chem")}>
          Chem
        </span>
      </div>
    </div>
  );
};

export default CourseList;
