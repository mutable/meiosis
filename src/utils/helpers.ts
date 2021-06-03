export function statusToColor(status: string) {
  if (!status)
    return "blue";
    
  switch (status.toLowerCase()) {
    case "":
    case "active":
    case "normal":
    case "running":
      return "green";
    case "critical":
      return "red";
    default:
      return "blue";
  }
}