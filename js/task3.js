// # Завдання 3

// Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.

// Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.

const getGreetings = ({ name, age }) => {
    
    if (age >= 18) {
      return `Привіт, ${name}! Вам вже ${age} років.`;
    } else {
      return `Привіт, ${name}! Вам ще ${age} років.`;
    }
  };
  
  
  const user1 = { name: "Anna", age: 20 };
  console.log(getGreetings(user1)); 
  
  const user2 = { name: "Max", age: 14 };
  console.log(getGreetings(user2)); 
  