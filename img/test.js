export function put_CSV(obj,number){
    const ipts = document.querySelectorAll('[id ^= "ipt-"]');
    
    for(let i=0; i<ipts.length; i++){
        ipts[i].value = obj[number][i];
    }
}
