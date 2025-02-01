import React, { useState } from 'react';

const Board = ({ tiles }) => {
  const [diceValue, setDiceValue] = useState(1); // 주사위 값 상태
  const [playerPositions, setPlayerPositions] = useState([0, 0, 0, 0]); // 4명의 플레이어 위치 상태

  // 플레이어 이동 함수
  const movePlayer = (diceValue) => {
    let newPositions = [...playerPositions];
    newPositions[0] = (playerPositions[0] + diceValue) % 40; // 플레이어 1 위치 업데이트
    // 예시로 첫 번째 플레이어만 이동
    setPlayerPositions(newPositions);
  };


  // 주사위 굴리기 함수
  const rollDice = () => {
    const randomValue1 = Math.floor(Math.random() * 6) + 1; // 1부터 6까지 랜덤 숫자 생성
    const randomValue2 = Math.floor(Math.random() * 6) + 1; // 1부터 6까지 랜덤 숫자 생성
    setDiceValue(randomValue1 + randomValue2); // 주사위 값을 상태에 저장

    movePlayer(randomValue1 + randomValue2); // 주사위 값에 맞춰 플레이어 이동
  };


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
                <tr id="nation" style={{ height: '50%' }}>
                  {/* 국가 이름 표시 */}
                  <td colSpan="4" id="nation" align="center">
                    {tile.name}
                  </td>
                </tr>
              </tbody>
            </table>


          </div>
        );
      })}

      {/* 플레이어 표시 */}
      {playerPositions.map((style, index) => (
        <div
          key={index}
          className="player"
          style={{
            position: 'absolute',
            ...style,
            zIndex: 2, // 타일 위에 렌더링
            width: '60px', // 말의 크기 (원 크기)
            height: '60px',
            backgroundColor: 'red', // 말 색상
            borderRadius: '50%', // 원 모양
            border: '3px solid white', // 테두리
          }}
        />
      ))}


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
