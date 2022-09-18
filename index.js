function tipAmount(e){
    //Get user values
    let bill = Number(document.getElementById("bill").value)
    console.log(bill)
    let tip = Number(document.getElementById("tip").value/100)
    console.log(tip)
    //Calculations
    let totalTip = bill * tip
    console.log(totalTip)
    let total = `Your bill total: ${totalTip + bill} as your bill is:
    ${bill} and tip is ${totalTip}`
    console.log(total)
    //Display the total amount
    let answer= document.getElementById("answer")
    let answerpara = document.createElement("p")
    answerpara.innerHTML = total
    answer.appendChild(answerpara)
}