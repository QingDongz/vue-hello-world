$(function () {
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })

    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: '页面加载于 ' + new Date().toLocaleString(),
            test: '测试测试',
            boolean: false
        }
    })

    new Vue({
        el: '#app-3',
        data: {
            fuck: 'fuck you'
        }
    })

    new Vue({
        el: '#app-4',
        data: {
            todos: [
                {text: "测试一号"},
                {text: "测试二号"},
                {text: "测试三号"},
            ]
        }
    });

    new Vue({
        el: "#app-5",
        data: {
            reverse: "阿杰你是不是想学前端"
        },
        methods: {
            reverseMessage: function () {
                this.reverse = this.reverse.split("").reverse().join("");
            }
        }
    });

    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{todo.text}}</li>'
    });

    new Vue({
        el: '#app-6',
        data: {
            foodList: [
                {id: 0, text: "香蕉"},
                {id: 1, text: "苹果"},
                {id: 2, text: "梨"},
                {id: 3, text: "猪肉脯"},
            ]
        }
    })


});