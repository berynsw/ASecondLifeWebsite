


var upcycleItems;

//Get json data from server
let request = new XMLHttpRequest();
request.open('GET', '/data.json', true);
request.onreadystatechange = () => {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
        upcycleItems = JSON.parse(request.responseText);
        //we can only start doing stuff with the data once it's been received (asynchronously). that's why this function is called inside here.
        doStuffWithTheData(upcycleItems);
    }
};
request.send();



function doStuffWithTheData(data){
    //this prints to the browser console
    //browser console can be found by right clicking on webpage, inspect
    //if this were in server.js it would be printed to the terminal (where the node server is running)
    console.log(data.itemName);

    //this selects an html object based on its id.
    var p1 = d3.select("#p1");
    
    //this appends some text to that object from our .json file
    p1.append("text").text(data.itemName);

}








