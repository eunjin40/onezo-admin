import React, { useState } from "react";
import {
  AcceptBt,
  ButtonWrap,
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
import {
  getOrderState,
  putOrderAccept,
  putOrderReject,
} from "../../api/order/order_api";

const orderData = [
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

const WaitComponent = () => {
  // 전달 받은 데이터
  const [orderState, setOrderState] = useState<IProps[]>([]);

  const handleClickAccept = async (orderId: number) => {
    try {
      const res = await putOrderAccept(orderId);
      setOrderState(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickReject = async (orderId: number) => {
    try {
      const res = await putOrderReject(orderId);
      setOrderState(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Wrap>
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
                      <AcceptBt onClick={() => handleClickAccept(item.orderId)}>
                        <button>접수하기</button>
                      </AcceptBt>
                      <RejectBt onClick={() => handleClickReject(item.orderId)}>
                        <button>주문거부</button>
                      </RejectBt>
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

export default WaitComponent;
