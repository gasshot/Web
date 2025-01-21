// 사진 1 : https://image.inews24.com/v1/aeac8bada68e69.jpg
// 사진 2 : https://image.kmib.co.kr/online_image/2020/1125/611811110015255232_3.jpg

// DOM을 통해 요소를 가져온다. => 속성

const url1 = 'https://image.inews24.com/v1/aeac8bada68e69.jpg'
const url2 = 'https://image.kmib.co.kr/online_image/2020/1125/611811110015255232_3.jpg'
const url3 = 'https://i.pinimg.com/736x/ce/0d/02/ce0d02abe73cf1bb54bb7afd17d01caa.jpg'
const url4 = 'https://cdnweb01.wikitree.co.kr/webdata/editor/202009/09/img_20200909171810_765fbbc5.webp'
const data = { '김연아': url1, '신혜선': url2 , '수지': url3, '신세경' : url4}

// 1. 사진 2개의 이미지 주소를 구해올 것 
// 2. 구해온 사진 2개의 이미지주소를 각각 url1, url2 변수에 저장 
// 3. '변경!' 이라는 버튼을 클릭 시, 테스트용으로 console창에 'ck' 출력 
// 4. 변경이라는 버튼 클릭 시, input태그에 사용자가 입력한 값을 추출  => console창에
// 5. 조건에 맞게 사진을 배치한다. 
//   ex) 아이유 -> 아이유 사진 / 수지 -> 수지 사진 
//      => img 태그의 src 값을 변경 

// 만약 본인이 설정한 키워드 외에 다른 텍스트를 입력 시, alert 잘못입력하셨습니다. 
let teinputTextxt = null
let btn = document.getElementById('btn')
let imgTag = document.getElementById('imgTag')

// 2-2)  사진 속성 변경

btn.addEventListener('click', () => {
    teinputTextxt = document.getElementById('name')
    let wanted = (teinputTextxt.value).toString()

    console.log('ck!', wanted)

    if(data[wanted] == null){
        alert('잘못입력하셨습니다.')
        return
    }   
    imgTag.src = data[wanted]
})