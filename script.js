
function age() {  
    let stdate = document.getElementById('date').value;  
    let stmonth = document.getElementById('month').value; 
   let styear = document.getElementById('year').value; 

    let date = new Date();  
    let enddate = date.getDate();  
    let endmonth =1+ date.getMonth();  
    let endyear = date.getFullYear();  
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 

    if(stdate > enddate){  
     enddate = enddate + month[endmonth-1];  
     endmonth = endmonth - 1;  
    }  
    
    if(stmonth > endmonth){  
    endmonth = endmonth + 12;  
     endyear = endyear -1;  
    }  

    

    let diffdate = enddate - stdate;  
    let diffmonth = endmonth- stmonth;  
    let diffyear = endyear - styear 


    
    document.getElementById('age').innerHTML = 'AKSHITA BABY Your age is ('+diffyear +') Year , ('+diffmonth+') Month , ('+diffdate+') Day are Completed Now!';  

    if(stdate > enddate || stmonth > endmonth || styear > endyear){
        alert("Date not validate") 
        document.getElementById('age').innerHTML = 'Future date not allowed'
        }
        
}