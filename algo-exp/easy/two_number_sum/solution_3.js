// O(nlog(n)) time | O(1) space

// Сортируем входящий массив, устанавливаем начальный элемент и конечный,
// далее в цикле while условием которого пока начальное меньше конечного,
// далее в цикле определяем текущее значение суммы начального числа и конечного,
// сравниваем его с таргетом, если равно, то возвращаем массив из начального и конечного,
// если оно меньше, то увеличиваем начальное число, если больше таргета,
// то уменьшаем конечное число, тем самым двигаясь по массиву

function twoNumberSum(array, targetSum) {
  array.sort((a,b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right];
    if(currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if( currentSum > targetSum) {
      right--;
    }
  }

  return [];
}