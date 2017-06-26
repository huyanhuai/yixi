var html = "";
var html2 = "";
$.ajax({
    type: "get",
    url: "api/yixi.php",
    dataType: "json",
    success: function(response) {
        console.log(response.data);
        var obj = response.data;
        var time = setInterval(move, 6000);
        move();

        function move() {
            var nums = Math.floor(Math.random() * 50);
            $('.col-md-12').html(
                '<p class="text-center textSmall">' + obj[nums].lectures[0].desc + '</p>' +
                '<p class="text-center">－' + obj[nums].lectures[0].lecturer.nickname + '</p>'
            )
        }
        $(".tupic a").each(function(index) {
            // console.log(obj[index].lectures[0].lecturer);
            // console.log(obj[index].lectures[0].lecturer.nickname);
            html = ' <div class="col-md-4 spic"> ' + '<img src=' + obj[index].lectures[0].cover + '  class="img-responsive" alt="">' + '<p class="text-center textTitle">' + obj[index].lectures[0].title + '</p>' + '</div>';
            $(".tupic a").eq(index).append(html);
            if (index == 5) {
                return
            }
            // $(".spic").eq(index).children('a').html('<img src=' + obj[index].lectures[0].cover + ' class="img-responsive" alt="">');
            // $(".spic").eq(index).children('p').html(obj[index].lectures[0].title);
            // $(".spic").eq(index).children('a').attr('href', 'xiangqing.html?' + index);
            $(".tupic a").eq(index).attr('href', 'xiangqing.html?' + index);

            // html2 += ' <div class="col-md-6"> ' + '<img src=' + obj[index].background + '  class="img-responsive" alt="">' + '<span class="text-center textWord">' + obj[index].title + '</span>' + '</div>';
            // if (index == 1) {
            //     return $(".newList").append(html2);
            // }
            html2 = ' <div class="col-md-6"> ' + '<img src=' + obj[index].background + '  class="img-responsive" alt="">' + '<span class="text-center textWord">' + obj[index].title + '</span>' + '</div>';
            $(".newList a").eq(index).append(html2);
            $(".newList a").eq(index).attr('href', 'xiangqing.html?' + index);
        })

        $(".item-1").each(function(i) {
            var html4 = '<img src=' + obj[i + 1].background + ' class="img-responsive" alt="">' +
                '<div class="container pic-small">' +
                '<p class="text-center textTop">' + '<img src=' + obj[i + 1].lectures[0].lecturer.pic + ' class="center-block" alt="">' + '</p>' +
                '<p class="text-center textTop">' + obj[i + 1].lectures[0].title + '</p>' +
                '<span class="text-center textTop">' + obj[i + 1].lectures[0].lecturer.nickname + '</span>' +
                '</div>';
            $(".item-1").eq(i).append(html4);
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