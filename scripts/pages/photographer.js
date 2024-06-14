//Mettre le code JavaScript lié à la page photographer.html

// const searchParams = new URLSearchParams(window.location.search);
// const photographName = searchParams.get("name");
// const photographFirstname = searchParams.get("firstname");
// console.log(photographName,photographFirstname);


async function getPhotographer() {
    // try pour regrouper instruction défini reponse si exception
    try {
        const response = await fetch("../scripts/utils/photographe.json");

        if (!response.ok)
            throw new Error('Failed to fetch data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching photographers data:', error);
    }
}

(async () => {
    const photographs = await getPhotographer();
    const urlSearchParams = new URLSearchParams(window.location.search);
    const photographId = Number(urlSearchParams.get('photograph_id'));
    console.log(photographId)
})()




        document.addEventListener("DOMContentLoaded", function () {
                fetch('scripts/utils/photographe.json')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)

                        // copier élément pour tous les photographes
                        let imgElement = document.getElementById("picture-1");
                        if (imgElement) {
                            imgElement.src = "https://s3-alpha-sig.figma.com/img/befa/9682/81e467028a7b1fbd7f86fa8f8c789692?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLn43QGn~AyM6cuNr00AUhkXeAgbQ7IhCNbwXYSMEwQ~s~ZWp3cXbFaj0up8hYhg9beCjGzuAj9lgeF-zgOHzvXMTWFBDaxw8UMGO-yMZkAPcosg7heXnFyAzn0qjCdyi4yLVZ7bm0bJOLeqglxOOBRQLeMD2a9rXEMj2KyYGpuwnyqrI~Y9w~4EqhfzhwA09OiA19eDidzdCzUvl0rZbUqvH8h7hckZHqXQHCdqzY2UKaCSY3brxntsrGbPSVvCh8MzFeOl5JG9pSyahXTiIuPV2ZAfiG5LGGvQaAVmw4MKu8G4lu3NEQUvKnxnWSBzlC0bhS0FsVRW8kXeDwiYzg__";
                        }

                        for (let i = 0; i < 6; i++){

                        }

                    })
                    .catch(error => console.error('Error fetching JSON:', error))
            }
        )




// document.addEventListener("DOMContentLoaded", function () {
//         fetch('scripts/utils/photographe.json')
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//
//                 // copier élément pour tous les photographes
//                 const imgElement = document.getElementById("picture-2");
//                 if (imgElement) {
//                     imgElement.src = "https://s3-alpha-sig.figma.com/img/6c10/b2d9/7dee9505ed8b8c06a7b5409ad2eaf4ed?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPaQVyYSru9GFugZYnd42saUi6NHcTjxaGd~OIWA0YF4gLNc7a7zkL2vCL1hVQ0Ch6wgk~siLgXYQ2btSlFGaJPIWQIBHM8HkRV7rX~aX5GB8TMP55TPHJBdYg4Fuh6ax1qmCGb70AGPOCKQCXsAkahBVKNkrJjRo6e6yQnnHruWHHBY2hY~8RPvntTV2x7qko6uT2rawhsVsMtDD654QQqwErsKzrZRhVgIY2-g2Nqy8p-h1hZkjmZQscc2qiTSt2QvMid3DArDTrQE5Y6EGV-PDNVwmhTxIDDDD2CpyhhhxDaxayZcQkO7od9s0V273gbJiH3gJ-nRBhjful5lZQ__";
//                 }
//
//             })
//             .catch(error => console.error('Error fetching JSON:', error))
//     }
// )



//ctr alt i / l