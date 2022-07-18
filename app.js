// (function fizzBuzz(){
//     for(let i=1;i<=100;i++){
//         if(i%15==0){
//             console.log(i,"FizzBuzz")
//         }
//        else if(i%3==0){
//             console.log(i,"Fizz")
//         }
//        else if(i%5==0){
//             console.log(i,"Buzz")
//         }else{
//             null;
//         }

//     }
// })();   

// let obj = {
//     name: "vinith",
//     getname:() =>{
//         console.log(this.name)
//     }
// }
// obj.getname()

// let Time = '11:30PM';
// // Convert 12hours to 24hours
// let TimeArray = [...Time];
// let hours =[TimeArray[0]+TimeArray[1]];
// let Mintues =[TimeArray[3]+TimeArray[4]];
// let PA = [TimeArray[5]+TimeArray[6]];
// function ConvertMilitry(hour,timing){
//     let NewTime;
//     let newhour;
//     if(timing == "PM"){
//         (hour<12)?newhour=Number(hour)+12:newhour=Number(hour);
//         NewTime = `${newhour}:${Mintues}`
//         console.log(NewTime)
//     }else if(timing == "AM"){    
//         (hour==12)?newhour=00:newhour=hour;
//         NewTime = `${newhour}:${Mintues}`
//         console.log(NewTime)
//     }else{
//         console.error("enter vaild Timing")
//     }
// }

// ConvertMilitry(hours,PA)
// -> remoteok.com
// -> showwcase.com
// -> remotive.io
// -> remoteglobal.com
// -> devsnap.io
// -> workinnomads.co
// -> triplebyte.com
// -> nodes.co
// -> epicjobs.co
// -> remotehunt.com
// -> weworkremotely.com
// -> flexjobs.com


/* =================================================================
        Varibales
=================================================================*/

const UserTask = document.querySelector(".Add-Task")
const AddBtn = document.querySelector(".Add-Task-btn")
const TaskHeader = document.querySelector(".Task-Header")
const BottomBar = document.querySelector(".Small-Anime")
const CompletedHeader = document.querySelector(".Completed-Header")
const ParentTaskContainer = document.querySelector(".Task-Section")
const TaskSection1 = document.querySelector(".Task-Section-1")
const TaskSection2 = document.querySelector(".Task-Section-2")
const EmptyText1 = document.querySelector(".Text1")
const EmptyText2 = document.querySelector(".Text2")
const TaskDoneBtn = document.querySelector(".Task-Done-Btn")
const TaskDeleteBtn = document.querySelector(".Task-Delete-Btn")
let getUserTaskArray = localStorage.getItem("todos")
let UserTaskArray=[];
// let UserTaskArrayIndex = 0;

// alert("hlejraj")
// li.innerHTML=`      
// <button class="Task-Done-Btn">done</button>
// <p class="Task-Text">Lorem, ipsum Lorem ipsum dolor sit amet. Lorem, ipsum.</p>
// <button class="Delete-Task-Btn">Delete</button>
// `

/* =================================================================
Functions 

=================================================================*/
window.addEventListener("load",()=>{
        if(getUserTaskArray===null){
                alert("null")
        }else{

                console.log(getUserTaskArray);
        }
})
function OpenClose(btn, open, close) {
        btn.addEventListener('click', () => {
                open.classList.remove("clsg");
                close.classList.add("clsg");
                (TaskSection1.classList.contains("clsg")) ? BottomBar.style.cssText = "transform:translateX(264px);" : BottomBar.style.cssText = "transform:translateX(); ";
                // AddingTask()
        })

}
OpenClose(CompletedHeader, TaskSection2, TaskSection1,)
OpenClose(TaskHeader, TaskSection1, TaskSection2)

