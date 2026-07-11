const button = document.getElementById('facts__btn');
const message = document.getElementById('facts__msg');

button.onclick = function() {
  message.innerHTML = "Шифр RSA защищает пароли, основываясь на простых числах.<br><br>" +
  "GPS рассчитывает положение по формуле расстояния.<br><br>" +
  "Правило 72: вклад удвоится за 72 / процентную ставку лет.<br><br>" +
  "Первый алгоритм написала Ада Лавлейс в 1843 году." +
  "<p><i>Все эти факты — о математике, которая работает прямо сейчас, пока вы читаете этот сайт</i><p>";
};