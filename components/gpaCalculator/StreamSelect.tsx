import { classNames } from "@/app/ui.stylex";
interface StreamSelectProps {
  isOpen: boolean;
  sendStream: (stream: string) => void;
  selectedStream?: string | null;
}

const StreamSelect = ({
  isOpen,
  sendStream,
  selectedStream,
}: StreamSelectProps) => {
  const getClasses = (streamType: string) =>
    ` ${classNames.CycleSelect81} ${
      selectedStream === streamType ? classNames.CourseList75 : ""
    }`;

  return (
    <div
      className={` ${classNames.CycleSelect84} ${
        !isOpen
          ? classNames.StreamSelect119
          : classNames.StreamSelect120
      }`}
    >
      <div className={classNames.CycleSelect85}>
        <div onClick={() => sendStream("CS")} className={getClasses("CS")}>
          CS Stream
        </div>
        <div
          onClick={() => sendStream("NONCS")}
          className={getClasses("NONCS")}
        >
          Non-CS Stream
        </div>
      </div>
    </div>
  );
};

export default StreamSelect;
