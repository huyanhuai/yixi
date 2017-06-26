$.ajax({
    type: "get",
    url: "api/yixi.php",
    dataType: "json",
    success: function(response) {
        console.log(response.data);
        var obj = response.data;
        var nums = Math.floor(Math.random() * 50);
        $(".tupic a").each(function(index) {
            html = ' <div class="col-md-4 spic"> ' + '<div class="container pic-small">' +
                '<p class="text-center textTop textTop1">' + '<img src=' + obj[index + nums].lectures[0].lecturer.pic + ' class="center-block" alt="">' + '</p>' +
                '<p class="text-center textTop">' + obj[index + nums].lectures[0].title + '</p>' +
                '<span class="text-center textTop">' + obj[index + nums].lectures[0].lecturer.nickname + '</span>' +
                '</div>' + '<img src=' + obj[index + nums].lectures[0].cover + '  class="img-responsive" alt="">' + '<p class="text-center textTitle">' + obj[index + nums].lectures[0].title + '</p>' + '</div>';
            $(".tupic a").eq(index).append(html);
            if (index == 5) {
                return
            }
            var i = nums + index;
            $(".tupic a").eq(index).attr('href', 'xiangqing.html?' + i);
        })
    }
});
// 返回顶部
$(window).scroll(function() {
    var scrollValue = $(window).scrollTop();
    scrollValue > 1000 ? $('.backTop').fadeIn() : $('.backTop').fadeOut();
});
$('.backTop').click(function() {
    $("html,body").animate({
        scrollTop: 0
    }, 300);
});