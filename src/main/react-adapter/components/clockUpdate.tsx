import { useEffect } from "react";
import { clockUpdate } from "../../../presentation/helpers/page-interaction/clockUpdate";

export function ClockUpdate() {
  useEffect(() => {
    clockUpdate();
  });

  return <></>;
}
