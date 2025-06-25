// src/types/common.types.ts

// Para respuestas paginadas del backend
export interface Page<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
  isLast: boolean;
}

// Podrías tener otros tipos comunes aquí, como para errores
export interface ApiError {
  timestamp?: string; // O Date
  message?: string;
  details?: string;
  validationErrors?: Record<string, string>;
}
