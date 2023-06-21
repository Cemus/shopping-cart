export function getUrl(image, extension) {
  return new URL(
    `../assets/images/articles/${image}.${extension}`,
    import.meta.url
  ).href;
}
