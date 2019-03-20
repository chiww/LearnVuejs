# LearnVuejs
Vuejs样例及笔记


## chapter01 : start here

指令: 将数据关联起来
- `v-on:input="changeGreeting"`: 监听`input`事件，执行`changeGreeting`函数;
  
事件:
- event: javascript 和 DOM 属性;


```html
<body>
	<div id="app">
		<input type="text" v-on:input="changeGreeting"></input>
		<p>{{ greeting }}</p>
	</div>
	<script>
	// You may of course also outsource this script code into a separate file (e.g. app.js) and simply import this file here
		new Vue({
			el: '#app',
			data: {
				greeting: 'Hello World!'
			},
			methods: {
				changeGreeting: function(event) {
					this.greeting = event.target.value;
				}
			}
		})
	</script>
</body>
```

## chapter02: DOM INTERACTION (Vuejs与DOM交互)

- `v-bind` 不要用普通的HTML来渲染，绑定到属性中(属性中是不允许直接插值的)
- `v-once` 仅渲染一次，保持初始值
- `v-html` 使用html来渲染变量值

```html
<div id="exercise">
   <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
    <p>VueJS is pretty cool - {{  name  }} ({{  age  }})</p>
    <!-- 2) Output your age, multiplied by 3 -->
    <p> MyName: {{getInfo().name}}  MyAge: {{  getInfo().age * 3  }}</p>
    <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
    <p>random Num: {{  getRandom()  }}</p>
    <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
    <div>
        <img style="width:100px;height:100px" v-bind:src="myImg">
    </div>
    <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
    <div>
        <input type="text" v-on:input="getVaule">
    </div>
</div>


<script>
    new Vue({
        el: '#exercise',
        data: {
            name: 'william.chi',
            age: 13,
            otherAge: 15,
            myImg: 'http://cca.ccago.cn/upload/lalacao/img/20190319/1552983707938982.jpg'
        },
        methods: {
            getInfo: function () {
                return {'name': this.name, 'age': this.otherAge}
            },
            getRandom: function () {
                return Math.random() * 10
            },
            getVaule: function (event) {
                this.name = event.target.value
            }
        }
    })
</script>
```
