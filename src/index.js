import Countdown from '../ciklo/js/modules/Countdown';
import Ciklo from '../ciklo/js/modules/Ciklo';

const countdown = new Countdown(
  document.querySelector('#regressive'),
  {
    endDate: '08 March 2020 00:00:00 GMT-0300',
  },
);
countdown.init();

const diasJuntos = new Ciklo({ startDate: '08 March 2010 00:00:00 GMT-0300', endDate: '08 March 2020 00:00:00 GMT-0300' });

document.querySelector('#elapsedDays').innerHTML = ''+diasJuntos.elapsed.days;
// window.onload = function() {
// };
