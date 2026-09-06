import { classNames } from "@/app/ui.stylex";
import { useState } from "react";

interface Branch {
  name: string;
  cutoff: number;
}

interface AttainableBranch {
  college: string;
  branches: Branch[];
}

interface BranchesDisplayProps {
  attainableBranches: AttainableBranch[];
}

const BranchesDisplay = ({ attainableBranches }: BranchesDisplayProps) => {
  const [hiddenColleges, setHiddenColleges] = useState<Set<string>>(new Set());

  const toggleCollege = (college: string) => {
    const newHiddenColleges = new Set(hiddenColleges);
    if (newHiddenColleges.has(college)) {
      newHiddenColleges.delete(college);
    } else {
      newHiddenColleges.add(college);
    }
    setHiddenColleges(newHiddenColleges);
  };

  if (attainableBranches.length === 0) {
    return (
      <div className={classNames.BranchesDisplay37}>
        <p className={classNames.BranchesDisplay38}>
          No branches available at your predicted rank. Better luck next time!
        </p>
      </div>
    );
  }

  return (
    <section className={classNames.BranchesDisplay39}>
      <div className={classNames.BranchesDisplay40}>
        <h2 className={classNames.BranchesDisplay41}>
          Attainable Branches
        </h2>
      </div>

      {attainableBranches.map((collegeData) => (
        <div
          key={collegeData.college}
          className={classNames.BranchesDisplay42}
        >
          {collegeData.branches.length > 0 && (
            <>
              <button
                onClick={() => toggleCollege(collegeData.college)}
                aria-expanded={!hiddenColleges.has(collegeData.college)}
                aria-controls={`branches-${collegeData.college.replace(/\s+/g, "-").toLowerCase()}`}
                className={classNames.BranchesDisplay43}
              >
                <span className={classNames.BranchesDisplay44}>
                  {collegeData.college}
                </span>
                <span className={classNames.BranchesDisplay45}>
                  {collegeData.branches.length} branches
                </span>
              </button>

              {!hiddenColleges.has(collegeData.college) && (
                <div
                  id={`branches-${collegeData.college.replace(/\s+/g, "-").toLowerCase()}`}
                  className={classNames.BranchesDisplay46}
                >
                  <ul className={classNames.BranchesDisplay47}>
                    {collegeData.branches.map((branch, index) => (
                      <li
                        key={index}
                        className={classNames.BranchesDisplay48}
                      >
                        <span className={classNames.BranchesDisplay49}>
                          {branch.name}
                        </span>
                        <span className={classNames.BranchesDisplay50}>
                          {branch.cutoff}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default BranchesDisplay;
