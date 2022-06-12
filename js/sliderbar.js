window.addEventListener('load', function () {
    var sliderbar = document.querySelector('.slider-bar');
    var banner = document.querySelector('.banner');
    var bannerTop = banner.offsetTop
    var sliderbarTop = sliderbar.offsetTop - bannerTop;
    var part = document.querySelector('.part');
    var goBack = document.querySelector('.goBack');
    var partTop = part.offsetTop;
    document.addEventListener('scroll', function () {
        if (window.pageYOffset >= bannerTop) {
            sliderbar.style.position = 'fixed';
            sliderbar.style.top = sliderbarTop + 'px';
        } else {
            sliderbar.style.position = 'absolute';
            sliderbar.style.top = '500px';
        }
        if (window.pageYOffset >= partTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }

    })
    goBack.addEventListener('click', function () {
        animate(window, 0);
    });
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }
    // 头像
    var link = document.querySelector('#link');
    var self = document.querySelector(".self");
    link.addEventListener('mouseover', function () {
        self.style.display = 'block';
    });
    link.addEventListener('mouseout', function () {
        self.style.display = 'none';
    });
    self.addEventListener('mouseover', function () {
        self.style.display = 'block';
    });
    self.addEventListener('mouseout', function () {
        self.style.display = 'none';
    });

    
    // 发表
    var btn = document.querySelector('button');
    var text = document.querySelector('textarea');
    var content = document.querySelector('.content');
    var ul = content.querySelector('ul');
    btn.onclick = function () {
        if (text.value == '') {
            alert('您没有输入内容');
            return false;
        } else {
            var li = document.createElement('li');
            li.innerHTML = text.value + "<a href='javascript:;' class='xxx'>撤销</a>";
            text.value = '';
            ul.appendChild(li);
            var as = document.querySelectorAll('.xxx');
            for (var i = 0; i < as.length; i++) {
                as[i].onclick = function () {
                    ul.removeChild(this.parentNode);
                }
            }
        }
    }
})