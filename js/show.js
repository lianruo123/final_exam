window.addEventListener('load', function () {
    // 模拟数据
    let dataList = [
        { name: '《文化苦旅》' }, { name: '《山河之书》' }, { name: '《红楼梦》' }, { name: '《三国演义》' }, { name: '《水浒传》' }, { name: '《西游记》' }, { name: '《命若琴弦》' }, { name: '《我与地坛》' }, { name: '《唐吉坷德》' }, { name: '《镜花水月》' }, { name: '《千年一叹》' }, { name: '《行者无疆》' }, { name: '《笛声何处》' }, { name: '《雨夜短文》' }, { name: '《活着》' }, { name: '《人生》' }, { name: '《朝花夕拾》' }, { name: '《狂人日记》' }, { name: '《莲花开落》' }, { name: '《冷月钟笛》' }
    ];
    // 计算第一次渲染条数:显示条数（>=10渲染四条，否则全部渲染完）
    let len = dataList.length >= 10 ? 10 : dataList.length;
    // 获取父容器
    let $parent = $('#scroll-wrap');
    // 先清空容器内内容
    $parent.empty();
    // 遍历添加默认滚动项
    for (let i = 0; i < len; i++) {
        $parent.append(`
                <div class="scroll-item">
                    <div class="part1-top-item-name"><a href="#" style="text-decoration: none;" >${dataList[i].name}</a></div>
                </div>`);
    };
    // 去掉前面已经渲染的内容
    dataList = dataList.slice(len);
    // 创建定时器
    let timer = null;
    let isFirst = false;
    timer = setInterval(function () {
        if (dataList.length > 0) {
            let item = dataList.shift();
            $parent.append(`
                <div class="scroll-item">
                    <div class="part1-top-item-name"><a href="#" style="text-decoration: none;" >${item.name}</a></div>
                </div>`);
            // 位置重置为0
            $('.scroll-item').css({ top: 0 });

            if (isFirst) {
                $('.scroll-item').first().remove();
            }
        }
        $('.scroll-item').animate({
            top: "-123px"
        }, 500);
        isFirst = true;
    }, 2000);
})