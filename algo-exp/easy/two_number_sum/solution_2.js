// O(n) time | O(n) space

// Создаем хранилище для чисел, которые получаются от разницы числа из массива и таргета.
// Принцип такой, мы вычитаем из таргета элемент массива и проверяем, есть ли разница в объекте,
// если есть, то мы возвращаем данную разнизу и элемент массива в другом массиве, если такого числа нет,
// то мы добавляем элемент массива в объект хранилище.


function twoNumberSum(array, targetSum) {
  const nums = {};

  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num]
    } else {
      nums[num] = true;
    }
  }

  return [];
}


