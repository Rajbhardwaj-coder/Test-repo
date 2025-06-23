
function task_function(){
    // Change text Using DOM
document.getElementById("task").textContent = "The task has been successfully completed";
    //    Add event to change color.
document.getElementById("DOM").style.color = "Green";
    // Add new Element
let new_p = document.createElement("p");
new_p.textContent = "It Creates the new Element";
document.getElementById("Box").appendChild(new_p);

}







