import React, { useEffect, useState, useRef } from "react";
import {
  OpenSubMenuChevron,
  SubCategoryFilterContainer,
} from "../TableauHomePage/tableau-homepage.style";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SubCategorySelector = ({ filter, findCategory, setFilter }) => {
  const [open, setOpen] = useState(false);
  const itemsRef = useRef([]);
  useEffect(() => {
    let allMenuItems = document.querySelectorAll(".menu");
    let firstItem;
    allMenuItems.forEach((item, index) => {
      if (item.classList?.contains("selected")) {
        firstItem = item;
        allMenuItems[0].before(firstItem);
      }
    });
  });

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(
      1,
      findCategory?.subCategory?.length + 1
    );
  }, [findCategory?.subCategory?.length]);
  return (
    <SubCategoryFilterContainer
      className={
        open ? "subcategory-container isOpen" : "subcategory-container isClosed"
      }
    >
      <div
        className={`${filter === "" ? "menu selected" : "menu"}`}
        onClick={() => setFilter("")}
      >
        <span>Tous</span>
      </div>
      {findCategory?.subCategory?.map((sub, index) => (
        <div
          key={sub.name}
          className={`${filter === sub.slug ? "menu selected" : "menu"}`}
          onClick={() => setFilter(sub.slug)}
        >
          <span className="subcategory-name">{sub.name}</span>{" "}
          {sub?.logo && (
            <img width={sub?.width} src={sub?.logo} alt={sub?.alt} />
          )}
        </div>
      ))}
      <OpenSubMenuChevron
        className="chevron"
        icon={open ? faChevronUp : faChevronDown}
        size="2x"
        onClick={() => setOpen(!open)}
      />
    </SubCategoryFilterContainer>
  );
};

export default SubCategorySelector;
