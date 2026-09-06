import { classNames } from "@/app/ui.stylex";
interface HonorsCheckBoxProps {
  isOpen: boolean;
  honors: boolean;
  onHonorsChange: (checked: boolean) => void;
}

const HonorsCheck = ({
  isOpen,
  honors,
  onHonorsChange,
}: HonorsCheckBoxProps) => {
  if (!isOpen) return null;

  return (
    <div className={classNames.HonorsCheck106}>
      <div className={classNames.HonorsCheck107}>
        <input
          id="honors-checkbox"
          type="checkbox"
          checked={honors}
          onChange={(e) => onHonorsChange(e.target.checked)}
          className={classNames.HonorsCheck108}
        />
        <label
          htmlFor="honors-checkbox"
          className={classNames.HonorsCheck109}
        >
          B.Tech Honors Program
        </label>
      </div>
    </div>
  );
};
export default HonorsCheck;
