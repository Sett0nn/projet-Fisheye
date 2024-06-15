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
                        let imgElement1 = document.getElementById("picture-1");
                        let imgElement2 = document.getElementById("picture-2");
                        let imgElement2 = document.getElementById("picture-3");
                        let imgElement2 = document.getElementById("picture-4");
                        let imgElement2 = document.getElementById("picture-5");
                        let imgElement2 = document.getElementById("picture-6");

                            imgElement.src = "https://s3-alpha-sig.figma.com/img/befa/9682/81e467028a7b1fbd7f86fa8f8c789692?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLn43QGn~AyM6cuNr00AUhkXeAgbQ7IhCNbwXYSMEwQ~s~ZWp3cXbFaj0up8hYhg9beCjGzuAj9lgeF-zgOHzvXMTWFBDaxw8UMGO-yMZkAPcosg7heXnFyAzn0qjCdyi4yLVZ7bm0bJOLeqglxOOBRQLeMD2a9rXEMj2KyYGpuwnyqrI~Y9w~4EqhfzhwA09OiA19eDidzdCzUvl0rZbUqvH8h7hckZHqXQHCdqzY2UKaCSY3brxntsrGbPSVvCh8MzFeOl5JG9pSyahXTiIuPV2ZAfiG5LGGvQaAVmw4MKu8G4lu3NEQUvKnxnWSBzlC0bhS0FsVRW8kXeDwiYzg__";
                            imgElement.src = "https://s3-alpha-sig.figma.com/img/6c10/b2d9/7dee9505ed8b8c06a7b5409ad2eaf4ed?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPaQVyYSru9GFugZYnd42saUi6NHcTjxaGd~OIWA0YF4gLNc7a7zkL2vCL1hVQ0Ch6wgk~siLgXYQ2btSlFGaJPIWQIBHM8HkRV7rX~aX5GB8TMP55TPHJBdYg4Fuh6ax1qmCGb70AGPOCKQCXsAkahBVKNkrJjRo6e6yQnnHruWHHBY2hY~8RPvntTV2x7qko6uT2rawhsVsMtDD654QQqwErsKzrZRhVgIY2-g2Nqy8p-h1hZkjmZQscc2qiTSt2QvMid3DArDTrQE5Y6EGV-PDNVwmhTxIDDDD2CpyhhhxDaxayZcQkO7od9s0V273gbJiH3gJ-nRBhjful5lZQ__";




                        for (let i = 0; i < 6; i++){

                        }

                    })
                    .catch(error => console.error('Error fetching JSON:', error))
            }
        )

document.addEventListener("DOMContentLoaded", function () {
        fetch('scripts/utils/photographe.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)

                // copier élément pour tous les photographes

                if (imgElement) {
                    imgElement.src = "https://s3-alpha-sig.figma.com/img/6c10/b2d9/7dee9505ed8b8c06a7b5409ad2eaf4ed?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPaQVyYSru9GFugZYnd42saUi6NHcTjxaGd~OIWA0YF4gLNc7a7zkL2vCL1hVQ0Ch6wgk~siLgXYQ2btSlFGaJPIWQIBHM8HkRV7rX~aX5GB8TMP55TPHJBdYg4Fuh6ax1qmCGb70AGPOCKQCXsAkahBVKNkrJjRo6e6yQnnHruWHHBY2hY~8RPvntTV2x7qko6uT2rawhsVsMtDD654QQqwErsKzrZRhVgIY2-g2Nqy8p-h1hZkjmZQscc2qiTSt2QvMid3DArDTrQE5Y6EGV-PDNVwmhTxIDDDD2CpyhhhxDaxayZcQkO7od9s0V273gbJiH3gJ-nRBhjful5lZQ__";
                }

                for (let i = 0; i < 6; i++){

                }

            })
            .catch(error => console.error('Error fetching JSON:', error))
    }
)

document.addEventListener("DOMContentLoaded", function () {
        fetch('scripts/utils/photographe.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)

                // copier élément pour tous les photographes
                let imgElement = document.getElementById("picture-3");
                if (imgElement) {
                    imgElement.src = "https://s3-alpha-sig.figma.com/img/47e9/eec0/4322e2a1f9428175986e75f995d09e54?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FmrRrJKCVUYiNMZLwMoRgeF1oujxgqrI~yYYj-KSyic0SsEdg4jDi-EnJaxfjzPtMoT82vCY1TQJcWi5cpibs-bR5hDep9KHbFx0rmmZ1y~6UDMNqHOga7DGIDzzkgPf3mbJy5ry1WSrfSZjkHZH7~MS0A7XnRGFpcLzAph6j9er6MvzkALnrpVy2E8R8vGh9eVmM8HI8ECeDMyRUBGLc9K~bqEYgXOIuk2BHja3JgsMQIq5b2kTAU5evpl25452mPpg2gz7G2Ov0BQrztAyDwmZ5TrF4LJv9iPZDjNmhkoarwH-DaLpNXes-OgE1oy~P6RPOMk1rDyGmr2Tgoy6RA__";
                }

                for (let i = 0; i < 6; i++){

                }

            })
            .catch(error => console.error('Error fetching JSON:', error))
    }
)

