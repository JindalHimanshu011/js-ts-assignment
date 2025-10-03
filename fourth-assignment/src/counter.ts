export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function variableHandelling() {
  let userName: string = "Jon";

  let message: string = `my name is ${userName}`;

  let price: number = 10;
  let newPrice = price;

  let isUpdate: boolean = true;
  if (isUpdate)
    message = "my name is empty";

  let optionalName: any = "Rohan";
  optionalName = 54;
  optionalName = newPrice;

  let unknownName: unknown;
  unknownName = 54;
  unknownName = true;

  //console.log(unknownName.toUpperCase());
  if (typeof unknownName === "string")
    console.log(unknownName.toUpperCase());

  let arr: number[] = [1, 2, 3, 4];

  let aar2: (string | number)[] = [1, 'a', 2, 'b'];

  function getName(name: string): string {
    return "";
  }

  let getUser: (name: string) => string = (name) => {
    return "";
  };

  //inline object
  let user: { name: string; address: string; userId: number } = {
    name: 'Himanshu',
    address: 'Jaipur',
    userId: 12
  }

  let optionalUser: { name: string; address: string; userId?: number } = {
    name: 'Himanshu',
    address: 'Jaipur'
  }
  let optionalUserNew = {
    name: 'Himanshu',
    address: 'Jaipur',
    mobile: 321
  }


  //Type and interface are mostly same
  type product = {
    name: string;
    category: string
  }

  let car: product = {
    name: 'skoda',
    category: '4 weeler'
  }

  interface pen {
    name: string;
    color: string
  }

  let pen1: pen = {
    name: 'cello',
    color: 'red'
  }

  //Type Inference
  let flatType = "2BHK";

  //Type Alias
  type User = { name: string; }
}