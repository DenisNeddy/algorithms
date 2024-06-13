// O(n) time | O(n) space

// Создаем новый массив длинной как входящий массив и заполняем  его нулями
// Создаем переменную smallerValueIdx со значением 0, данная переменная нужна для начального элемента входящего массива
// Создаем переменную largerValueIdx со значением длины массива минус один, чтобы найти во входящем массиве последнее число
// Запускаем цикл от длинны массива до нуля(обратный)
// В цикле создаем переменную с минимальным значением из вх массива
// В цикле создаем переменную с максимальным значением из вх массива
// Создаем проверку и проверяем (если абсолютное значение smallerValue больше largerValue), то в sortedSquares массиве меняем элемент с индекслом idx на квадрат smallerValue и увеличиваем smallerValueIdx на один
// Если проверка не true, то в sortedSquares[idx] кладем квадрат largerValue  и увеличиваем largerValueIdx на один

function sortedSquareArray(array) {
  const sortedSquares = new Array(array.length).fill(0);

  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for(let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if(Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--;
    }
  }

  return sortedSquares;
}