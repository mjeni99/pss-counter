let count_people = document.getElementById("count_people")
let count = 0
function increment(){
    count = count+1
count_people.innerText = count
}
function save(){
    console.log(count)
}