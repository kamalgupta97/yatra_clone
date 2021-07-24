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
    /* top: 0vh; */
    background: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background: #666666;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 40px;
    z-index: 0;
    position: absolute;
  }

  .rec-arrow-right {
    right: 0;
  }

  .rec-arrow-right:hover,
  .rec-arrow-left:hover {
    background: #666666;
  }

  .rec-arrow-left {
    /* right: 60px; */
  }

  .currentNews {
    margin: 30px 0;
    width: 100%;
    /* border: 1px solid; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-heading {
    font-size: 20px;
    color: #333333;
  }

  .view-all-cardTop {
    margin-top: 3px;
    margin-left: 20px;

    a {
      text-decoration: none;
      color: #2a92c5;
      font-size: 14px;
    }
  }

  .coupon-and-guide {
    display: flex;
    gap: 12px;
  }

  .countiesOpen {
    height: auto;
    margin: 30px auto;
  }

  .busDiscount {
    height: auto;
    margin: 30px auto;
  }

  .discountCard-img {
    margin: 15px auto;
    cursor: pointer;
  }

  .discountCard-img:hover {
    box-shadow: 0px 0.5px 3px 1px grey;
  }
`;
