$(function () {
    var vm = new Vue({
        el: '#app-1',
        data: {
            message: "test"
        }
    });

    setTimeout(function () {
        vm.message = "fuck "
    },1000)


    var vm2 = new Vue({
        el: '#app-2',
        data:{
            rawHtml:"<p style='color: red'>测试插入HTML</p>"
        }
    })
});