import React from "react";
import styled from "styled-components";

const Notice = () => {
  return (
    <NoticeWrap>
      <div className="nt-field">
        <div className="nt-card">
          <b style={{ display: "block" }}>국내 종합 현황</b>
          <b style={{ display: "block" }}>매일 오전에 갱신됩니다.</b>
          <b style={{ display: "block" }}>단위는 명 입니다.</b>
          <b style={{ display: "block" }}>
            오늘의 데이터 업데이트된 날짜 2021/00/00 09:30:20
          </b>
          {/* <ul style={{ margin: 0 }}>
            <li>반응형 적용예정.</li>
            <li>1920x에서 정상작동.</li>
          </ul> */}
        </div>
      </div>
    </NoticeWrap>
  );
};
const NoticeWrap = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  .nt-field {
    /* height: 10vh; */
    background-color: #f7f7f7;
    color: black;
    width: 100%;
    /* border-top: 5px solid #468a9d;
    border-bottom: 5px solid #468a9d;
    border-left: 2px solid #468a9d;
    border-right: 2px solid #468a9d; */
    border-radius: 0.35rem;
    background: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.6),
      hsla(0, 0%, 100%, 0.2)
    );
    box-shadow: 0 0.15rem 1.75rem 0 rgb(34 39 46 / 15%);
  }
  .nt-card {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default Notice;
