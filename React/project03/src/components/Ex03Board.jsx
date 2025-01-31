const Ex03Board = ({name,number}) => {
    let url = `http://localhost:3000/img/dice${number}.png`
  return (
    <div class = 'board'>
        <div>{name}</div>
        <img src={url} alt="" />
    </div>
  )
}

export default Ex03Board