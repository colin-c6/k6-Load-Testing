import { sleep } from "k6";
import http from "k6/http";

/**
 * Load test to test the performance of the application with concurrent users
 */
export const options = {
  stages: [
    { duration: "5s", target: 100 },
    { duration: "10s", target: 100 },
    { duration: "5s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(99)<250"],
  },
};

export default function () {
  http.get("https://test.k6.io/contacts.php");
  sleep(1);
}
