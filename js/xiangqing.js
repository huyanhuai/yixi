$.ajax({
    type: "get",
    url: "api/yixi.php?",
    dataType: "json",
    success: function(response) {
        console.log(response.data);
        var obj = response.data;
        var location = window.location.href;
        var index = location.split('?')[1];
        console.log(obj[index].id);
        // console.log(obj[index].lectures[0].lecturer);
        // console.log(obj[index].lectures[0].lecturer.nickname);
        $(".toptu").css({
            'background': 'url(' + obj[index].background + ')',
            'background-position': 'center center',
            ' background-repeat': 'no-repeat',
            'background-size': 'cover',
            'margin-top': '50px',
        });
        html = '<h3 class="text-center">' + obj[index].title + '</h3>' +
            '<p class="text-center">' + obj[index].created_at + '</p>' +
            '<p class="text-center Title1">' + obj[index].desc + '</p>' +
            '<div class="container Titlebox">' +
            '<p class="text-center Title2">' + obj[index].webcontent + '</p>' +
            '</div>' +
            '<div class="row">' +
            '<div class="col-md-4">' +
            '<img src=' + obj[index].lectures[0].cover + ' class="img-responsive" alt="">' +
            '<p class="text-center textTitle">' + obj[index].lectures[0].title + '</p>' +
            '</div>' +
            '</div>';
        return $(".addall").append(html);


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