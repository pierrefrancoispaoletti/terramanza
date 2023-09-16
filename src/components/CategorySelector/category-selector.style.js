import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../_const";

export const CategoriesContainer = styled.nav`
  display: flex;
  padding: 8px 0px;
  overflow-x: auto;
`;

export const ListContainer = styled.ul`
  padding: 0px 8px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  list-style: none;
`;
export const CategoryItem = styled.li`
  font-family: "Lora";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  margin: 0px 8px;
  background: ${colors.secondary};
  border: 1px solid ${colors.ecriture};
  border-radius: 100%;
  padding: 6px;
  box-shadow: 0px 9px 15px -5px rgba(0, 0, 0, 0.58);
  transition: all 0.5s;
`;

export const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 6px;
`;

export const CategoryTitle = styled.span`
  line-height: 1em;
  font-size: 1em;
  text-align: center;
  width: 100%;
`;

export const LinkContainer = styled(NavLink)`
  text-decoration: none;
  color: ${colors.main};
  &.active {
    /* text-decoration: underline ${colors.main}; */
    & > li {
      background: ${colors.secondary};
      border: 3px solid ${colors.main};
      color: ${colors.main};
    }
  }
`;
