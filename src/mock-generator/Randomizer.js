export class Randomizer {
  static generateInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generateDate() {
    const toDate = new Date();
    const fromDate = new Date().setMonth(toDate.getMonth() - 3);
    const randomDate = new Date(Randomizer.generateInt(fromDate, toDate)).toISOString();

    return `${randomDate.substr(0, 10)} ${randomDate.substr(11, 8)}`;
  }

  static randomizeArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      const randomPosition = Randomizer.generateInt(0, arr.length - 1);
      const tempArr = arr[i];
      arr[i] = arr[randomPosition];
      arr[randomPosition] = tempArr;
    }

    return arr;
  }
}
