// hooks/useResponsiveItemsPerPage.js
import { useState, useEffect } from "react";

export function useResponsiveItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    const getItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 640) return 6;
      if (width >= 640 && width < 768) return 8;
      if (width >= 768 && width < 1024) return 6;
      if (width >= 1024 && width < 1280) return 8;
      if (width >= 1280 && width < 1536) return 10;
      return 12;
    };

    const updateItems = () => {
      setItemsPerPage(getItemsPerPage());
    };

    updateItems();
    window.addEventListener("resize", updateItems);

    return () => window.removeEventListener("resize", updateItems);
  }, []);

  return itemsPerPage;
}
