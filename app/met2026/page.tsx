"use client";

import { classNames } from "@/app/ui.stylex";

import { useEffect, useState } from "react";
import HowItWorksDropdown from "../../components/HowItWorksDropdown";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Form from "./Form";

const MET2026 = () => {
  const DISCLAIMER_COOKIE = "met2026-disclaimer-seen";
  const ONE_WEEK_SECONDS = 60 * 60 * 24 * 7;
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  const hasSeenDisclaimer = () =>
    document.cookie
      .split("; ")
      .some((cookie) => cookie.startsWith(`${DISCLAIMER_COOKIE}=true`));

  const setDisclaimerCookie = () => {
    document.cookie = `${DISCLAIMER_COOKIE}=true; Max-Age=${ONE_WEEK_SECONDS}; Path=/; SameSite=Lax`;
  };

  useEffect(() => {
    if (!hasSeenDisclaimer()) {
      setIsDisclaimerOpen(true);
    }
  }, []);

  const handleDisclaimerClose = () => {
    setDisclaimerCookie();
    setIsDisclaimerOpen(false);
  };

  return (
    <>
      <Dialog
        open={isDisclaimerOpen}
        onOpenChange={(open) => {
          if (!open) {
            setDisclaimerCookie();
          }
          setIsDisclaimerOpen(open);
        }}
      >
        <DialogContent
          showCloseButton={false}
          className={classNames.met20}
        >
          <DialogHeader>
            <DialogTitle className={classNames.met21}>
              Prediction Disclaimer
            </DialogTitle>
            <DialogDescription className={classNames.met22}>
              <span className={classNames.met23}>
                This tool provides an estimated rank based on previous data and
                trends. It is only a prediction and cannot be 100% accurate.
              </span>
              <span className={classNames.met23}>
                Final outcomes can differ due to changes in exam difficulty,
                normalization, cutoffs, and counseling decisions.
              </span>
              <span className={classNames.met24}>
                By continuing, you acknowledge this is informational only, and
                I am not liable for decisions made based on this prediction.
              </span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={handleDisclaimerClose}
              className={classNames.met25}
            >
              I Understand, Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className={classNames.met26}>
        <div className={classNames.met27}>
          <Card className={classNames.met28}>
            <CardContent className={classNames.met29}>
              <HowItWorksDropdown />
              <Form sendBoards={() => {}} sendMET={() => {}} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MET2026;
