import { sleep } from "k6";
import http from "k6/http";

/**
 * Spike test to validate how the system responds to sudden changes in load.
 */

export const options = {
  stages: [
    { duration: "10s", target: 100 },
    { duration: "1m", target: 100 },
    { duration: "10s", target: 1400 },
    { duration: "3m", target: 1400 },
    { duration: "10s", target: 100 },
    { duration: "3m", target: 100 },
    { duration: "10s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(99)<250"],
  },
};

export default function () {
  http.get("https://test.k6.io/contacts.php");
  sleep(1);
}
