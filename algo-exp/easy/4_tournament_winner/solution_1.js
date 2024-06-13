// O(n) time | O(k) space

// Создаем вне функции константу со значением 1, которая будет указывать что это значение у команды победителя
// Создаем переменную currentBestTeam с пустой строковым значением, в данную переменную будет записываться значение текущей команды победительницы
// Создаем переменную scores - это объект с ключем currentBestTeam и его значением 0, далее мы будем сравнивать с данными этого объекта и нашими результатами, а далее дополняем этот объект
// Запускаем цикл по длинне входящего массива с соревнованиями
// В цикле создаем переменную result, в которую кладем текущее значение из массива results в котором лежат данные кто победил
// С помощью диструкторизации из текущего элемента массива competitions (а это массив с двумя командами) мы получаем переменные домашней и гостевой команды
// Создаем переменную winningTeam , где спомощью тернарного оператора мы сравниваем result с переменной HOME_TEAM_WON и в зависимости от результата выводим нужного победителя
// Далее запускаем функцию с тремя параметрами:
//   Первый параметр это результат из переменной winningTeam
//   Второй параметр это размер очков при победе - 3
//   Третий параметр это объект с резултатами scores
// Далее запускаем проверку - если в scores с ключом winningTeam Значение больше чем в scores с ключом currentBestTeam, то мы меняем значение currentBestTeam на winningTeam, тем самый определяем лидера на данный момент
// После цикла возвращаем currentBestTeam
// Создаем функцию updateScores с тремя параметрами team,points,scores
// Внутри функции запускаем проверку если параметра team нет в объекте scores, то мы его заводим в объект scores с нулевым значением
// Далее мы прибавляем к значению scores[team] очки point


const   HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  let currentBestTeam = '';
  const scores = {[currentBestTeam]: 0};

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if(scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(team, points, scores) {
  if(!(team in scores)) scores[team] = 0;

  scores[team] += points;
}