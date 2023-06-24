import { sleep } from "k6";
import http from "k6/http";

/**
 * Soak test to verify system under long term load.
 */

export const options = {
  stages: [
    { duration: "5m", target: 400 },
    { duration: "3h55m", target: 400 },
    { duration: "5m", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(99)<250"],
  },
};

export default function () {
  http.get("https://test.k6.io/contacts.php");
  sleep(1);
}
