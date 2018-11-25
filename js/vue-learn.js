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


    var dis = new Vue({
        el: '#inputDisable',
        data:{
            inputIsDisable: false
        }
    });

    var expresion = new Vue({
        el: '#expression',
        data:{
            ok: true
        }
    });

    setTimeout(function () {
        expresion.ok = false;
    }, 3000);

    var abbreviation = new Vue({
        el: '#abbreviation',
        data:{
            abb: {
                color: 'red',
            },
            myHref: 'http://www.baidu.com',
        }
    });

    var computed = new Vue({
        el: '#array-count',
        data:{
            numbers: [1, 2, 3, 4, 5]
        },
        computed:{
            count:function () {
                return this.numbers.length;
            }
        }
    })

});