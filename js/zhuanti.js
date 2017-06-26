var html = "";
$.ajax({
    type: "get",
    url: "api/yixi.php",
    dataType: "json",
    success: function(response) {
        console.log(response.data);
        var obj = response.data;
        $.each(obj, function(index, value) {
            // console.log(obj[index].lectures[0].lecturer);
            // console.log(obj[index].lectures[0].lecturer.nickname);
            // html += '<div class="col-md-6 contentBg">' + '<div class="picture" style="background: url(' +
            //     obj[index].background + ');  background-position: center center; background-repeat: no-repeat; background-size: cover;">' + '<div class="wordBg">' +
            //     '<h4 class="text-center">' + obj[index].title + '</h4>' + '<p class="text-center">' + obj[index].created_at + '</p>' + '</div>' + '</div>' +
            //     '<div>' + '<p class="text-left contentP">' + obj[index].desc + '</p>' +
            //     '</div>' +
            //     '<div class="dashed">' +
            //     '<p class="text-center">' + "您可以看到以下讲者的视频" + '</p>' +
            //     '</div>' +
            //     '<div class="smallBox">' +
            //     '<p class="text-center">' + '<img src=' + obj[index].lectures[0].lecturer.pic + ' class="center-block" alt="">' + '</p>' +
            //     '</div>' +
            //     '<h6 class="text-center">' + obj[index].lectures[0].lecturer.nickname + '</h6>' +
            //     '<div class="xiangqing">' +
            //     '<a href="">' + '<h4 class="text-center">' + "查看详细内容" + '</h4>' + '</a>' +
            //     '</div>' +
            //     '</div>'
            // if (index == 19) {
            //     return $(".charu").append(html);
            // }
            $(".xiangqing").children('a').eq(index).attr('href', 'xiangqing.html?' + index);
            $(".picture").eq(index).css({
                'background': 'url(' +
                    obj[index].background + ')',
                'background-position': 'center center',
                'background-repeat': 'no-repeat',
                'background-size': 'cover'
            });
            $(".wordBg").eq(index).html('<h4 class="text-center">' + obj[index].title + '</h4>' + '<p class="text-center">' + obj[index].created_at + '</p>');
            $(".contentP").eq(index).html(obj[index].desc);
            $(".smallBox").eq(index).html('<p class="text-center">' + '<img src=' + obj[index].lectures[0].lecturer.pic + ' class="center-block" alt="">' + '</p>');
            $(".charu h6").eq(index).html(obj[index].lectures[0].lecturer.nickname);
            var add = $(".list").html();
            $(".contentBg").eq(index + 1).append(add);
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