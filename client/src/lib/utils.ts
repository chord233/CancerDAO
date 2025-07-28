import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number | string): string {
  const numAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numAmount);
}

export function formatDate(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDateTime(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - dateObj.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) {
    return `${diffMins} ${diffMins === 1 ? "minute" : "minutes"} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
  } else {
    return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
  }
}

export function getPipelineStageColor(stage: string): string {
  switch (stage) {
    case "lead":
      return "bg-blue-100 text-blue-700";
    case "qualified":
      return "bg-indigo-100 text-indigo-700";
    case "proposal":
      return "bg-amber-100 text-amber-700";
    case "negotiation":
      return "bg-orange-100 text-orange-700";
    case "closed-won":
      return "bg-green-100 text-green-700";
    case "closed-lost":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

export function getPipelineStageIcon(stage: string): string {
  switch (stage) {
    case "lead":
      return "fas fa-user-plus";
    case "qualified":
      return "fas fa-user-check";
    case "proposal":
      return "fas fa-file-contract";
    case "negotiation":
      return "fas fa-handshake";
    case "closed-won":
      return "fas fa-trophy";
    case "closed-lost":
      return "fas fa-times-circle";
    default:
      return "fas fa-circle";
  }
}


