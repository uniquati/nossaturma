import Countdown from '../ciklo/js/modules/Countdown';

const countdown = new Countdown(
  document.querySelector('#regressive'),
  {
    endDate: `08 March 2020 00:00:00 GMT-0300`,
  },
);
countdown.init();


