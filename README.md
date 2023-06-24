# Project Name

This project performs Load Testing on a dummy application using k6 and JavaScript. There are four different tests: load.js, spike.js, stress.js, and soak.js representing common types of load testing that can be preformed (See below for explanations).

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a recent version of Node.js installed (Recommended v14 or higher).
- You have [k6](https://k6.io/docs/getting-started/installation) installed on your machine.

## Executing Tests

Follow these steps to run the tests:

**Step 1:** Clone the repository to your local machine using git.

**Step 2:** Navigate to the tests directory. You can now run any of the four tests. For instance, to run the load test:

```bash
k6 run load.js
```

Similarly, you can replace `load.js` with `spike.js`, `stress.js`, or `soak.js` to execute the respective tests.

**Step 3:** After your test is complete, k6 will output a summary of your test results in the console. This will give you detailed information on request times, the number of requests made, and how many passed or failed.

### Tests:

- `load.js`: This is the Load Test, which tests the system under an expected load.
- `spike.js`: The Spike Test checks how the system performs under sudden increases and decreases in load.
- `stress.js`: The Stress Test pushes the system beyond its limits and helps identify its breaking point.
- `soak.js`: The Soak Test helps identify system issues that arise over a longer period of high usage.

## Types of Load tests:

### Load Testing

Through load testing, I aim to confirm that the system can meet the required performance standards. This testing approach helps to assess how the system performs when it's dealing with an average number of users or requests.

### Stress Testing

Stress testing allows me to assess the system's stability and reliability under extremely demanding conditions. Some things that we can check include:

- Observe how the system behaves under heavy loads
- Identify the maximum number of users or requests the system can handle
- Determine the system's breaking point
- Verify if the system can recover post-stress without manual intervention

### Soak Testing

Soak testing involves subjecting the system to a high load for an extended period. This test allows me to:

- Detect potential bugs or memory leaks
- Ensure the database's capability to handle prolonged high loads
- Validate the functionality of the logs under high load

### Spike Testing

Spike testing focuses on the system's performance under sudden, extreme increases and decreases in load over a brief period. The primary objective here is to gauge the system's recovery time. This testing approach helps me:

- Understand how the system performs under sudden high-traffic spikes
- Determine if the system can recover following these spikes
