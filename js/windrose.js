import * as common_r from './common_relative.js';
import * as common_ab from './common_absolute.js';
import {obj_CSV, put_CSV} from './csv.js';

const btn = document.getElementById('btn');
const is_rel = document.getElementById('is-rel');
const sel = document.getElementById('sel');

/* 실행 */
put_CSV(obj_CSV, "n1");

/* 버튼 누를시 */
btn.addEventListener('click',()=>{
    if(is_rel.checked){
        common_r.get_value('windrose');
    }else{
        common_ab.get_value('windrose');
    }
});

/*  */
sel.addEventListener('change',(e)=>{
    put_CSV(obj_CSV, e.target.value);
});

