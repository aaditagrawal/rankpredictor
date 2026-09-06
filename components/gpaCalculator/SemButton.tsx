import { classNames } from "@/app/ui.stylex";
import Image from "next/image";

interface SemButtonProps {
  isOpen: boolean;
  selectedSemester?: number | null;
  onClick?: () => void;
}

const SemButton = ({ isOpen, selectedSemester, onClick }: SemButtonProps) => {
  return (
    <button
      className={classNames.SemButton110}
      onClick={onClick}
    >
      <span>
        {selectedSemester ? `Semester ${selectedSemester}` : "Select Semester"}
      </span>
      <span
        id="dropdown-arrow"
        className={` ${classNames.SemButton113} ${
          isOpen ? classNames.SemButton111 : classNames.SemButton112
        }`}
      >
        <Image
          src="/down-arrow-svgrepo-com.svg"
          width="12"
          height="12"
          alt="dropdown arrow"
        />
      </span>
    </button>
  );
};

export default SemButton;
