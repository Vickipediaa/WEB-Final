function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("box_tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 預設顯示登入頁
document.getElementById("login").style.display = "block";





//日曆
// document.addEventListener("DOMContentLoaded", function() {
//     const calendar = document.getElementById("calendar");

//     const daysInMonth = (month, year) => new Date(year, month, 0).getDate();

//     const currentMonth = new Date().getMonth() + 1; // JavaScript months are 0-11
//     const currentYear = new Date().getFullYear();
//     const days = daysInMonth(currentMonth, currentYear);

//     for (let day = 1; day <= days; day++) {
//         const dayElement = document.createElement("div");
//         dayElement.classList.add("day");
//         dayElement.textContent = day;
//         dayElement.addEventListener("click", () => toggleBooking(dayElement));
//         calendar.appendChild(dayElement);
//     }

//     function toggleBooking(element) {
//         element.classList.toggle("booked");
//     }
// });
