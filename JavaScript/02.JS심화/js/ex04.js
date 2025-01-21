// 사진 1 : https://image.inews24.com/v1/aeac8bada68e69.jpg
// 사진 2 : https://image.kmib.co.kr/online_image/2020/1125/611811110015255232_3.jpg

// DOM을 통해 요소를 가져온다. => 속성

const pic1 = 'https://image.inews24.com/v1/aeac8bada68e69.jpg'
const pic2 = 'https://image.kmib.co.kr/online_image/2020/1125/611811110015255232_3.jpg'
const pic3 = 'https://i.pinimg.com/736x/ce/0d/02/ce0d02abe73cf1bb54bb7afd17d01caa.jpg'
const pic4 = 'https://cdnweb01.wikitree.co.kr/webdata/editor/202009/09/img_20200909171810_765fbbc5.webp'
const data = { '김연아': pic1, '신혜선': pic2 , '수지': pic3, '신세경' : pic4}

// 1. input 태그 내에 사용자가 입력한 값을 가져와보자
// ex) 사용자에게 정보받기, 댓글창, prompt창 만들기 등등...

// 1-1. input 태그 버튼에 이벤트 리스너 걸기 
let teinputTextxt = null
let inputBtn = document.getElementById('inputBtn')
inputBtn.addEventListener('click', () => {
    teinputTextxt = document.getElementById('inputText')
    console.log('input 버튼 클릭!')
    console.log(teinputTextxt.value) // input 태그에 적은 내용 가져오려면
})

// 1-2. input태그 안에 사용자가 입력한 값 가져오기 

// innerText로는 input태그 안에 적힌 값을 못가져온다.
// 왜? input한테는 컨텐츠가 없으니까. (innerText는 컨텐츠를 가져오는 기능임)
// 사용자가 input에 입력한 값은 value라는 기능 사용 
// 요소.value 

// 2. 첫번째 사진의 속성 값을 가져와보자
let getImgBtn = document.getElementById('getImgBtn')
let setImgBtn = document.getElementById('setImgBtn')
let imgTag = document.getElementById('imgTag')

// 2-1) imgTag의 속성값 출력
getImgBtn.addEventListener('click', () => {
    teinputTextxt = document.getElementById('inputText')
    let aa = (teinputTextxt.value).toString()
    //console.log(imgTag)

    // Case 1. 요소. 속성이름
    
    //console.log(imgTag.src)
    //console.log(imgTag.width)
    // console.log(imgTag.getAttribute('src'))
    // console.log(imgTag.getAttribute('width'))

    console.log('getImg 버튼 클릭!', aa)
    console.log(data[aa]) // input 태그에 적은 내용 가져오려면
})

// 2-2)  사진 속성 변경

setImgBtn.addEventListener('click', () => {
    teinputTextxt = document.getElementById('inputText')
    let aa = (teinputTextxt.value).toString()

    console.log('setImg 버튼 클릭!', aa)
    //console.log('src = ', data[aa])
    imgTag.src = data[aa]
})
