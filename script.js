const input = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const output = document.getElementById("results-div");
checkButton.addEventListener("click", ()=>{
    if(input.value === ""){
        alert("Please provide a phone number");
    }else isValid(input.value);
});
clearButton.addEventListener("click", ()=>{
    clear();
});

const isValid = (phoneNumber) => {
    const regex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    if (!regex.test(phoneNumber)){
        output.textContent = `Invalid US number: ${phoneNumber}`;
    }
    else{
        output.textContent = `Valid US number: ${phoneNumber}`;
    }
}

const clear=()=>{
    output.textContent="";
    input.value="";
    input.focus();
}