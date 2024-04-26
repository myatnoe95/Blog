export const truncateDescription = (description: string, maxLength: number) => {
  const ellipsis = "...";
  let truncated = description.substring(0, maxLength);

  if (maxLength < description.length) {
    truncated += ellipsis;
  }

  return truncated;
};
