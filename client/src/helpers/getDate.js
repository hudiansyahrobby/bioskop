const extractDate = (date) => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  date = yyyy + '-' + mm + '-' + dd;
  return date;
};

export function getTodayDate() {
  var today = new Date();
  const todayDate = extractDate(today);
  return todayDate;
}

export function getTomorrowDate() {
  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDate = extractDate(tomorrow);
  return tomorrowDate;
}
