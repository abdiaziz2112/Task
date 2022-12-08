document.addEventListener("DOMContentLoaded", () =>{

    // by default , submit button disabled
    document.querySelector("#submit").disabled = true;
    document.querySelector("#submit").style.backgroundColor = "#A3EBB1";
        document.querySelector("#submit").style.color = "#fff";

    document.querySelector("#task").onkeyup = () => {
        // If value of input charecter  greaterthan zero make btn disabled
        if (document.querySelector("#task").value.length > 0) {



            document.querySelector("#submit").disabled = false;
            document.querySelector("#submit").style.backgroundColor = "#18A558";
            document.querySelector("#submit").style.color = "#fff";
            
        }
        // If value of input charecter  greaterthan zero make btn enabled or active
        else{
            document.querySelector("#submit").disabled = true;
            document.querySelector("#submit").style.backgroundColor = "#A3EBB1";
            document.querySelector("#submit").style.color = "#fff";

        }
        
    }

    // find form container from dom or html file and do the fallowing task
    document.querySelector("form").onsubmit = () =>{

        // find input or txtfeild   task from dom or html file 
        const task = document.querySelector("#task").value;

         // craete new element of list
        const li = document.createElement("li");
        li.innerHTML = task;
          // add new item to task list
        document.querySelector('#tasks').append(li)
           // clear task input after submitting
        document.querySelector("#task").value = "";
        // make diabled btn when submiting form
        document.querySelector("#submit").disabled = true;
        document.querySelector("#submit").style.backgroundColor = "#A3EBB1";
        document.querySelector("#submit").style.color = "#fff";
    
        


        //stop form from submitting
        return false;
    }
 
})



