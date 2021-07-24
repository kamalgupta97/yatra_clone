import styled from "styled-components";

export const Buses = styled.div`
  background-color: #fdfbfb;
  max-width: 1350px;
  height: 90vh;
  margin-top: 10vh;

  .leftSide {
    width: "40%";
    height: "85vh";
    border: "1px solid";
    background: red;
    position: fixed;
  }

  .landing {
    width: "100%";
    margin: "auto";
    border: "1px solid";
    background: grey;
  }

  .currentNews {
    margin: 30px 0;
    width: 100%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .coupon-and-guide {
    display: flex;
    gap: 12px;
  }

  .countiesOpen {
    height: 32vh;
    border: 1px solid;
    margin: 30px auto;
  }

  .busDiscount {
    height: 28vh;
    border: 1px solid;
    margin: 30px auto;
  }
`;
