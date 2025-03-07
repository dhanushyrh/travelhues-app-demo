import { toast } from "react-toastify";

// Define types for error logs
interface ErrorLog {
  message: string;
  stack?: string;
  timestamp: string;
}

// Function to log errors
export function logError(error: any, context: string = "Unknown") {
  const errorLog: ErrorLog = {
    message: error?.message || "Unknown error",
    stack: error?.stack || undefined,
    timestamp: new Date().toISOString(),
  };

  console.error(`[${context}]`, errorLog);
  toast.error(`[${context}] ${error?.message || "An error occurred"}`);
  // Store recent errors in localStorage (for debugging)
  const storedErrors = JSON.parse(localStorage.getItem("errorLogs") || "[]");
  storedErrors.push(errorLog);
  if (storedErrors.length > 10) storedErrors.shift(); // Keep only last 10 errors
  localStorage.setItem("errorLogs", JSON.stringify(storedErrors));

  // Send to external logging service (e.g., Sentry)
  sendErrorToExternalService(errorLog, context);
}

// Function to send error logs to an external service
function sendErrorToExternalService(error: ErrorLog, context: string) {
  // Replace with actual service integration (e.g., Sentry, LogRocket, Datadog)
  console.log(`[Sending to external service]: ${context}`, error);
  // Example: Sentry.captureException(error);
}