document.addEventListener("DOMContentLoaded", function () {
        fetch('scripts/utils/photographe.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)

                // copier élément pour tous les photographes
                let imgElement = document.getElementById("picture-4");
                if (imgElement) {
                    imgElement.src = "https://s3-alpha-sig.figma.com/img/3c2f/9f5a/880d8b9dbcade71b38c1d61bcdd3cd18?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IieulYqFdNsE20BukKvxf6FNG5XqgwUmWRJPJGoH59dtly12J~eiHkpO0fOICfNbwXsV0LXCyCjVELEgLLOTgNOWGPDO4bYeTP0gYgO5caA45lqV-MXrHAHpSc7rVHfvU6FiJA1GoXiRKcwtn75yP1QvoJxkQEbp-Z22XF5FwrLDLX0Fs5Zg6X4SNdLNg2ZsUwFPw9Cy5VzhIumcX0l7NHG0lwlgkIqhez7Y8YBkYuiDU8UtUEHgmQCq-V7-q5-qQJteraTkwkuVS7yl5EhIPg1yi9sfJVRVuYb4I9UoSsci-A0jHLAnl94mIJuRFIzRElqRAyhjkDK9jV9GBGprRg__";
                }

                for (let i = 0; i < 6; i++){

                }

            })
            .catch(error => console.error('Error fetching JSON:', error))
    }
)

document.addEventListener("DOMContentLoaded", function () {
        fetch('scripts/utils/photographe.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)

                // copier élément pour tous les photographes
                let imgElement = document.getElementById("picture-5");
                if (imgElement) {
                    imgElement.src = "https://s3-alpha-sig.figma.com/img/2873/6b51/4949b42284629210cc2f7fd58dfb1846?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DKLSkAEHfjGFDL2bIvuaDc3ONq2hu-Xi9lUWWUwcOJwpTD5JOcn-NENEu5yEqJhLTde1CODif1mYclBK6I~wIpA78BgNgRHukRr~Mz~1fq9sYviWJgxPixN5MU5-hvboB8GN-bvIgXXCkmbf1Cg8ujBXLu6vLXnWz5v9Hf1C9mBtK5EdHQwD-EV0XpASOFQj2IgcFzFpwUThczK3kUjniv42EpMQNla-lCpCxzYF44BYJW43mj~CaJSQFMRddlYPUb~ctUy~aotO5ddxDvm8EJcgjVD1-YdjE5x5BqentCilAytn4jStqzxCrBZ86~AUPVTUSfyZdgaXyDRELHWGLg__";
                }

                for (let i = 0; i < 6; i++){

                }

            })
            .catch(error => console.error('Error fetching JSON:', error))
    }
)

document.addEventListener("DOMContentLoaded", function () {
        fetch('scripts/utils/photographe.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)

                // copier élément pour tous les photographes
                let imgElement = document.getElementById("picture-6");
                if (imgElement) {
                    imgElement.src = "https://s3-alpha-sig.figma.com/img/be1d/8fba/c70670ae03d9658cf44f36721a204691?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ObnhVnMb8mMpsNeEn-xB7hoxaCNwOFjqP3BoZUvGpR4LjNsPKYyBNa4AeXH4xaToWfHWnpYlGXdrHArQU-kN6Q55YBskLKyfJhFglcOwl5NO9PsL~SbihPxI0sbljAjZTOX3sArtvdr-vzl-Z7BhMspl2RSF9w33CY2Un-JtD0tn2Fo0780p4ZEl-ND3FxZP~6BfvtymbIXAspc~-qzG-BjNa3gEfSNWCbKwOVFZoYKtB-7oZyK~894mAdZunyrY8EjjMGlEWXNwAT5GXxVekeN9OGKGuv~7il7cgbPYbwqeGCoqKBxgdtBbvuR3vV~g~g8G9xTqtZMXINqYOTP4kg__";
                }

                for (let i = 0; i < 6; i++){

                }

            })
            .catch(error => console.error('Error fetching JSON:', error))
    }
)



//ctr alt i / l