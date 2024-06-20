// Создайте пустой массив для хранения товаров в корзине
const cart = [];

// Функция для добавления товара в корзину
function addToCart(item) {
  // Проверьте, есть ли товар уже в корзине
  const existingItem = cart.find((i) => i.id === item.id);
  if (existingItem) {
    // Если товар уже в корзине, увеличьте его количество
    existingItem.quantity++;
  } else {
    // Если товар не в корзине, добавьте его с количеством 1
    cart.push({ ...item, quantity: 1 });
  }
}

// Функция для удаления товара из корзины
function removeFromCart(item) {
  // Найдите индекс товара в корзине
  const index = cart.findIndex((i) => i.id === item.id);
  if (index !== -1) {
    // Если товар найден
    // Удалите его из корзины
    cart.splice(index, 1);
  }
}

// Функция для обновления количества товара в корзине
function updateQuantity(item, quantity) {
  // Найдите индекс товара в корзине
  const index = cart.findIndex((i) => i.id === item.id);
  if (index !== -1) {
    // Если товар найден
    // Обновите его количество
    cart[index].quantity = quantity;
  }
}

// Пример использования
const item1 = { id: 1, name: 'Product 1' };
const item2 = { id: 2, name: 'Product 2' };

addToCart(item1);
addToCart(item2);

console.log(cart); // Вывод: [{ id: 1, name: 'Product 1', quantity: 1 }, { id: 2, name: 'Product 2', quantity: 1 }]

removeFromCart(item1);

console.log(cart); // Вывод: [{ id: 2, name: 'Product 2', quantity: 1 }]

updateQuantity(item2, 3);

console.log(cart); // Вывод: [{ id: 2, name: 'Product 2', quantity: 3 }]
