export const ErrorFetchHandler = (response) => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
};
