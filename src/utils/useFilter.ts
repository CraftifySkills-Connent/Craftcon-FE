const useFilter = <T extends Record<string, any>>(
  data: T[],
  keyword: string
): T[] => {
  return data.filter((entry) => {
    return Object.values(entry).some((value) => {
      return (
        (typeof value === "string" &&
          value.toLowerCase().includes(keyword.toLowerCase())) ||
        (typeof value === "object" &&
          value !== null &&
          JSON.stringify(value).toLowerCase().includes(keyword.toLowerCase()))
      );
    });
  });
};

export default useFilter;
