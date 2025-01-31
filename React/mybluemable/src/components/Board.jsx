import React, { useState } from 'react';

const Board = ({ tiles }) => {
  const [diceValue, setDiceValue] = useState(1); // 주사위 값 상태
  // const [playerPositions, setPlayerPositions] = useState([0, 0, 0, 0]); // 4명의 플레이어 위치 상태

  // 주사위 굴림 함수 
  function rollDice() {
    console.log("rolled Dice!!");

    // 두개 주사위 굴리기
    let ran1 = Math.floor((Math.random() * 6) + 1);	//1~6
    let ran2 = Math.floor((Math.random() * 6) + 1);	//1~6

    console.log("현재 현황", ran1, ran2)
    return setDiceValue(ran1 +ran2);
  }

  // 각 타일의 그리드 위치 계산 함수
  const getTilePosition = (index) => {
    if (index === 0) {
      return { gridRow: 1, gridColumn: 1 }; // 0번 타일 (출발)은 0,0 위치
    }
    if (index < 10) {
      return { gridRow: index + 1, gridColumn: 1 }; // 1번~9번 타일 (아래로 배치)
    }
    if (index >= 10 && index < 20) {
      return { gridRow: 11, gridColumn: index - 9 }; // 10번~19번 타일 (오른쪽으로 배치)
    }
    if (index >= 20 && index < 30) {
      return { gridRow: 31 - index, gridColumn: 11 }; // 20번~29번 타일 (위로 배치)
    }
    if (index >= 30 && index < 40) {
      return { gridRow: 1, gridColumn: 41 - index }; // 30번~39번 타일 (왼쪽으로 배치)
    }
  };

  return (
    <div
      className="board"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(11, 1fr)', // 10개의 열
        gridTemplateRows: 'repeat(11, 1fr)', // 10개의 행
        position: 'relative', // 중앙 배치를 위한 설정
      }}
    >
      {tiles.map((tile, index) => {
        const position = getTilePosition(index);

        return (
          <div
            key={tile.id}
            className={`tile ${tile.type}`}
            style={position}
          >
            <table style={{ width: '100%', height: '100%' }}>
              <tbody>
                {/* 20% 40% 20% 비율로 높이 설정 */}
                <tr id="construction" style={{ height: '32px' }}>
                  {tile.type === 'city' && (
                    <>
                      <td style={{ border: '1px solid black' }}>주택</td>
                      <td style={{ border: '1px solid black' }}>콘도</td>
                      <td style={{ border: '1px solid black' }}>호텔</td>
                      <td style={{ border: '1px solid black' }}>랜드</td>
                    </>
                  )}
                </tr>
                <tr id="nation" style={{ height: '20px' }}>
                  {/* 국가 이름 표시 */}
                  <td colSpan="4" id="nation" align="center">
                    {tile.name}
                  </td>
                </tr>
                <tr id="players" style={{ height: '20px' }}>
                  {/* 빈 박스 */}
                  <td style={{ width: '25%', backgroundColor: 'lightgray', border: '1px solid black' }}>1p</td>
                  <td style={{ width: '25%', backgroundColor: 'lightgray', border: '1px solid black' }}>2p</td>
                  <td style={{ width: '25%', backgroundColor: 'lightgray', border: '1px solid black' }}>3p</td>
                  <td style={{ width: '25%', backgroundColor: 'lightgray', border: '1px solid black' }}>4p</td>

                </tr>
              </tbody>
            </table>
          </div>
        );
      })}

      {/* 주사위 숫자 표시 */}
      <div className="dice" id="diceViewer">{diceValue}</div>
      {/* 주사위 버튼 */}
      <button className="dice-button" id="playerChangeButton">
        플레이어 체인지
      </button>
      {/* 주사위 버튼 */}
      <button className="dice-button" id="rollDiceButton" onClick={rollDice}>
        주사위 던지기
      </button>
    </div>
  );
};

export default Board;
