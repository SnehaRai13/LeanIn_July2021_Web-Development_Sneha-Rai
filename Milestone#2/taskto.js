document.querySelector('#push').onclick = function()
{
    if(document.querySelector('#newtask input').value.length == 0)
    {
        alert("Please enter a task")
    }
    else{
        document.querySelector('#task').innerHTML
        += `
            <div class="tasks">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current = document.querySelectorAll(".delete");

        for(var i=0; i<current.length; i++)
        {
            current[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tick =document.querySelectorAll(".tasks");
        
        for(var i=0; i< tick.length; i++)
        {
            tick[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}