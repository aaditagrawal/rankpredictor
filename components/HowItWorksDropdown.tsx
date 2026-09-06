import { classNames } from "@/app/ui.stylex";
import { useState } from "react";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import METChart from "./METChart";

const HowItWorksDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames.HowItWorksDropdown51}>
      <p
        className={classNames.HowItWorksDropdown52}
        onClick={toggleContent}
      >
        How does this work? {isOpen ? "V" : ">"}
      </p>

      {isOpen && (
        <div className={classNames.HowItWorksDropdown53}>
          <p className={classNames.HowItWorksDropdown54}>
            In MET 2025, both entrance exam scores and board exam results are
            considered. To account for varying difficulty levels across
            different boards, board percentages are normalized into band scores
            from 0 to 10. This creates a &ldquo;fair&rdquo; system where your
            final score combines your MET performance with your standardized
            board exam band. Here&rsquo;s how board percentages are converted to
            bands:
          </p>

          <ul className={classNames.HowItWorksDropdown55}>
            <li>95-100%: Band 10</li>
            <li>90-94.99%: Band 9</li>
            <li>85-89.99%: Band 8</li>
            <li>80-84.99%: Band 7</li>
            <li>...</li>
            <li>50-54.99%: Band 1</li>
            <li>Below 50%: Not qualified for MET</li>
          </ul>

          <p className={classNames.HowItWorksDropdown54}>
            Your final band score is calculated using the following formula:
          </p>

          <div className={classNames.HowItWorksDropdown56}>
            <BlockMath math="\frac{\left( \frac{M}{240} \times 100 \right) + \left( \frac{B}{10} \times 100 \right)}{2}" />
          </div>

          <p className={classNames.HowItWorksDropdown54}>
            Where M is your MET score (out of 240), and B is your board band
            (0-10).
            <br />
            The data used in this predictor has been compiled by polling
            students across various MET campuses, with careful verification to
            ensure accuracy.
          </p>

          <p className={classNames.HowItWorksDropdown54}>
            Using a mathematical concept called{" "}
            <a
              href="https://www.youtube.com/watch?v=MnEa_xHm1j8"
              className={classNames.HowItWorksDropdown57}
              target="_blank"
              rel="noopener noreferrer"
            >
              polynomial regression
            </a>
            , we can find the ranks for values of various band scores.
          </p>

          <div className={classNames.HowItWorksDropdown58}>
            <h3 className={classNames.HowItWorksDropdown59}>
              FAQs for the Rank Predictor
            </h3>
            <div className={classNames.HowItWorksDropdown60}>
              <div>
                <p className={classNames.HowItWorksDropdown61}>
                  Q: How accurate is it?
                </p>
                <p className={classNames.HowItWorksDropdown62}>
                  <span className={classNames.HowItWorksDropdown63}>A:</span> The predictions are
                  based on last year&rsquo;s data. So, if someone got the same
                  MET marks and board percentage as you last year, they
                  would&rsquo;ve received the same predicted rank.
                </p>
                <ul className={classNames.HowItWorksDropdown64}>
                  <li>
                    For the MET 2025 Rank Predictor, Due to merging of the CS branches and other factors
                    the average error was{" "}
                    <span className={classNames.HowItWorksDropdown65}>+25%</span>{" "}
                    (meaning the predictor showed a lower rank than people
                    actually got).
                  </li>
                </ul>
                <p className={classNames.HowItWorksDropdown66}>
                  Possible sources of inaccuracy:
                </p>
                <ul className={classNames.HowItWorksDropdown67}>
                  <li>
                    If the difficulty of the MET paper changes significantly
                    compared to last year.
                  </li>
                  <li>
                    If the number of students writing MET increases or decreases
                    a lot this year.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <METChart />

        </div>

      )}

    </div>
  );
};

export default HowItWorksDropdown;
