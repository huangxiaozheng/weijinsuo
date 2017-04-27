/*
* @Author: huangxz
* @Date:   2017-04-26 13:13:54
* @Last Modified by:   huangxz
* @Last Modified time: 2017-04-26 17:38:52
*/

'use strict';
   window.onload = function(){
            var lists = document.getElementsByTagName("li");
            var rights = document.getElementById("right").getElementsByTagName("div");
            for(var i=0;i<lists.length;i++)
            {
                lists[i].index = i;  // 难点
                lists[i].onclick = function(){
                    //让所有的 btn 类名清空
                    //alert(this.index);
                    for(var j=0;j<lists.length;j++)
                    {
                        lists[j].className = "";
                    }
                    // 当前的那个按钮 的添加 类名
                    this.className = "purple";
                    //先隐藏下面所有的 div盒子
                    for(var i=0;i<rights.length;i++)
                    {
                        rights[i].style.display = "none";
                    }
                    //留下中意的那个 跟点击的序号有关系的
                    rights[this.index].style.display ="block";
                }
            }
        }