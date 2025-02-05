const Ex03Board = ({name,number}) => {
  // 하나의 화면의 일부분이면서 화면 그자체가 될 수 있는 최소 단위
    let url = `http://localhost:3000/img/dice${number}.png`
  return (
    <div class = 'board'>
        <h2>{name}</h2>
        <br />
        <img src={url} alt="" />
    </div>
  )
}

export default Ex03Board