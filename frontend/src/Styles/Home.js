import styled from "styled-components";

export const Buses = styled.div`
  /* background: grey; */
  max-width: 1300px;
  height: 90vh;
  margin: 10vh auto 0;

  display: flex;
  justify-content: space-between;
  gap: 0.03;
  position: relative;

  .leftSide {
    flex: 0.37;
    /* background: red; */
    position: fixed;
  }

  .rightSide {
    flex: 0.6;
    margin-left: auto;
    /* background: green; */
    /* position: absolute; */
  }

  .rec-pagination {
    display: none;
  }

  .rec-arrow-right,
  .rec-arrow-left {
    position: absolute;
    top: 30vh;
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
  }

  .rec-arrow-right {
    right: 0;
  }

  /* .rec-arrow-right:hover{
      background: 
  } */

  .rec-arrow-left {
    right: 60px;
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
