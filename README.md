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

#### 在HTML插值
```html
{{  x   }}
```
直接输出文本,即使`x`是HTML代码

#### 在属性中插值
不能使用`{{}}`

使用`v-bind:href=""`来绑定属性,冒号后面接参数,引号就是vue实例中的数据

`v-bind` 不要用普通的HTML来渲染，绑定到属性中(属性中是不允许直接插值的)


#### 指令
当`{{}}`不能用的时候,就需要使用指令;`v-bind`就是一种指令


#### v-once
`v-once` 仅渲染一次，保持初始值

#### 输入基础html
`v-html:="htmlCode"` 将字符串使用html来渲染
```html
<p v-html="htmlCode"></p>
```



##### 监听事件  event.html
`v-on` 监听事件，输入的参数就是事件
```html
<p v-on:click="increase">Click Me</p>
```
当触发点击事件时，执行`increase`函数;

##### 传递参数
```html
<button v-on:click="increaseStep(2, $event)">Click Me</button>
```
函数后面的就是参数;其中事件`$event`是保留关键字，不能写错；


#### 事件装饰符来修改事件
```html
    <p v-on:mousemove="updateCoordinates"> Coordinates: {{  x  }} / {{  y  }}
        - <span v-on:mousemove="dummy">DEAD SPOT</span>    <!---- 通过函数来改变事件 ---->
        - <span v-on:mousemove.stop="">DEAD SPOT 222</span>     <!------使用事件修饰符 ----->
    </p>
```

#### 监听键盘事件
```html
<textarea v-on:keyup.enter.space="alarmMe"></textarea>
```
click 鼠标点击事件


#### 在模板中编写JS代码
任何调用VUE实例的地方都可以写JS
```{{}}内可以写JS代码```


#### 19 双向绑定
`v-model="name"` 同时监听并更新数据

#### 20 使用计算来改变属性
属性依赖的时候

`computed`存在computed的属性像在`data`调用一样，不用`()`