export const sanitizeImage = (image: string) => {
  const parts = image.split('/');
  parts.shift();
  const res = parts.join('/');
  return res;
};
