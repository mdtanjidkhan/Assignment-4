  console.log("click me")
let interviewCount = 0;
let rejectedCount = 0;
let actionCount = 0;
let allCards = document.querySelectorAll('.job-card');
let totalNumber = allCards.length;
console.log(totalNumber);
// shurute total 
document.getElementById('total-count').innerText = totalNumber;
// filter butoon seleted 
const btnAll = document.getElementById('all-btn');
const btnInterview = document.getElementById('interview-btn');
const btnRejected = document.getElementById('rejected-btn');

function applyFilter(filterType) {
    let found = false;
    const noData = document.getElementById("noData");

    allCards.forEach(card => {
        if (filterType === 'all') {
            card.style.display = "block";
            found = true;
        } else if (filterType === 'is-interview' && card.classList.contains('is-interview')) {
            card.style.display = "block";
            found = true;
        } else if (filterType === 'is-rejected' && card.classList.contains('is-rejected')) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    noData.style.display = found ? "none" : "block";
    let btnId = (filterType === 'all') ? 'all-btn' : (filterType === 'is-interview' ? 'interview-btn' : 'rejected-btn');
    showOnly(btnId);
}

function showOnly(id){
    const buttons = [btnAll, btnInterview, btnRejected];
    buttons.forEach(btn =>{
        btn.classList.remove('bg-blue-600', 'bg-white', 'text-white');
         btn.classList.add('bg-gray-300',  'text-black');

    })
    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300');
    selected.classList.add('bg-blue-600')
                     }

        // interview btn 
                     document.querySelectorAll(".interview-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    const card = this.closest(".job-card");


    if (card.classList.contains("is-interview")) return;


    if (card.classList.contains("is-rejected")) {
      rejectedCount--;
    }

    card.classList.add("is-interview");
    card.classList.remove("is-rejected");

    interviewCount++;
    document.getElementById("interview-count").innerText = interviewCount;
    document.getElementById("rejected-count").innerText = rejectedCount;
   
    
    let status = card.querySelector(".status-text");
    status.innerText = "INTERVIEW";
    status.style.color = "green";

    
    applyFilter("is-interview");
  });
});
//  rejected btn
document.querySelectorAll(".rejected-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    const card = this.closest(".job-card");
    if (card.classList.contains("is-rejected")) return;
    if (card.classList.contains("is-interview")) {
      interviewCount--;
    }
    card.classList.add("is-rejected");
    card.classList.remove("is-interview");

    rejectedCount++;

    document.getElementById("interview-count").innerText = interviewCount;
    document.getElementById("rejected-count").innerText = rejectedCount;


    let status = card.querySelector(".status-text");
    status.innerText = "REJECTED";
    status.style.color = "red";

    
    applyFilter("is-rejected");
  });
});

document.querySelectorAll('.delete-btn').forEach(btn =>{
   btn.addEventListener('click', function() {
    const card = this.closest(".job-card");
    if(card.classList.contains('is-interview')){
        interviewCount--;
        document.getElementById('interview-count').innerText = interviewCount;
    }
    if(card.classList.contains('is-rejected')){
        rejectedCount--;
        document.getElementById('rejected-count').innerText = rejectedCount;
    }

     totalNumber--;
     card.remove();
     document.getElementById('total-count').innerText = totalNumber;
})
})


btnAll.addEventListener('click', () =>{
    applyFilter('all');
})
btnInterview.addEventListener('click',() =>{
    applyFilter('is-interview');
})
btnRejected.addEventListener('click',() =>{
    applyFilter('is-rejected');
})
Window.onload = () => applyFilter('all');


























// interview btn



// document.querySelectorAll('.interview-btn').forEach((btn) => {
//     btn.addEventListener('click', function() {
    
//         interviewCount++;
//         actionCount++;
//         document.getElementById('interview-count').innerText = interviewCount;
//         document.getElementById('job-count-text').innerText = actionCount + " & 8 jobs";
//         const currentCard = this.closest('.job-card');
//         currentCard.querySelector('.status-text').innerText = "INTERVIEW";
//         currentCard.querySelector('.status-text').style.color = "green";

    
//         currentCard.classList.add('is-interview');
//         this.disabled = true;

    
//         // this.style.display = 'none';
//         // currentCard.querySelector('.rejected-btn').style.display = 'none';
//     });
// });
// rejected btn
// document.querySelectorAll('.rejected-btn').forEach((btn) => {
//     btn.addEventListener('click', function() {
    