AddBtn.addEventListener("click", () => {
        if (!UserTask.value) {
                // alert('enter the task')
        } else {
                AddingTask()
                UserTask.value = "";
                // console.log(UserTaskArrayIndex)
        }
})
window.addEventListener("keydown", (e) => {
        if(e.keyCode===13){
                if (!UserTask.value) {
                        // alert('enter the task')
                } else {
                        AddingTask()
                        UserTask.value = "";
                }
        }
})
TaskSection1.addEventListener("click", DeleteorDoneTask)
TaskSection2.addEventListener("click", (e) => {
        const parent = e.target.parentElement;
        if (e.target.classList.contains("Delete-Task-Btn")) {
                parent.classList.add("falls")
                parent.addEventListener('transitionend', function () {
                        parent.remove();
                        (TaskSection2.children.length == 1) ? EmptyText2.classList.remove("clsg") : null;
                })
        }
})

function DeleteorDoneTask(e) {
        const element = e.target;
        const parent = e.target.parentElement;
        console.log(parent.children[1])
        if (e.target.classList.contains("Delete-Task-Btn")) {
                parent.classList.add("falls")
                parent.addEventListener('transitionend', function () {
                        (TaskSection1.children.length == 1) ? EmptyText1.classList.remove("clsg") : null;
                        parent.remove();
                })
        }
        else if (e.target.classList.contains("Task-Done-Btn")) {
                let doneText = parent.children[1].textContent;
                // StoreLocally(doneText)
                localStorage.setItem('todos',JSON.stringify(doneText))
                const li = document.createElement("li")
                li.classList.add("Tasks", "flex-center")
                const p = document.createElement("p");
                p.classList.add("Task-Text")
                p.innerHTML = doneText;
                console.log(parent.tagName)
                const button2 = document.createElement("button");
                TaskSection2.appendChild = (parent);
                button2.classList.add("Delete-Task-Btn")
                button2.innerHTML = "delete";
                li.appendChild(p)
                li.appendChild(button2);
                TaskSection2.append(li);
                (TaskSection2.children.length > 1) ? EmptyText2.classList.add("clsg") : EmptyText2.classList.remove("clsg");
                // alert(e.target)
                parent.classList.add("falls-left")
                parent.addEventListener('transitionend', function () {
                        parent.remove();
                        (TaskSection1.children.length <= 1) ? EmptyText1.classList.remove("clsg") : EmptyText1.classList.add("clsg");
                })
        }
}

function AddingTask() {
        (TaskSection1.children.length >= 1) ? EmptyText1.classList.add("clsg") : EmptyText1.classList.remove("clsg");
        const li = document.createElement("li");
        li.classList.add("Tasks", "flex-center")
        const button1 = document.createElement("button")
        button1.classList.add("Task-Done-Btn")
        button1.classList.add("Task-Done-Btn")
        button1.innerHTML = "done";
        const p = document.createElement("p");
        p.classList.add("Task-Text")
        p.innerHTML = UserTask.value;
        const button2 = document.createElement("button");
        button2.classList.add("Delete-Task-Btn")
        button2.innerHTML = "delete";
        li.appendChild(button1)
        li.appendChild(p)
        li.appendChild(button2);
        TaskSection1.append(li)
        // UserTaskArray.push(TaskSection1.children[UserTaskArrayIndex])
        // console.log(UserTaskArray)
        //  Deleting the Tasks 
         
        // UserTaskArrayIndex++;
        // ====adding to localstorage
        
        if(getUserTaskArray==null){
                UserTaskArray.push(UserTask.value)
                localStorage.setItem("todos",JSON.stringify(UserTaskArray))
        }else{
                UserTaskArray = JSON.parse(getUserTaskArray)
                UserTaskArray.push(UserTask.value)
                localStorage.setItem("todos",JSON.stringify(UserTaskArray))
                // localStorage.setItem("todos",JSON.stringify(UserTaskArray))
        }
        
}
function storing(){

}

function StoreLocally(Task) {
        let Tasks;
        if(!localStorage.getItem("Tasks")){
                Tasks = JSON.parse(localStorage.getItem("Tasks"));
        }else{
                Tasks = [];
        }
        Tasks.push(Task);
        localStorage.setItem("Tasks", JSON.stringify(Tasks))
}