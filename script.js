
//Getting Values using Id's

let incomeValue=(document.getElementById('income-expenses'));
let foodValue=(document.getElementById('food-expenses'));

let rentValue=(document.getElementById('rent-expenses'));
let clothesValue=(document.getElementById('clothes-expenses'));
let  totalExpenses=document.getElementById('total-expenses');
let  savingAmount=document.getElementById('saving-amount');
let  balanceAmount=document.getElementById('balance-amount');
let  finalBalance=document.getElementById('final-balance');

let saveInput=document.getElementById('save-input');
//Calculating Total Expenses(Food Expenses,Rent Expenses,Clothes Expenses)
function totalCalculatedExpenses(amountOne,amountTwo,amountThree){

    return Number(amountOne)+Number(amountTwo)+Number(amountThree);
}
//Calculating Total Expenses(Food Expenses,Rent Expenses,Clothes Expenses)


//Using Add Event Listeners
document.getElementById('calculate-expenses').addEventListener('click',function(){
    
  
if(incomeValue.value<0 || incomeValue.value==""){
    document.getElementById('secret').style.display='block'; 
}
else if(Number(foodValue.value)>Number(incomeValue.value)|| foodValue.value==""||foodValue.value<0){
     document.getElementById('secret1').style.display='block'
}
 
 else if(Number(rentValue.value)>Number(incomeValue.value)|| rentValue.value==""||rentValue.value<0){
    document.getElementById('secret2').style.display='block';
 }
 else if(Number(clothesValue.value>Number(incomeValue.value))|| clothesValue.value==""||clothesValue.value<0){
    document.getElementById('secret3').style.display='block';
 }


else{

    const expensesAmount=totalCalculatedExpenses(foodValue.value,rentValue.value,clothesValue.value);
    totalExpenses.textContent=expensesAmount ;
    
    foodValue.value='';
    rentValue.value='';
    clothesValue.value='';
    
    
    const totalValue=totalExpenses.textContent;
  
    balanceAmount.textContent=Number(incomeValue.value)-totalValue;

}


    




})



document.getElementById('save-button').addEventListener('click',function(){


    const saving=(Number(incomeValue.value)*(Number(  document.getElementById('save-input').value)))/100;

    document.getElementById('saving-amount').textContent=saving;


 if( Number( balanceAmount.textContent)>Number(document.getElementById('saving-amount').textContent) ){
    document.getElementById('final-balance').textContent=(balanceAmount.textContent-saving);


 }
else{
    document.getElementById('final-balance').textContent='Remaining Balance Cannot be Calculated'; 
}


// const saving=(Number(incomeValue.value)*(Number(  document.getElementById('save-input').value)))/100;


// document.getElementById('saving-amount').textContent=saving;


// document.getElementById('final-balance').textContent=(balanceAmount.textContent-saving);

 

})




