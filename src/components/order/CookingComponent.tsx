import React, { useState } from "react";
import {
  AcceptBt,
  ButtonWrap,
  CompleteButton,
  InnerWrap,
  MenuWrap,
  OrderBox,
  OrderBoxInner,
  OrderBoxWrap,
  PriceMenuWrap,
  PriceWrap,
  RejectBt,
  TimeWrap,
  Wrap,
} from "../../styles/order/WaitComponentStyle";
import OrderAbout from "../../components/order/OrderAbout";

const orderData = [
  {
    time: "13:33",
    totalCount: "2",
    price: "10000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
];

interface IOrderItem {
  orderItemId: number;
  orderId: number;
  menuId: number;
  quantity: number;
}

interface IProps {
  orderId: number;
  storeId: number;
  memberId: number;
  status: string;
  orderDate: string;
  takeInOut: string;
  orderItems: IOrderItem[];
}

const CookingComponent = () => {
  const [orderState, setOrderState] = useState<IProps[]>([]);

  return (
    <>
      <Wrap>
        {/* <OrderAbout /> */}
        <InnerWrap>
          <OrderBoxWrap>
            {orderState &&
              orderState.map((item, index) => (
                <OrderBox key={index}>
                  <OrderBoxInner>
                    <TimeWrap>
                      <div className="order-time">{item.orderDate}</div>
                    </TimeWrap>
                    <PriceMenuWrap>
                      <PriceWrap>
                        <div className="order-count">
                          [메뉴 {item.orderItems.length}개]
                        </div>
                        {/* <div className="order-price">{item.price}원</div> */}
                        <div className="order-type">({item.takeInOut})</div>
                      </PriceWrap>
                      <MenuWrap>
                        {item.orderItems.map((orderItems, index) => (
                          <div key={index} className="order-menu-1">
                            메뉴 ID: {orderItems.menuId} {orderItems.quantity}개
                          </div>
                        ))}
                      </MenuWrap>
                    </PriceMenuWrap>
                    <ButtonWrap>
                      <CompleteButton>완료 처리하기</CompleteButton>
                    </ButtonWrap>
                  </OrderBoxInner>
                </OrderBox>
              ))}
          </OrderBoxWrap>
        </InnerWrap>
      </Wrap>
    </>
  );
};

export default CookingComponent;
