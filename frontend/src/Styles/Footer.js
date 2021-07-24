import styled from "styled-components";
export const FooterStyle = styled.div`
  width: 100%;

  .footerTop {
    height: 52px;
    background: #f0f3f5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      height: 50px;
    }
  }

  .left {
    width: 280px;
  }

  .mid {
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .right {
    width: 250px;
  }

  .footerBottom {
    height: 57px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .copyright {
    color: #81868d;
    font-size: 12px;
    text-align: center;
    font-style: italic;
  }
`;
