const makeIterable = ({ from, to }) => {
  if (
    typeof from !== "number" ||
    typeof to !== "number" ||
    from === undefined ||
    to === undefined
  ) {
    throw new Error('"from" and "to" must be numbers, cant be undefined');
  }
  if (to < from) {
    throw new Error(' "to" must be greater than "from" ');
  }
  return {
    [Symbol.iterator]() {
      let current = from;
      return {
        next() {
          if (current > to) return { done: true };
          return { value: current++ };
        },
      };
    },
  };
};

const myIterable = { from: 1, to: 4 };

try {
  for (let item of makeIterable(myIterable)) {
    console.log(item);
  }
} catch (error) {
  console.error(error.message);
}

const myIterable2 = { from: "aaa", to: 4 };

try {
  for (let item of makeIterable(myIterable2)) {
    console.log(item);
  }
} catch (error) {
  console.error(error.message);
}

///////////////////////// 2 H/A

function createPersonVariations(name, age) {
  const object1 = { name, age };

  class Person {
    constructor(n, a) {
      this.name = n;
      this.age = a;
    }
  }
  const object3 = new Person(name, age);

  const object2 = Object.assign({}, { name, age });

  return [object1, object2, object3];
}

console.log(createPersonVariations("John", 25));

// i knew some other ways just thought this 3 are most commonly used :p
