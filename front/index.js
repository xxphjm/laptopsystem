import doselect from './doselect.js';
import {startpage} from './startpage.js';
import {showupdate,showdelete} from "./showlist.js";
import {showinsert} from "./showinsert.js";
$(function () {
  $('#root').html(startpage);
  doselect();
  let rank=`<select id="random" class="mb-2 mt-2">
  <option >請選擇</option>
  <option name="up" value="up">低到高</option>
  <option name="down" value="down">高到低</option>
  <option name="hot" value="hot">熱銷排行</option>

</select>`;
    $('#rank').html(rank);
    $('#insert').click(function (e) { 
      $('#rank').empty();
     showinsert();
     
    });
    $("#update").click(function (e) { 
      $('#rank').empty();
      showupdate();
      
    });
    $("#delete").click(function (e) { 
      $('#rank').empty();
      showdelete();
    });
    $('#inx').click(function (e) { 
     history.go(0)
        
    });
    $('#random').change(function (e) { 
     doselect();
      
    });
});