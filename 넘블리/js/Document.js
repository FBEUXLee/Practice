const root = document.getElementById('root')

async function getProductData(){
    const response =await fetch('http://43.201.103.199/posts',
    {
        method : 'GET',
    });
    const product = await response.json()
    return product
}
getProductData().then(product =>{
    const mainElement = document.createElement('main')
    mainElement.classList.add('product')

//1
mainElement.innerHTML = `
            <div class="detail-title">
                <a href="#" class="logo">Photo card</a>
            </div>

            <div class="create-post-btn-wrap">
                <a href="#/upload" class="create-post-btn"><span class="material-symbols-outlined">
                    edit
                    </span>새 글 작성하기</a>
            </div>

            <ul class="post-list">
                <li class="post"><a href=""></a></li>
            </ul>

`

//2
// const productSection = document.createElement('section')
// productSection.setAttribute('class','page-main')
// mainElement.appendChild(productSection)

// const detailtitle = document.createElement('div')
// detailtitle.setAttribute('class','detailtitle')
// mainElement.appendChild(detailtitle)
} )



// window.onload = () => {
//     const main = document.querySelector("main");

//     const handleLocationChange = (e) => {
//         console.log("locationchanged");

//         //* 주소변경
//         window.history.pushState(undefined, "타이틀", href);
//     };

//     //* locationchange 이벤트리스너
//     window.addEventListener("locationchange", handleLocationChange);

//     main.innerHTML = "<div class='create-post-btn-wrap'><a href='#'><span class='material-symbols-outlined'>edit</span>새 글 작성하기</a></div>";

//     const button = document.querySelector("button");
//     button.addEventListener("click", () => {
//         const locationChangeEvent = new CustomEvent("locationchange", {
//             composed: true, //웹 컴포넌트라면 넣어주세요
//             detail: { href: "some" },
//         });
//         //* 주소변경 이벤트 Dispatch
//         window.dispatchEvent(locationChangeEvent);

//         //*경로에 맞는 콘텐츠 렌더
//         const renderContents = () => {
//             const { pathname } = window.location;
//             switch (pathname) {
//                 case "/some":
//                     main.innerHTML = "<div>some Contents</div>";
//                     break;
//                 default:
//                     main.innerHTML = "<div>404</div>";
//             }
//         };
        
//         const handleLocationChange = (e) => {
//             const { href } = e.detail;
        
//             //* 주소변경
//             window.history.pushState(undefined, "타이틀", href);
//             //* 콘텐츠 렌더링
//             renderContents();


//             // 페이지이동
//             window.addEventListener("popstate", () => {
//                 renderContents();
//             });

//             button.addEventListener("click", () => {
//                 const targetUrl = "some?foo=bar";
//                 const { pathname } = window.location;
            
//                 //* 같은 URL 은 스택에 추가하지 않는다
//                 if (targetUrl === pathname) {
//                     return;
//                 }
            
//                 const locationChangeEvent = new CustomEvent("locationchange", {
//                     composed: true,
//                     detail: { href: "some" },
//                 });
            
//                 //* 주소변경 이벤트 Dispatch
//                 window.dispatchEvent(locationChangeEvent);
//             }
//             )};
//     });
// };

// fetch('http://43.201.103.199/')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
    

// //App.js 파일

// import React, { useState, useEffect } from 'react';
// import './App.css';


// function App() {
//     const [img, setImg] = useState('');
//     const [res, setRes] = useState([]);
//     const Access_Key = 'hRIsvAPnobOF1QhtwIYaQ6c5TJSjC2gJhYWagrXBhB8';
//     const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${hRIsvAPnobOF1QhtwIYaQ6c5TJSjC2gJhYWagrXBhB8}&orientation=landscape&per_page=20`;

//     const fetchRequest = async () => {
//         const response = await fetch(url);
//         const responseJson = await response.json();
//         const result = responseJson.results;
//         console.log(result);
//         setRes(result);
//     };

//     useEffect(() => {
//         fetchRequest();
//     }, []);

//     const submit = () => {
//         fetchRequest();
//         setImg('');
//     };

//     return (
//         <div>
//             <div>
//                 <div className="search">
//                     <input
//                         type="text"
//                         value={img}
//                         onChange={(e) => setImg(e.target.value)}
//                         placeholder="Searching Anything..."
//                     />
//                     <button type="submit" onClick={submit}>
//                         Search
//                     </button>
//                 </div>
//                 <div className="imgContainer">
//                     {res.map((val) => {
//                         return (
//                             <img
//                                 key={val.id}
//                                 src={val.urls.thumb}
//                                 alt={val.alt_description}
//                             />
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default App;
