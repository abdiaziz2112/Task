document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector("form").onsubmit = () =>{
        const task = document.querySelector("#task").value;
        console.log(task)


        //stop form from submitting
        return false;
    }
 
})