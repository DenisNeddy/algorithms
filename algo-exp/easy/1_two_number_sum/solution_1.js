// O(n^2) time | O(1) space

// Принцип цикл в цикле. В первом цикле создаем первый элемент, вовтором второй элемент.
// Сравниваем (сумму первого и второго элемента с таргетом) все числа из внутреннего цикла с первым
// элементом внешнего цикла, если не находим , то передвигаем первый элемент внешнего цикла и т.д..
// Если совподение, то вовзращаем массив из двух чисел, если нет то пустой массив

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if(firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }

  return [];
}