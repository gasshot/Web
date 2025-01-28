import React, { useState } from 'react';

const Board = ({ tiles }) => {
  const [diceValue, setDiceValue] = useState(1); // 주사위 값 상태
  const [playerPosition, setPlayerPosition] = useState(0); // 플레이어의 현재 위치 상태

  // 주사위 굴리기 함수
  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1; // 1부터 6까지 랜덤 숫자 생성
    setDiceValue(randomValue); // 주사위 값을 상태에 저장

    // 새로운 위치 계산 (보드를 초과하면 다시 0번부터 시작)
    const newPosition = (playerPosition + randomValue) % tiles.length;
    setPlayerPosition(newPosition); // 새로운 위치를 상태에 저장
  };

  // 각 타일의 그리드 위치 계산 함수
  const getTilePosition = (index) => {
    if (index === 0) {
      // 0번 타일 (출발)은 0,0 위치
      return { gridRow: 1, gridColumn: 1 };
    }

    if (index < 10) {
      // 1번~9번 타일 (아래로 배치)
      return { gridRow: index + 1, gridColumn: 1 };
    }

    if (index >= 10 && index < 20) {
      // 10번~19번 타일 (오른쪽으로 배치)
      return { gridRow: 11, gridColumn: index - 9 };
    }

    if (index >= 20 && index < 30) {
      // 20번~29번 타일 (위로 배치)
      return { gridRow: 31 - index, gridColumn: 11 };
    }

    if (index >= 30 && index < 40) {
      // 30번~39번 타일 (왼쪽으로 배치)
      return { gridRow: 1, gridColumn: 41 - index };
    }
  };

  // 플레이어의 말을 타일에 표시할 수 있도록 구현
  const getPlayerPositionInTile = (tileIndex) => {
    // 타일 안에 4개의 칸을 두고 그 안에 플레이어 말이 들어가게 처리
    const playerIndexInTile = playerPosition === tileIndex ? 0 : -1;
    return playerIndexInTile;
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

        // 플레이어의 말이 들어갈 자리가 있다면 그 자리 계산
        const playerPositionInTile = getPlayerPositionInTile(index);

        return (
          <div
            key={tile.id}
            className={`tile ${tile.type}`}
            style={position}
          >

            {tile.type === 'city' ? (
              <table id="construction">
                <tbody>
                  <tr>
                    <td id="house" style={{ border: '1px solid black'}}>주택</td>
                    <td id="condo" style={{ border: '1px solid black'}}>콘도</td>
                    <td id="hotel" style={{ border: '1px solid black'}}>호텔</td>
                  </tr>
                  <tr>
                    <td id="nation" align='center' colSpan={'3'}>{tile.name}</td>
                  </tr>
                </tbody>
              </table>
              
            ) : (<div>{tile.name}</div>)}

            {/* 타일 이름을 테이블 아래에 배치 */}
            {/* <div style={{ marginTop: '10px', textAlign: 'center' }}>{tile.name}</div> */}



            {/* 플레이어 말 표시 */}
            {playerPositionInTile >= 0 && (
              <div
                className="player"
                style={{
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'red', // 플레이어 말 색상
                  transform: 'translate(-50%, -50%)', // 중심 정렬
                }}
              />
            )}
          </div>
        );
      })}

      {/* 주사위 숫자 표시 */}
      <div className="dice" id="diceViewer">{diceValue}</div>

      {/* 주사위 버튼 */}
      <button className="dice-button" id="rollDiceButton" onClick={rollDice}>
        주사위 던지기
      </button>
    </div>
  );
};

export default Board;