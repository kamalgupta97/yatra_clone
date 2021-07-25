import styled from "styled-components";

export const ProfileCard = styled.div`
  height: 230px;
  width: 200px;
  box-shadow: 0px 1px 3px 1px grey;

  .profile {
    height: 150px;
    width: 200px;
    box-shadow: 0px 1px 3px 1px grey;
  }

  .extra {
    height: 80px;
    display: flex;
    align-items: center;
  }

  div ul {
    .li {
  list-style-type: none;
  position: relative;
  padding-left: 15px;
  cursor: pointer;
}

.li:hover{
    margin-left: 10px;
    transition-duration: 1s
}

.li:before {
  content: "\25BA \0020";
  font-size: 6px;
  position: absolute;
  top: 5px;
  left: -10px;
}
  }

  
`;
