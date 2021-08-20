// ? Task:Напиши функцию getProductId, которая принимает строку представляющую URL-адрес страницы этого продукта в вашем интернет-магазине и возвращает идентификатор продукта из строки.

// Все URL-адреса имеют одинаковый формат: сначала домен exampleshop.com, затем название продукта, разделенное тире (-), затем буква p, обозначающая начало идентификатора продукта, затем фактический идентификатор, (без ограничения по длине), и, наконец, 8-значное представление даты добавления продукта, за которой следует .html.

//   Примеры:
// exampleshop.com/fancy-coffee-cup-p-90764-12052019.html >> productID is 90764

// exampleshop.com/dry-water-just-add-water-to-get-water-p-147-24122017.html >> productID is 147

// exampleshop.com/public-toilet-proximity-radar-p-942312798-01012020.html >> productID is 942312798


// Примечания:

// Название продукта также может содержать букву p или цифры.
// Ваш код должен возвращать идентификатор продукта в виде строки.
// Напиши функцию splitString, которая принимает строку и возвращает массив строк из двух символов. Если строка содержит нечетное количество символов, тогда второй символ нужно заменить на подчеркивание ("_").

// Пример:

// splitString('abc') === ['ab', 'c_']
// splitString('abcdef') === ['ab', 'cd', 'ef']


// Solution 1


function splitString(str) {
  const resArr = [];
  let nStr = "";
  let i = 0;
  let arrStr = [];

  str.length % 2
    ? nStr = `${str}_`
    : nStr = str;
  arrStr = nStr.split('');
  for (let j = 0; j < arrStr.length / 2; j++) {
    resArr[j] = arrStr[i] + arrStr[i + 1];
    i += 2;
    
  }

return resArr;
}

console.log(splitString('abcde'));
console.log(splitString('abcdef'));
// ! Explanation: 
