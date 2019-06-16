function getAdvice() {

    var adviceList= [];

    const url ="https://api.adviceslip.com/advice";
    fetch(url).then (responseJson => {
       // console.log(responseJson);
       adviceList.push(responseJson)
       console.log(adviceList)
    });
}


// Dependency injection
// Means you can define HTML elements inside Javascript and transfer them to html page

//var adviceDiv = "<div>" +