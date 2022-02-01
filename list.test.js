const orderList = require("./lists");

test("Testando se o array [8, 5, 10, 5, 2, 4, 4, 3] vai retornar [2, 3, 4, 5, 8, 10].", () => {
  expect(orderList([8, 5, 10, 5, 2, 4, 4, 3])).toStrictEqual([
    2, 3, 4, 5, 8, 10,
  ]);
});

test("Testando se o array [2,8,2,3,9,1] vai retornar [1,2,3,8,9].", () => {
  expect(orderList([2, 8, 2, 3, 9, 1])).toStrictEqual([1, 2, 3, 8, 9]);
});

test("Testando se o array [81,20,29,1,3,4,29,81,99,100] vai retornar [1,3,4,20,29,81,99,100].", () => {
  expect(orderList([81, 20, 29, 1, 3, 4, 29, 81, 99, 100])).toStrictEqual([
    1, 3, 4, 20, 29, 81, 99, 100,
  ]);
});

test("Testando se o array [-10,15,30,-5,3,1,-10,15,-5] vai retornar [-10,-5,1,3,15,30].", () => {
  expect(orderList([-10, 15, 30, -5, 3, 1, -10, 15, -5])).toStrictEqual([
    -10, -5, 1, 3, 15, 30,
  ]);
});
