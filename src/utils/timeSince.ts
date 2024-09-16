export function timeSince(date: any) {
  const now = new Date();
  const postDate = new Date(date);
  const seconds = Math.floor((Number(now) - Number(postDate)) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    return interval === 1
      ? "Há " + interval + "ano"
      : "Há " + interval + " anos";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval === 1
      ? "Há " + interval + " mês"
      : "Há " + interval + " meses";
  }

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval === 1
      ? "Há " + interval + " dia"
      : "Há " + interval + " dias";
  }

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval === 1
      ? "Há " + interval + " hora"
      : "Há " + interval + " horas";
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval === 1
      ? "Há " + interval + " minuto"
      : "Há " + interval + " minutos";
  }

  return "Agora";
}
