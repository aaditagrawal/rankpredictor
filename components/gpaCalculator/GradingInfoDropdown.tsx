"use client";

import { classNames } from "@/app/ui.stylex";

import { useState } from "react";

const GradingInfoDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames.HowItWorksDropdown51}>
      <p
        className={classNames.GradingInfoDropdown96}
        onClick={toggleContent}
      >
        How does grading work? {isOpen ? "V" : ">"}
      </p>

      {isOpen && (
        <div className={classNames.GradingInfoDropdown97}>
          <h2 className={classNames.GradingInfoDropdown98}>
            Grading System Overview
          </h2>

          <section className={classNames.GradingInfoDropdown99}>
            <h3 className={classNames.GradingInfoDropdown100}>Grade Point Scale</h3>
            <p className={classNames.GradingInfoDropdown101}>
              The grading system uses a 10-point scale where each letter grade
              corresponds to specific grade points:
            </p>
            <ul className={classNames.HowItWorksDropdown67}>
              <li>A+: 10 points</li>
              <li>A: 9 points</li>
              <li>B: 8 points</li>
              <li>C: 7 points</li>
              <li>D: 6 points</li>
              <li>E: 5 points</li>
              <li>F: 0 points</li>
            </ul>
          </section>

          <section className={classNames.GradingInfoDropdown99}>
            <h3 className={classNames.GradingInfoDropdown100}>GPA Calculation</h3>
            <p className={classNames.GradingInfoDropdown101}>
              Your Grade Point Average (GPA) is calculated using the following
              formula:
            </p>
            <div className={classNames.GradingInfoDropdown102}>
              <span className={classNames.GradingInfoDropdown103}>
                GPA = Σ(Grade Points × Credits) / Σ(Credits)
              </span>
            </div>
            <p className={classNames.home33}>
              Each subject&rsquo;s grade points are multiplied by its credit
              value, then all are summed and divided by the total credits.
            </p>
          </section>

          <section className={classNames.GradingInfoDropdown99}>
            <h3 className={classNames.GradingInfoDropdown100}>Grade Determination</h3>
            <p className={classNames.GradingInfoDropdown101}>
              Professors assign grades based on class average and standard
              deviation. The cutoffs are as follows:
            </p>
            <div className={classNames.GradingInfoDropdown101}>
              <strong>Maximum Cutoffs (when average/std dev is high):</strong>
              <ul className={classNames.GradingInfoDropdown104}>
                <li>A+: 90 marks, A: 82, B: 74, C: 66, D: 58, E: 50</li>
              </ul>
            </div>
            <div className={classNames.GradingInfoDropdown101}>
              <strong>Minimum Cutoffs (when scores are low):</strong>
              <ul className={classNames.GradingInfoDropdown104}>
                <li>A+: 75 marks, A: 67, B: 59, C: 51, D: 43, E: 35</li>
              </ul>
            </div>
            <div className={classNames.GradingInfoDropdown101}>
              <strong>Lab Subjects (always absolute):</strong>
              <ul className={classNames.GradingInfoDropdown104}>
                <li>A+: 90, A: 80, B: 70, C: 60, D: 50, E: 40</li>
              </ul>
            </div>
          </section>

          <section className={classNames.GradingInfoDropdown99}>
            <h3 className={classNames.GradingInfoDropdown100}>Assessment Breakdown</h3>
            <ul className={classNames.HowItWorksDropdown67}>
              <li>End-semester exam: 50 marks</li>
              <li>Mid-semester exam: 30 marks</li>
              <li>Internals: 20 marks</li>
            </ul>
          </section>

          <section className={classNames.GradingInfoDropdown99}>
            <h3 className={classNames.GradingInfoDropdown100}>
              Grade Cutoff Calculator
            </h3>
            <p className={classNames.home33}>
              Use this tool to see grade cutoffs based on average marks and
              standard deviation:
              <a
                href="https://www.desmos.com/calculator/g6mijvx4ct"
                target="_blank"
                rel="noopener noreferrer"
                className={classNames.GradingInfoDropdown105}
              >
                Grade Calculator
              </a>{" "}
              (credit: u/Super382946)
            </p>
          </section>
        </div>
      )}
    </div>
  );
};

export default GradingInfoDropdown;
