import React, { useState } from 'react';

const Board = ({ tiles }) => {
  const [diceValue, setDiceValue] = useState(1); // 주사위 값 상태 관리

  // 주사위 던지기 함수
  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
  };

  const getTilePosition = (index) => {
    // 0번 타일 (출발)은 0,0 위치
    if (index === 0) {
      return { gridRow: 1, gridColumn: 1 };
    }

    // 1번~8번 타일은 첫 번째 열에 아래로 배치
    if (index < 10) {
      return { gridRow: index + 1, gridColumn: 1 }; // 1~8번 타일 (아래로)
    }

    // 9번~18번 타일은 두 번째 행에 오른쪽으로 배치
    if (index >= 10 && index < 20) {
      return { gridRow: 11, gridColumn: index - 9 }; // 9~18번 타일 (오른쪽으로)
    }

    // 19번~28번 타일은 세 번째 행에 위로 배치
    if (index >= 20 && index < 30) {
      return { gridRow: 19 - index, gridColumn: 11 }; // 19~28번 타일 (위로)
    }

    // 29번~38번 타일은 네 번째 행에 왼쪽으로 배치
    if (index >= 30 && index <= 39) {
      return { gridRow: 1, gridColumn: 41 - index }; // 29~38번 타일 (왼쪽으로)
    }
  };

  return (
    <div
      className="board"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)", // 10개의 열
        gridTemplateRows: "repeat(10, 1fr)",    // 10개의 행
        position: "relative", // 중앙 배치를 위한 설정
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
            <div>{tile.name}</div>
            {tile.type === "city" && (
              <div>
                <div align="right">
                  집 <span id="house" style={{ border: "1px solid black" }}>zz</span>
                </div>
                <div align="right">
                  콘도 <span id="condo" style={{ border: "1px solid black" }}>zz</span>
                </div>
                <div align="right">
                  호텔 <span id="hotel" style={{ border: "1px solid black" }}>zz</span>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* 주사위 숫자 표시 */}
      <div
        className="dice"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '3rem',
          color: 'red',
        }}
      >
        {diceValue}
      </div>

      {/* 주사위 버튼 */}
      <button
        onClick={rollDice}
        style={{
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          fontSize: '1.5rem',
        }}
      >
        주사위 던지기
      </button>
    </div>
  );
};

export default Board;
