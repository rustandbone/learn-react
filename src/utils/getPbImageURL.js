export const getPbImageURL = (item, fileName = 'photo') =>
  `http://127.0.0.1:3000/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
