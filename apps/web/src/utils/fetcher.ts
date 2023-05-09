export const fetcher = async (
  ...args: Parameters<typeof fetch>
): Promise<any> => {
  const response = await fetch(...args);
  return await response.json();
};
