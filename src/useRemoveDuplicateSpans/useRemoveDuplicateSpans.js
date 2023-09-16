import { useLayoutEffect, useCallback } from "react";
import { categories } from "../data/categories/categories";

const useRemoveDuplicateSpans = () => {
  const removeDuplicateSpans = useCallback((classname) => {
    let spans = document.querySelectorAll(`.${classname}`);
    spans.forEach((element, index) => {
      if (index > 0) {
        element?.remove();
      }
    });
  }, []);
  useLayoutEffect(() => {
    let classNames = categories
      ?.map((cat) => cat?.subCategory?.map((sc) => sc?.slug))
      .filter((item) => item !== undefined)
      .flat();
    classNames.forEach((className) => removeDuplicateSpans(className));
    //methode caca pour faire ça
  });
};

export default useRemoveDuplicateSpans;
