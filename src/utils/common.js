export const isEmpty = (value) => {
  if (!value) {
    return true;
  }
  value = ('' + value).replace(/\r?\n|\r/g, '').replace(' ', '')
  if (value) {
    return false
  }
  return true
}



export const formatSongsDate = (milisecs) => {
  var fulldays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var t = new Date(milisecs);
  var dt = t,
    date = dt.getDate(),
    month = months[dt.getMonth()],
    timeDiff = t - Date.now(),
    diffDays = new Date().getDate() - date,
    diffMonths = new Date().getMonth() - dt.getMonth(),
    diffYears = new Date().getFullYear() - dt.getFullYear();

  if (diffYears === 0 && diffDays === 0 && diffMonths === 0) {
    return "Today";
  } else if (diffYears === 0 && diffDays === 1) {
    return "Yesterday";
  } else if (diffYears === 0 && diffDays === -1) {
    return "Tomorrow";
  } else if (diffYears === 0 && diffDays < -1 && diffDays > -7) {
    return fulldays[dt.getDay()];
  } else if (diffYears >= 1) {
    return month + " " + date + ", " + new Date(milisecs).getFullYear();
  } else {
    return month + " " + date;
  }
};

export const formatDate = (timestamp, format) => {

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let timestamps = Math.round(timestamp)
  const date = new Date(timestamps);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  format = format.replace('yyyy', year);
  format = format.replace('MM', month < 10 ? '0' + month : month);
  format = format.replace('dd', day < 10 ? '0' + day : day);

  let aa = day < 10 ? '0' + day : day + " " + months[month] + " " + year

  return aa;
}
