const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const catBtn = document.getElementeByld("change-cat");

const gatCats = async () => {
try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    return json.webpurl;
}catch (e) {
    console.log(e.messege);
}
};

const loading = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventLister('click', loading);
loading();