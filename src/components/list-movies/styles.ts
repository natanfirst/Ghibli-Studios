import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  row-gap: 20px;
  margin-top: 100px;
`;

export const Cart = styled.button`
  width: 100%;
  height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 20px;
  cursor: pointer;

  h2 {
    width: 100%;
    padding-right: 40px;
    text-align: right;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

export const Description: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: ${(props: any) => props.BgColor};
  border-radius: 0 0 20px 20px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: white;
`;
