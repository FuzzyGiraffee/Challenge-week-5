var saveButton = $(".btn.saveBtn.col-2.col-md-1")
var currentDay = dayjs().format('dddd, MMMM D');

$(function () {
//display current day on header
var saveButton = $(".btn.saveBtn.col-2.col-md-1")
$('#currentDay').text(currentDay)

  //Selects every button
    saveButton.each((i,btn) =>{
      //adds event listen to each button
      btn.addEventListener("click", function(){
        var hourId = this.parentElement.id
        var userInput = this.parentElement.children[1].value
        console.log(userInput)
        localStorage.setItem(hourId, userInput)
        console.log(hourId)
       })
    })
  
  $('.row.time-block').each((i,row) => {

    //grab time in dayjs hour format
    var rowTime = Number(row.id[row.id.length-1])
    rowTime += 9
    
    //grab current time
    var currentTime = dayjs().hour()

    //change class name dynamiclly to set color
    if (rowTime === currentTime){
      $(row).addClass('present')
    } else if(rowTime > currentTime){
      $(row).addClass('future')
    } else{
      $(row).addClass('past')
    }

    var storedText = localStorage.getItem(row.id)
    
    $(row).children()[1].value = storedText

  })
   

});

