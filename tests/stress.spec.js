import { sleep } from "k6";
import http from "k6/http";

/**
 * Stress test to verify stability and reliability of the application
 * under extreme load.
 */

export const options = {
  stages: [
    { duration: "2m", target: 100 },
    { duration: "5m", target: 100 },
    { duration: "2m", target: 200 },
    { duration: "5m", target: 200 },
    { duration: "2m", target: 300 },
    { duration: "5m", target: 300 },
    { duration: "2m", target: 400 },
    { duration: "5m", target: 400 },
    { duration: "10m", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(99)<250"],
  },
};

export default function () {
  http.get("https://test.k6.io/contacts.php");
  sleep(1);
}
