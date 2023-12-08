import styled from "styled-components";

export const Title = styled("div")`
  margin-top: 100px;
  margin-left: 20px;
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
`;

export const NoticeWrap = styled("div")`
  .notice {
    height: 100px;
    display: flex;
    justify-content: center;
  }

  .container {
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0 20px;
  }

  > .notice:nth-child(odd) {
    background: rgba(164, 81, 177, 0.15);
  }

  span {
    width: 100%;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  .name {
    font-weight: bold;
  }

  .link {
    color: #a451b1;
    font-size: 15px;
    font-weight: bold;
  }

  .date {
    text-align: right;
  }

  .notice_footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
