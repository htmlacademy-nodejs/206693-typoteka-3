export class Parser {
  parseData(source) {
    return source
      .split(`\n`)
      .map(line => line.trim())
      .filter(line => line.length !== 0);
  }
}
