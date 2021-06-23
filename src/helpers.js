
export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  console.log(time);
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}



