export const OCCASIONS = ["Just dinner", "Birthday", "Anniversary", "Business", "Date night"];

export const MAX_GUESTS = 20;

export const EMPTY_DETAILS = { name: "", email: "", phone: "", notes: "" };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PHONE_DIGITS = 7;

export const validateBooking = ({ time, details }) => {
  const errors = {};
  if (!time) errors.time = "Choose a seating time.";
  if (!details.name.trim()) errors.name = "We need a name for the table.";
  if (!EMAIL_PATTERN.test(details.email)) errors.email = "Enter a valid email.";
  if (details.phone.replace(/\D/g, "").length < MIN_PHONE_DIGITS) {
    errors.phone = "Enter a contact number.";
  }
  return errors;
};
