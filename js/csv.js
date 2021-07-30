export let obj_CSV = {
    test : [0, 4, 8, 12, 16, 20, 10, 10, 10, 24, 20, 20]
    , n1 : [1.3, 4, 8.3, 8.5, 12.4, 18.3, 23, 13.3, 5.2, 3.6, 3, 1.1]
    ,n2 : [0.7, 0.9, 0.9, 0.9, 1, 1.2, 2, 0.3, 0.3, 0.2, 1.2, 0.7]
    ,n3 : [2.1, 3.5, 4.5, 4.7, 6.7, 6.8, 9.1, 2.1, 1.5, 2.1, 2.2, 2.2]
    ,n4 : [0.4, 0.8, 1.6, 3.9, 6.8, 7.9, 11.1, 6.3, 2.6, 1.6, 0.9, 0.6]
    ,n5 : [1.4, 2.1, 2.9, 2.1, 2.1, 1.8, 1.7, 1.3, 2.2, 2.9, 3, 1.7]
    ,n6 : [1.5, 1, 1.4, 1, 0.8, 0.7, 0.5, 1.3, 3.3, 4.6, 3.3, 2.1]
    ,n7 : [1.4, 1.6, 1.1, 0.6, 0.8, 0.7, 0.4, 0.7, 1.6, 2.7, 2.5, 1.8]
    ,n8 : [2.8, 2.1, 2.6, 2.1, 2.8, 2.6, 3.2, 4.1, 10.1, 14.2, 9.9, 5.7]
    ,n9 : [0, 0, 0.1, 0.2, 0.4, 0.7, 0.6, 0.6, 0.1, 0, 0.1, 0.1]
    ,n10 : [0.1, 0.1, 0.3, 0.5, 0.9, 1.4, 1, 0.2, 0.2, 0.2, 0.1, 0.3]
    ,n11 : [0.2, 0.5, 0.9, 0.8, 1, 0.8, 0.9, 0.2, 0.1, 0.2, 0.2, 0.3]
    ,n12 : [0.7, 0.7, 1, 1.3, 1, 0.7, 0.8, 0.6, 1.1, 1.4, 1.3, 0.8]
    ,n13 : [0.1, 0.2, 0.7, 1.3, 2.6, 3.9, 4.2, 0.8, 0.2, 0.1, 0.2, 0.1]
    ,n14 : [0.9, 2.2, 2.8, 3.3, 3.2, 2.8, 3.1, 1, 1.1, 1.5, 1.3, 1.1]
    ,n15 : [0.3, 0.7, 1.2, 2.4, 3.2, 4.5, 5.6, 0.9, 0.3, 0, 0.4, 0.3]
    ,n16 : [0.5, 2.4, 5.6, 9.1, 12.1, 15.8, 20.4, 10.5, 4.5, 2, 1.2, 0.5]
    ,n17 : [0.1, 0.2, 0.8, 1.8, 3.7, 4.6, 2.1, 0.3, 0.5, 0.2, 0, 0]
    ,n18 : [0.1, 0.2, 0.3, 2, 3.9, 5.6, 5.8, 0.5, 0.1, 0, 0, 0]
    ,n19 : [0.4, 0.3, 0.3, 0.2, 0.4, 0.3, 0.2, 0.3, 0.5, 1.1, 0.9, 0.6]
    ,n20 : [1.3, 1.2, 1.9, 1.4, 1.6, 1.3, 0.8, 0.5, 1, 1.1, 0.8, 1]
}

export function put_CSV(obj,number){
    const ipts = document.querySelectorAll('[id ^= "ipt-"]');
    
    for(let i=0; i<ipts.length; i++){
        ipts[i].value = obj[number][i];
    }
}
