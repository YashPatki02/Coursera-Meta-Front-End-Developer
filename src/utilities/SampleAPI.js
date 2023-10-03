const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(parseInt(date.split("-")[1]));

  for (let i = 11; i <= 19; i++) {
    if (random() < 0.2) result.push(i + `:00 ${i > 12 ? "PM" : "AM"}`);
    if (random() < 0.2) result.push(i + `:30 ${i > 12 ? "PM" : "AM"}`);
  }

  return result;
};

const submitAPI = (formData) => {
  return true;
};

export { fetchAPI, submitAPI };
