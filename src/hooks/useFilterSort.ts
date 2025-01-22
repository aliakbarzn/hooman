// import { useMemo } from 'react';

// interface FilterConfig {
//   [key: string]: any; // Page-specific filter keys
// }

// interface SortConfig {
//   key: string; // The key to sort by
//   order: 'ascending' | 'descending'; // Sorting order
// }

// type FilterFunction<T> = (item: T, filters: FilterConfig) => boolean;
// type SortFunction<T> = (a: T, b: T) => number;

// export const useFilterSort = <T>(
//   data: T[],
//   filters: FilterConfig,
//   sortConfig?: SortConfig,
//   customFilterFunction?: FilterFunction<T>,
//   customSortFunction?: SortFunction<T>
// ) => {
//   const filteredData = useMemo(() => {
//     return data.filter(item => {
//       if (customFilterFunction) {
//         return customFilterFunction(item, filters);
//       }
//       // Default filter logic (example)
//       return Object.entries(filters).every(([key, value]) => {
//         if (value === null || value === undefined) return true;
//         if (typeof value === 'boolean') return item[key] === value;
//         if (typeof value === 'string') return item[key]?.includes(value);
//         return true;
//       });
//     });
//   }, [data, filters, customFilterFunction]);

//   const sortedData = useMemo(() => {
//     if (!sortConfig) return filteredData;
//     if (customSortFunction) return [...filteredData].sort(customSortFunction);

//     const { key, order } = sortConfig;
//     return [...filteredData].sort((a, b) => {
//       if (a[key] < b[key]) return order === 'ascending' ? -1 : 1;
//       if (a[key] > b[key]) return order === 'descending' ? 1 : -1;
//       return 0;
//     });
//   }, [filteredData, sortConfig, customSortFunction]);

//   return sortedData;
// };
