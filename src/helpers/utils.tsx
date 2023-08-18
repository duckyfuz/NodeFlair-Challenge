export function formatTimeAgo(dateTime: Date): string {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - new Date(dateTime).getTime();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diffInMilliseconds < minute) {
    const secondsAgo = Math.floor(diffInMilliseconds / 1000);
    return `about ${secondsAgo} seconds ago`;
  } else if (diffInMilliseconds < hour) {
    const minutesAgo = Math.floor(diffInMilliseconds / minute);
    return `about ${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
  } else if (diffInMilliseconds < day) {
    const hoursAgo = Math.floor(diffInMilliseconds / hour);
    return `about ${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
  } else {
    const daysAgo = Math.floor(diffInMilliseconds / day);
    return `about ${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
  }
}
