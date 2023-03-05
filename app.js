const time = document.querySelector('.time');
const data = document.querySelector('p');
function doData(time_, data_) {
    
    data_.innerHTML = `since. ${new Date().getFullYear()}`;
    time_.innerHTML = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;

}
setInterval(doData, 1000, time, data)
