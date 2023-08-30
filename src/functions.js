export function destructFileName(fileName) {
  const indexPoint = fileName.lastIndexOf('.');
  const [name, format] = [
    fileName.slice(0, indexPoint),
    fileName.slice(indexPoint),
  ];
  return [name, format];
}
