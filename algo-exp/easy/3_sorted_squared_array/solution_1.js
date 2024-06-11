// O(nlogn) time | O(n) space

// Создаем новый массив длинной как массив входящий, заполняем его нулевыми значениями
// Создаем переменную меньшее значения индекс(smallerValueIdx) с нулевым значением
// Создаем переменную большее значение индекс(largerValueIdx) значение длина минус один
// Запускаем цикл for обратный(от длинны до нуля)
// Создаем переменную smallerValue - это элемент массива array с индексом smallerValueIdx
// Создаем переменную largerValue - это элемент массива array с индексом largerValueIdx
// Делаем проверку если абсолютное значение(без знака минус) smallerValue больше абсолютного значения largerValue
// То элемент массива sortedSquares  с индексом idx равно квадрату smallerValue и увеличиваем smallerValueIdx на один,
// если меньше то, sortedSquares  с индексом idx равно квадрату largerValue и уменьшаем индекс largerValueIdx;


function sortedSquaredArray(array) {
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