//         rejectedCount++;
//         actionCount++;
//         document.getElementById('rejected-count').innerText = rejectedCount;
//         document.getElementById('job-count-text').innerText = actionCount + " & 8 jobs";
//         const currentCard = this.closest('.job-card');
//         currentCard.querySelector('.status-text').innerText = "REJECTED";
//         currentCard.querySelector('.status-text').style.color = "red";

    
//         currentCard.classList.add('is-rejected');
//    this.disabled = true;
    
//         // this.style.display = 'none';
//         // currentCard.querySelector('.rejected-btn').style.display = 'none';
//     });
// });

// // button all filter 
// document.getElementById("all-btn").addEventListener('click',() =>{
//     allCards.forEach(card => card.style.display = "block");
// })
// interview btn
// document.getElementById("interview-btn").addEventListener('click', () =>{
   
//     let found = false;
//     allCards.forEach(card =>{
//         if(card.classList.contains('is-interview')){
//             card.style.display = "block";
//             found = true;
//         }else{
//             card.style.display = "none";
//         }
//     })
//     const noData = document.getElementById("noData");
//     i
// document.getElementById("rejected-btn").addEventListener('click', () =>{
//     let found = false;
//     allCards.forEach(card =>{
//         if(card.classList.contains('is-rejected')){
//             card.style.display = "block";
//             found =f(found === false){
//         noData.style.display = "block";
//     }else{
//         noData.style.display = "none";
//     }
// })
// //   rejecte btn true;
//         }else{
//             card.style.display = "none";
//         }
//     })
//     const noData = document.getElementById("noData");
//     if(found === false){
//         noData.style.display = "block";
//     }else{
//         noData.style.display = "none";
//     }
// })

// rejetced btn to interview btn 
// document.querySelectorAll(".rejected-btn")
//  .forEach(btn =>{
// btn.addEventListener('click', function(){
//     const card = this.closest('.job-card');
//     if(card.classList.contains('is-interview')){
//         card.classList.remove('is-inteview');
//         interviewCount--;
//         document.getElementById('interview-btn').innerText = "INTERVIEW" + interviewCount;
//     };
//     if(!card.classList.contains('is-rejected')){
//         card.classList.add('is-rejected');
//         rejectedCount++;
        
//     }
//     card.style.display = 'none';
//     card.querySelector('.status-text').innerText = "REJECTED";
//     card.querySelector('.status-text').style.color = "red";


// })
//  })


//  document.querySelectorAll(".interview-btn")
//  .forEach(btn =>{
// btn.addEventListener('click', function(){
//     const card = this.closest('.job-card');
//     if(card.classList.contains('is-rejected')){
//         card.classList.remove('is-rejected');
//         rejectedCount--;
//         document.getElementById('rejected-btn').innerText = "REJECTED" + rejectedCount;
//     };
//     if(!card.classList.contains('is-interview')){
//         card.classList.add('is-interview');
//         interviewCount++;
        
//     }
//     card.style.display = 'none';
//     card.querySelector('.status-text').innerText = "INTERVIEW";
//     card.querySelector('.status-text').style.color = "green";


// })
//  })


// // const btnAll = document.getElementById('all-btn');
// // const interview = document.getElementById('interview-btn');
// // const rejected = document.getElementById('rejected-btn');



// // function showOnly(id){
// //     btnAll.classList.remove('bg-white', 'text-black');
//     interview.classList.remove('bg-white', 'text-black')
//     rejected.classList.remove('bg-white', 'text-black')

//     btnAll.classList.add('bg-gray-300', 'text-white');
//     interview.classList.add('bg-gray-300', 'text-white');
//     rejected.classList.add('bg-gray-300', 'text-white');
//     console.log(id)

//     const selected = document.getElementById(id);
//     console.log(selected);
//     selected.classList.remove('bg-gray-300', 'text-white');
//     selected.classList.add('bg-blue-600', 'text-white');

// }