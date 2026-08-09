import fs from 'fs';
import path from 'path';

function getDbDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    try {
      fs.mkdirSync(dataDir, { recursive: true });
    } catch (e) {}
  }
  return dataDir;
}

export function readData(fileName) {
  try {
    const dataDir = getDbDir();
    const filePath = path.join(dataDir, `${fileName}.json`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading ${fileName}.json:`, error);
    return null;
  }
}

export function writeData(fileName, data) {
  try {
    const dataDir = getDbDir();
    const filePath = path.join(dataDir, `${fileName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error writing ${fileName}.json:`, error);
    return false;
  }
}
