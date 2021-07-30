const ipt = document.querySelectorAll('[id ^= "ipt-"]');
const line = document.querySelectorAll('[id ^= "line-"]');
const dot = document.getElementsByClassName('dot');

let val_arr = [];
let per_arr = [];
let max = 20;


export function get_value(graph){
    reset_all();
    for(let val of ipt){ val_arr.push(Number(val.value));}

    if(graph == "pie-02"){
        display_pie_02();
        return;
    }

    get_max(graph);
}//get_value

function reset_all(){
    val_arr = [];
    per_arr = [];
    max = 0;
}//reset_all

function get_max(graph){
    for(let val of val_arr){
        if(max < val){max = val;}
    }
    console.log(max);
    put_percent(graph);
}//get_max

function put_percent(graph){
    
    for(let val of val_arr){
        const per = val * (graph == "bargraph" ? 90 : 100) / max;
        per_arr.push(per.toFixed(1));
    }
    switch(graph){
        case "windrose" :
            display_windrose();
            break;
        case "bargraph" :
            display_bargraph();
            break;
        case "pie" :
            display_pie();
            break;
        default : 
            break;
    }
}//put_percent

function display_windrose(){
    for(let i=0; i<per_arr.length; i++){
        dot[i].style.bottom = `${per_arr[i]}%`; 
    }
}//display_windrose

function display_bargraph(){
    console.log('asdfasf');
    for(let i=0; i<per_arr.length; i++){
        const span = line[i].getElementsByClassName('dot')[0];
        span.innerText = val_arr[i];
        line[i].style.height = `${per_arr[i]}%`; 
    }
}//display_bargraph

function display_pie(){
    for(let i=0; i<per_arr.length; i++){
        line[i].style.width = `${per_arr[i]}%`; 
        if(val_arr[i] == max){
            line[i].style.background = `var(--most)`;
        }
    }
}//display_pie


function display_pie_02(){
    let total = 0;
    for(let val of val_arr){total += val;}
    total = total.toFixed(2);
    let avg = 100 / total;
    avg = Math.round(avg);

    for(let val of val_arr){
        per_arr.push(val * avg);
    }

    let pie_arr = [];
    let add = 0;

    for(let per of per_arr){
        pie_arr.push(Math.round(per + add));
        add += per;
    }

    console.log(pie_arr);

    const pie02 = document.getElementById('pie-02');
    pie02.style.background = `
        conic-gradient(
            var(--m1) 0 ${pie_arr[0]}%, 
            var(--m2) ${pie_arr[0]}% ${pie_arr[1]}%, 
            var(--m3) ${pie_arr[1]}% ${pie_arr[2]}%,
            var(--m4) ${pie_arr[2]}% ${pie_arr[3]}%,
            var(--m5) ${pie_arr[3]}% ${pie_arr[4]}%,
            var(--m6) ${pie_arr[4]}% ${pie_arr[5]}%,
            var(--m7) ${pie_arr[5]}% ${pie_arr[6]}%,
            var(--m8) ${pie_arr[6]}% ${pie_arr[7]}%,
            var(--m9) ${pie_arr[7]}% ${pie_arr[8]}%,
            var(--m10) ${pie_arr[8]}% ${pie_arr[9]}%,
            var(--m11) ${pie_arr[9]}% ${pie_arr[10]}%,
            var(--m12) ${pie_arr[10]}% ${pie_arr[11]}%
            )
    `;
}//display_pie_02