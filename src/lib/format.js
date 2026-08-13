export const initials = (name) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

export const guestLabel = (count) => `${count} ${count === 1 ? "guest" : "guests"}`;

export const plural = (count, singular, suffix = "s") =>
  `${count} ${count === 1 ? singular : singular + suffix}`;

export const money = (amount) => `$${amount}`;

export const telHref = (phone) => `tel:${phone.replace(/[^+\d]/g, "")}`;

export const mapsHref = (latitude, longitude) =>
  `https://maps.google.com/?q=${latitude},${longitude}`;

export const prettyDate = (isoDate) => {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
};

export const bookingReference = () =>
  `WC-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
