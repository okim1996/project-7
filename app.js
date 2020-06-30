const alertBanner = document.getElementById("alert");

// create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>`

alertBanner.addEventListener("click" , function (event){
    const element = event.target;
    if(element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});


const alertBanner2 = document.getElementById("alert2");

// create the html for the banner
alertBanner2.innerHTML =
`
<div class="alert-banner2">
<p><strong>Alert:</strong> You have <strong>6</strong> additional overdue tasks
to complete</p>
<p class="alert-banner-close2">x</p>
</div>`

alertBanner2.addEventListener("click" , function (event){
    const element = event.target;
    if(element.classList.contains("alert-banner-close2")) {
        alertBanner2.style.display = "none";
    }
});



const notificationIcon = document.querySelector(".notification-icon");
notificationIcon.addEventListener("click",function (event) {
    const element = event.target;
    if(element.classList.contains("notification-icon")){
        alertBanner.style.display = "flex";
        alertBanner2.style.display = "flex";
    }

})



function addData(chart,data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}


function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

//hourly chart


const trafficHourlyCanvas = document.getElementById("main-chart");

let trafficHourlyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [1750, 250, 2000, 1000, 2500, 750, 250, 2050, 124, 2134,
    2500],
    backgroundColor: 'rgba(255, 69, 0, .3)', //orangered
    borderWidth: 1,
    }]
    };

let trafficHourlyOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
};


//daily chart

const trafficDailyCanvas = document.getElementById("main-chart");

let trafficDailyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [321, 523, 1975, 643, 2492, 916, 1975, 2250, 2250, 2250,
    2500],
    backgroundColor: 'rgba(255, 0, 255, .3)', //magenta
    borderWidth: 1,
    }]
    };

let trafficDailyOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
};



// weekly chart
const trafficWeeklyCanvas = document.getElementById("main-chart");

let trafficWeeklyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };

let trafficWeeklyOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
};


    

//monthly chart

const trafficMonthlyCanvas = document.getElementById("main-chart");

let trafficMonthlyData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
    data: [2500, 2400, 2300, 2200, 2100, 2000, 1900, 1800, 1700, 1600,
    2500],
    backgroundColor: 'rgba(0, 255, 0, .3)', //Lime
    borderWidth: 1,
    }]
    };

let trafficMonthlyOptions = {
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
};




var mainChart = new Chart(trafficWeeklyCanvas, {
    type: 'line',
    data: trafficWeeklyData,
    options: trafficWeeklyOptions
    });


//chart event listeners

var hourlyButton = document.querySelector(".hourly-button");
var dailyButton = document.querySelector(".daily-button");
var weeklyButton = document.querySelector(".weekly-button");
var monthlyButton = document.querySelector(".monthly-button");

hourlyButton.addEventListener("click", function(event) {
    const element = event.target;
    if(element.classList.contains("hourly-button")) {
        hourlyButton.style.backgroundColor = "yellow";
        dailyButton.style.backgroundColor = "#87CEFA";
        weeklyButton.style.backgroundColor = "#87CEFA";
        monthlyButton.style.backgroundColor = "#87CEFA";
        mainChart = new Chart(trafficHourlyCanvas, {
            type: 'line',
            data: trafficHourlyData,
            options: trafficHourlyOptions
            });
    }
})

dailyButton.addEventListener("click", function(event) {
    const element = event.target;
    if(element.classList.contains("daily-button")) {
        hourlyButton.style.backgroundColor = "#87CEFA";
        dailyButton.style.backgroundColor = "yellow";
        weeklyButton.style.backgroundColor = "#87CEFA";
        monthlyButton.style.backgroundColor = "#87CEFA";
        mainChart = new Chart(trafficDailyCanvas, {
            type: 'line',
            data: trafficDailyData,
            options: trafficDailyOptions
            });
    }
})

weeklyButton.addEventListener("click", function(event) {
    const element = event.target;
    if(element.classList.contains("weekly-button")) {
        hourlyButton.style.backgroundColor = "#87CEFA";
        dailyButton.style.backgroundColor = "#87CEFA";
        weeklyButton.style.backgroundColor = "yellow";
        monthlyButton.style.backgroundColor = "#87CEFA";
        mainChart = new Chart(trafficWeeklyCanvas, {
            type: 'line',
            data: trafficWeeklyData,
            options: trafficWeeklyOptions
            });
    }
})

monthlyButton.addEventListener("click", function(event) {
    const element = event.target;
    if(element.classList.contains("monthly-button")) {
        hourlyButton.style.backgroundColor = "#87CEFA";
        dailyButton.style.backgroundColor = "#87CEFA";
        weeklyButton.style.backgroundColor = "#87CEFA";
        monthlyButton.style.backgroundColor = "yellow";
        mainChart = new Chart(trafficMonthlyCanvas, {
            type: 'line',
            data: trafficMonthlyData,
            options: trafficMonthlyOptions
            });
    }
})


const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    }

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };

const mobileOptions = {
    legend: {
    position: 'right',
    labels: {
    boxWidth: 20,
    fontStyle: 'bold'
    }
    }
    }
        
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });
        
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
    
send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });
    


//search functionality

$('.form-field').keyup(function (event) {        
    for(var i = 1 ; i < 5 ; i++){      
        if(!($(`.members-container${i} .members-text p`).text().toLowerCase().includes(this.value.toLowerCase()))){
            $(`.members-container${i}`).css("display" , "none");
        } else {            
            $(`.members-container${i}`).css("display" , "flex");
        }
    }
});

//local storage

var notificationOn = document.querySelector('.notification-on');
var notificationOff = document.querySelector('.notification-off');
var profileOn = document.querySelector('.profile-on');
var profileOff = document.querySelector('.profile-off'); 
var timeButton = document.querySelector('.selected-timezone');
var timezone = window['localStorage'].getItem('timezone');
    
if(window['localStorage'].getItem('save') === "true"){
    timeButton.textContent = window['localStorage'].getItem('timezone'); 
}

$("#notificationSetting").click(function(event) {
    window['localStorage'].setItem('notify-on',$(".notification-on").css('color'));
    window['localStorage'].setItem('notify-off',$(".notification-off").css('color')); 
})

$("#profileSetting").click(function(event) {
    window['localStorage'].setItem('profile-on',$(".profile-on").css('color'));
    window['localStorage'].setItem('profile-off',$(".profile-off").css('color')); 
})


$("#timezone").click(function (event) {
    timezone = this.value;            
})

$('#save').click(function() {
    alert("Your settings have been saved!");
    window['localStorage'].setItem('save' , 'true');
    window['localStorage'].setItem('timezone' , timezone);
})

$('#cancel').click(function(event){
    alert("Settings have been reverted to default!");
    window['localStorage'].setItem('timezone' , "Select a Timezone");    
    window['localStorage'].setItem('save' , 'false');
})





















