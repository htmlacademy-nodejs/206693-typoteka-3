import {Parser} from './Parser.js';
import {FileManager} from './FileManager.js';
import {Generator} from './Generator.js';

export async function generateMocks(publicationNumber, maxIdLength, mocksFilePath) {
  const parser = new Parser();
  const fileManager = new FileManager(parser);
  const generator = new Generator(fileManager, maxIdLength);

  const publications = await generator.generatePublications(publicationNumber);
  await fileManager.writeJsonFile(publications, mocksFilePath);
}

