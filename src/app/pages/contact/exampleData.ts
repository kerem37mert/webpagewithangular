// silinecek

export interface ExampleDataType {
  id: number,
  name: {
    firstName: string,
    lastName: string,
  },
  age: number,

}

export const exampleData: ExampleDataType[]  = [
  {
    id: 5,
    name: {
      firstName: "JohnJohnJohnJohnJohn JohnJohnJohnJohnJohnJohnJohnJohnJohnJohn",
      lastName: "Doe",
    },
    age: 30,
  },
  {
    id: 6,
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    age: 30,
  },
  {
    id: 7,
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    age: 30,
  }
];
