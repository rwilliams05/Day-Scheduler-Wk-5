//get current day and display in header
let currentDayEl = $("#currentDay");
function displayDate() {
    let today = moment().format('dddd, MMM DD');
    currentDayEl.text(today);
}
displayDate();

//Get current hour
function hourUpdate() {
    let currentHour = parseInt (moment().format('H'));
    console.log(currentHour)


    // //remove any previous time classes assigned to textarea
    $("textarea").each(function () {
        let textarea = parseInt($(this).attr("id").split("-")[1]);
        //console.log(textarea)
        $(this).removeClass("past present future");

    })

    //     //if currentHour is less than textarea hour, background is green, indicating it is in the future
    $("textarea").each(function () {
        let textarea = parseInt($(this).attr("id").split("-")[1]);
        //console.log(textarea)
        if (currentHour < textarea) {
            $(this).addClass("future");
        }
    })
    //if currentHour is is greater than textarea hour, background is gray, indicating it is in the past
    $("textarea").each(function () {
        let textarea = parseInt($(this).attr("id").split("-")[1]);
        //console.log(textarea)
        if (currentHour > textarea) {
            $(this).addClass("past");
        }
    })
    //if currentHour equals textarea hour, background id read, indicating it is the present hour
    $("textarea").each(function () {
        let textarea = parseInt($(this).attr("id").split("-")[1]);
        console.log(textarea)
        if (textarea == currentHour) {
            $(this).addClass("present");
        }
    })
};


function getText() {

    $('textarea').each(function () {
        let hourNumber = $(this).attr("id").split("-")[1];
        const userInput=localStorage.getItem(hourNumber);
        $(this).val(userInput);

    })

}

hourUpdate()
getText()


//when saveBtn is clicked, key and contents of textarea are sent to local storage
$(".saveBtn").on("click", function () {
    let userInput = $(this).siblings("textarea").val()
    //let time = $(this).siblings(".hour").text().trim()
    let hourNumber = $(this).siblings("textarea").attr("id").split("-")[1];
    console.log(hourNumber)
    localStorage.setItem(hourNumber, userInput)

    

})
