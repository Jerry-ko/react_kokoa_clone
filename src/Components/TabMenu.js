import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.li`
  width: 120px;
  text-align: center;
  border-bottom: 3px solid;
  transition: border-bottom 0.2s ease-in-out;
  cursor: pointer;
`;

const Slink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  color: #656565;
`;

// eslint-disable-next-line
const RightNav = () => {
  return (
    <ul style={{ textDecoration: "none", display: "flex" }}>
      <Item>
        <Slink to="/friends">
          <i class="fas fa-users"></i>
        </Slink>
      </Item>
      <Item>
        <Slink to="/chatting">
          <i class="fas fa-comments-dollar"></i>
        </Slink>
      </Item>
    </ul>
  );
};

export default RightNav;
