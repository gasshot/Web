const MemberBox = ({teamName = '사바나',name,song})=>{
    // props를 사용하여 데이터를 받아서 렌더링
    //console.log('props' ,props)
    return(
        <div class ='kk' style={{ border: '1px solid black' }}>
        <p>팀명 : {teamName}</p>
        <p>이름 : {name}</p>
        <p>좋아하는 노래 : {song}</p>
      </div>
    );
}
export default MemberBox;