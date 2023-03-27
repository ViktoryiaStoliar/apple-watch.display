class AppleWatch {

    constructor() {
        setInterval(this.doData, 1000)
    }

    doData() {
        const time = document.querySelector('.time');
        const data = document.querySelector('.wrapper p');
        const date = new Date();
        data.innerHTML = `since. ${date.getFullYear()}`;
        // data.innerHTML = 
        // time.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
        time.innerHTML = date.toLocaleTimeString('ru-BY')
    }
}

const appleWatch = new AppleWatch();
