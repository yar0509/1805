/*
7.
 Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
 */

var styles = ['«Джаз»','«Блюз»'];
styles.push("«Рок-н-ролл»");
styles.shift();
styles.unshift("«Рэп»","«Регги»");
console.log(styles);