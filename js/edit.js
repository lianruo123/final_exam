window.addEventListener('load', function () {
    var edit = document.getElementById('edit');
    var total = document.querySelector('.total');
    var ready = document.getElementById('ready');
    var close = document.querySelectorAll('.close');
    var j_cbAll = document.getElementById('j_cbAll'); // 全选按钮
    var j_tbs = document.getElementById('j_tb').getElementsByTagName('input'); // 下面所有的复选框
    edit.addEventListener('click', function () {
        total.style.display = 'block';
        for(let j = 0;j < j_tbs.length;j++)
        {
            j_tbs[j].style.display = 'block'; 
            j_tbs[j].style.margin = '20px';
            close[j].style.display = 'block';
        }
            
    })
    ready.addEventListener('click', function () {
        total.style.display = 'none';
        for(let j = 0;j < j_tbs.length;j++)
        { 
            j_tbs[j].style.display = 'none';
            close[j].style.display = 'none';
        }
           
    })

    j_cbAll.onclick = function () {
        // this.checked 它可以得到当前复选框的选中状态如果是true 就是选中，如果是false 就是未选中
        console.log(this.checked);
        for (var i = 0; i < j_tbs.length; i++) {
            j_tbs[i].checked = this.checked;
        }
    }
    // 2. 下面复选框需要全部选中， 上面全选才能选中做法： 给下面所有复选框绑定点击事件，每次点击，都要循环查看下面所有的复选框是否有没选中的，如果有一个没选中的， 上面全选就不选中。
    for (var i = 0; i < j_tbs.length; i++) {
        j_tbs[i].onclick = function () {
            var flag = true;
            for (let i = 0; i < j_tbs.length; i++) {
                if (!j_tbs[i].checked) {
                    flag = false;
                    break;
                }
            }
            j_cbAll.checked = flag;
        }
    }
})