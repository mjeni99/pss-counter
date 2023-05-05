let save_entry = document.getElementById("save_entry")
let count_people = document.getElementById("count_people")
let count = 0
function increment(){
    count = count+1
count_people.textContent = count
}
function save(){
    countStr = count + " - "
    save_entry.textContent += countStr
    console.log(count)
    count_people.textContent = 0
    count = 0
}