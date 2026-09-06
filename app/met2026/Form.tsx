"use client";

import { classNames } from "@/app/ui.stylex";

import { useState } from "react";
import { predictMETRank, PredictionResult } from "../../utils/metPrediction";
import BranchesDisplay from "../../components/BranchesDisplay";

interface FormProp {
  sendBoards: (marks: number | null) => void;
  sendMET: (marks: number | null) => void;
}

const Form = ({ sendBoards, sendMET }: FormProp) => {
  const [boardPercentage, setBoardPercentage] = useState<number | null>(null);
  const [metMarks, setMetMarks] = useState<number | null>(null);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleBoardChange = (value: number | null) => {
    setBoardPercentage(value);
    sendBoards(value);
    // Clear previous prediction when inputs change
    if (prediction) setPrediction(null);
    if (error) setError("");
  };

  const handleMetChange = (value: number | null) => {
    setMetMarks(value);
    sendMET(value);
    // Clear previous prediction when inputs change
    if (prediction) setPrediction(null);
    if (error) setError("");
  };

  const handlePredict = async () => {
    if (boardPercentage === null || metMarks === null) {
      setError("Please enter both board percentage and MET marks.");
      return;
    }

    if (boardPercentage < 0 || boardPercentage > 100) {
      setError("Board percentage must be between 0 and 100.");
      return;
    }

    // technically people can score negative marks in MET so ...
    if (metMarks < 0 || metMarks > 240) {
      setError("MET marks must be between 0 and 240.");
      return;
    }
        if (metMarks === 0 && boardPercentage === 50) {
      setError("😭😭😭😭son😭😭😭😭😭😭😭😭😭😭I'm crine😭😭😭😭😭😭");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const result = predictMETRank(boardPercentage, metMarks);
      setPrediction(result);

      // Non-blocking concurrent call to log user input
      fetch("/api/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          boardPercentage,
          metMarks,
        }),
      }).catch((err) => {
        // Log locally if it fails, but don't show the user.
        console.error("Submission failed:", err);
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during prediction.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classNames.Form4}>
      <div className={classNames.Form5}>
        <h1 className={classNames.Form6}>
          MET 2026 Rank Predictor
        </h1>
        <p className={classNames.Form7}>
          Enter your scores to estimate your rank and view likely branches.
        </p>

        <div className={classNames.Form8}>
          <div>
            <label
              htmlFor="boardPercentage"
              className={classNames.Form9}
            >
              Board Percentage
            </label>
            <input
              type="number"
              id="boardPercentage"
              name="boardPercentage"
              autoComplete="off"
              inputMode="decimal"
              min="0"
              max="100"
              step="0.01"
              value={boardPercentage ?? ""}
              onChange={(e) => {
                const val = e.target.value;
                handleBoardChange(val === "" ? null : Number(val));
              }}
              className={classNames.Form10}
            />
          </div>

          <div>
            <label
              htmlFor="metMarks"
              className={classNames.Form9}
            >
              MET Marks (out of 240)
            </label>
            <input
              type="number"
              id="metMarks"
              name="metMarks"
              autoComplete="off"
              inputMode="numeric"
              min="0"
              max="240"
              value={metMarks ?? ""}
              onChange={(e) => {
                const val = e.target.value;
                handleMetChange(val === "" ? null : Number(val));
              }}
              className={classNames.Form10}
            />
          </div>
        </div>

        <button
          onClick={handlePredict}
          disabled={isLoading || boardPercentage === null || metMarks === null}
          className={classNames.Form11}
        >
          {isLoading ? "Predicting..." : "Predict Rank"}
        </button>

        {error && (
          <div className={classNames.Form12}>
            {error}
          </div>
        )}

        {prediction && (
          <div className={classNames.Form13}>
            <div className={classNames.Form14}>
              <p className={classNames.Form15}>
                Your rank according to last year:
                <span className={classNames.Form16}>
                  {prediction.predictedRank}
                </span>
              </p>
              <p className={classNames.Form17}>
                Note: CPS, Biomedical, VLSI will be merged into EEE for 2026.
              </p>
            </div>

            <BranchesDisplay
              attainableBranches={prediction.attainableBranches}
            />
          </div>
        )}
      </div>
                <p className={classNames.Form18}>
                  Special thanks to <a href="https://pranavu.dev/" target="_blank" rel="noopener noreferrer" className={classNames.Form19}>Pranav U</a> for processing and cleaning the data, and for their help in building the predictor!
                </p>
    </div>
  );
};

export default Form;
