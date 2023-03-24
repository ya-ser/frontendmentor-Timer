const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minElement = document.querySelector('#min');
const secElement = document.querySelector('#sec');

// Set the target countdown time
const countdownTime = new Date('April 15, 2023 14:22:43');

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const currentTime = new Date();
  const remainingTime = countdownTime.getTime() - currentTime.getTime();

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const millisecondsPerHour = 1000 * 60 * 60;
  const millisecondsPerMinute = 1000 * 60;

  // Calculate remaining days
  const remainingDays = Math.floor(remainingTime / millisecondsPerDay);
  daysElement.innerText = `${remainingDays < 10 ? '0' : ''}${remainingDays}`;

  // Calculate remaining hours
  const remainingHours = Math.floor((remainingTime % millisecondsPerDay) / millisecondsPerHour);
  hoursElement.innerText = `${remainingHours < 10 ? '0' : ''}${remainingHours}`;

  // Calculate remaining minutes
  const remainingMinutes = Math.floor((remainingTime % millisecondsPerHour) / millisecondsPerMinute);
  minElement.innerText = `${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}`;

  // Calculate remaining seconds
  const remainingSeconds = Math.floor((remainingTime % millisecondsPerMinute) / 1000);
  secElement.innerText = `${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}, 1000);
