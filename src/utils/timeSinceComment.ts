export function timeSinceComment(date: any) {
  const now = new Date();
  const postDate = new Date(date);
  const seconds = Math.floor((Number(now) - Number(postDate)) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return interval === 1 ? interval + "ano" : interval + " anos";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + " m";
  }

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + " d";
  }

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + " h";
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + " min";
  }

  return "Agora";
}
