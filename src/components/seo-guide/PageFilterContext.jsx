// src/components/seo-guide/PageFilterContext.jsx
"use client";

import { createContext, useContext, useState } from "react";

// Shared filter state so one block (e.g. meal plan chooser) can drive the
// active filter in another (e.g. the stays explorer). Provider is mounted by
// GuidePage around the block list when the guide declares `sharedFilters: true`.
const FilterContext = createContext(null);

export function PageFilterProvider({ children }) {
  const [filter, setFilter] = useState(null);
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export function usePageFilter() {
  return useContext(FilterContext);
}