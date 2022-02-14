import styled from "styled-components";

export const Container: any = styled.div`
  display: ${(props: any) => props.Show};
  align-items: center;
  width: 1440px;
  height: 800px;
  background: #000;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .image-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: opacity(0.2);
  }

  svg {
    position: absolute;
    top: 30px;
    right: 30px;
    color: white;
    font-size: 32px;
    border: 1px solid white;
    border-radius: 100%;
    cursor: pointer;
    width: 40px;
    height: 40px;

    :hover {
      color: #b42d1d;
      border: 1px solid #b42d1d;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px;
  z-index: 5;
  position: relative;
`;

export const LeftSide = styled.div`
  width: 30%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieImage = styled.img`
  width: 80%;
  height: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  width: 70%;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  line-height: 24px;
  color: white;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const OriginalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: white;
  margin-bottom: 40px;
`;

export const AdditionalData = styled.h3`
  font-size: 18px;
  line-height: 20px;
  color: white;
  margin-bottom: 24px;
`;

export const MovieDescription = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  color: white;
  max-height: 300px;
  overflow-y: auto;
`;
