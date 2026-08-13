export const SERVICE_FEE_RATE = 0.05;

export const estimateBill = (perHead, guests) => {
  const subtotal = perHead * guests;
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);
  return { subtotal, serviceFee, total: subtotal + serviceFee };
};
