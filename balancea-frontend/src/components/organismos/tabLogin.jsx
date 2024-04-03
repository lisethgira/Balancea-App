import styled from "styled-components";
import React, { useEffect, useState, memo } from "react";
import PropTypes from "prop-types";

export const TabContainer = styled.div`
  display: flex;
  width: 100%;
  background: #131313;
  align-items: stretch;
`;

const selectedColor = "rgb(30,190,230)";
const defaultColor = "transparent";

export const TabItem = styled.div`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 4px solid
    ${(props) => (props.selected ? selectedColor : defaultColor)};
`;

export const TabLogin = ({ children, onTabSelected }) => {
  const [itemId, setItemId] = useState(1);

  useEffect(() => {
    onTabSelected && onTabSelected(itemId);
  }, [itemId, onTabSelected]);

  TabLogin.propTypes = {
    children: PropTypes.node.isRequired,
    onTabSelected: PropTypes.func,
  };

  return (
    <TabContainer>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onClick: () => {
            setItemId(index);
          },
          selected: itemId === index,
        });
      })}
    </TabContainer>
  );
};

export const MemoTabItem = memo(({ children, ...restProps }) => (
  <TabItem {...restProps}>{children}</TabItem>
));

MemoTabItem.propTypes = {
  children: PropTypes.node.isRequired,
};

MemoTabItem.displayName = "MemoTabItem";

