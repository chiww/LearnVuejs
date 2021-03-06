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
属性依赖变量的时候，其中一个变量发生变化，所有`methods`都会重复计算一次；
为避免这种情况，使用`computed`,仅当`computed`内的变量发生变化时才重新计算

注意：
- `computed`存在computed的属性像在`data`调用一样，不用`()`


#### 21 计算属性的替代: 观察
可以处理异步，computed不能处理异步;
把要监听的变量设为key，在函数中指定当key发生变更时需要执行的逻辑

#### 22 使用缩写来节省时间

- v-on : 监听事件  >>  `@` >> `@click`
- v-bind : 绑定属性到HTML  >> `:`  >> `:href`

#### 23 24 练习

#### 25 CSS类动态样式 - 基础

`:class="{'red': attachRed}` 绑定CSS属性，指定类名`red`, `attachRed`是一个bool值

#### 26 CSS类动态样式 - 使用对象
```html
<div>
<div class="demo" @click="attachRed = !attachRed" :class="divClass"></div>
</div>

<script>
new Vue({
    computed: {
            divClass: function () {
                return {
                    red: this.attachRed,
                    blue: !this.attachRed
                }
            }
})
</script>
```
通过computed计算，返回一个属性

#### 27 CSS动态样式 - 使用命名
- 可以直接指定类名，非bool值
- 有两种方式选择元素，一种是类名; 另外一种是对象，其中key是类名, value是bool值；

```html

    <div class="demo" :class="[color, {red: attachRed}]"></div>
    <input type="text" v-model="color">

<script>

    new Vue({
        el: '#app',
        data: {
            attachRed: false,
            color: 'green'
        }
    })
</script>
```


##### 28 内联style设置动态样式
除了可以指定类名， 也可以直接定义style样式
```html

    <div class="demo" :style="myStyle"></div>
    <div class="demo" :style="[myStyle, {height: width + 'px'}]"></div>
```

## chapter03: 使用条件和列表渲染

#### 2 用v-if来作条件渲染

```html

<div id="app">

    <p v-if="show">You can see me!<span>hello</span></p>
    <p v-else> Now you see me !</p>
    <p>Do you also see me?</p>
    <button @click="show = !show">switch</button>
</div>
<script>

    new Vue({
        el: '#app',
        data: {
            show: true
        }
    })

```

#### 3 

`<template>` HTML5标签，不会在DOM中被渲染


#### 11 监听事件



## chapter 05

#### 2 Vue实例的一些基础 
Vue 实例某种成都上就是一个DOM对象，与业务逻辑之间的中间人一样；我们讲全部业务逻辑封装到Vue实例中；

允许多个Vue实例

可以从外部访问实例


#### 3 使用多个Vue实例

#### 4 从外部访问Vue实例
(像普通访问对象一样访问实例内的变量)

#### 5 Vue是如何管理数据和方法的
Vue对属性设置代理，在属性上设置了监听器，以及我们可以通过直接访问存储的Vue的实例vm1变量;

#### 6 深入分析$el和$data $refs

$el 控制HTML模板
$data 保存数据   外部可以这样访问: vm1.$data.title

#### 7 在你的模板中使用$refs

refs不是HTML，是Vue关键字
返回是一个JavaScript对象
直接修改DOM，但没有修改Vue的模板，重新渲染后，会还原；

```html
<div id="app">
  <h1 ref="heading">{{ title }}</h1>
  <button v-on:click="show" ref='myButton'>Show Paragraph</button>
  <p v-if="showParagraph">This is not always visible</p>
</div>

<script>
vm1.$refs.heading.innerText = 'refs text!!!!'
console.log(vm1.$refs.myButton.innerText)
</script>

```

#### 8 去哪里可以学到更多的Vue API
vuejs.org/api

#### 9 挂载一个模板
$符号是 Vue提供的


#### 10 使用组件

#### 11 一些模板的限制
分两种：
1. 使用模板(带HTML代码),受限制的浏览器，对大小写不敏感的问题；
2. 使用预编译的，直接是JavaScript代码在浏览器执行；预编译的版本更小，执行速度更快;

#### 12 Vue是怎么更新DOM的

Vue >>>  虚拟DOM >> DOM

#### 13 Vue实例的生命周期

1. beforeCreate()
2. created()
3. beforeMount()
4. beforeUpdate()
5. update()
6. beforeDestory()
7. destoryed()

#### 14 生命周期实战

#### 15 本章总结
THE VUE.JS INSTANCE

 
## chapter 06: Webpack和Vue命令行，真实的开发流程

#### 02 VUE CLI & WORKFLOWS

#### 03 workflows 
#### 04 Vue CLI

获取Vue项目的模板，空白的项目模板

```
npm install -g vue-cli   # 全局安装
```

可以使用大量的可用模板

- simple: index.html + Vue CDN import , 基本和使用JSfiddle一样
- webpack-simple: Basic Webpack Workflow ，可以编译单一文件模板,SPA,可以使用ES6
- webpack: Complex Webpack Workflow (incl Testing)
- browserify/browserify-simple: Browserify Workflows

#### 05 Vue命令行安装以及创建一个新的项目
```
sudo npm install -g vue-cli   # 使用npm来管理前端依赖,nodejs作为服务器
vue init webpack-simple firproject
cd firproject 
npm install         # 拉取依赖，模板会生成package.json文件，此文件是管理依赖用的;
npm run dev      # 启用一个供开发使用的服务器，会一直运行，会自动检测文件变更并重新编译；
```
#### 06 Webpack模板目录概述
- .babelrc: 基本配置文件，是JavaScript最新版本ES6的转译器；把ES5转成ES6，用来支持新版本在旧版本上的运行;
- index.html: 最后发布的文件，最后呈现出来的页面，但实际上只引入了一个Vue应用，和之前JSFiddle一样；此处引用的是webpack已经编译好的文件；位于dist/build.js的js文件；bundle意思是我们可以把代码拆分为多个文件，最后整合成一个打包好的文件；
开发模式下看不到/dist文件，都保存在内存中；如果要看到dist文件，需要编译；
- webpack.config.js: 负责所有创建工作，以及转码和设置创建过程，并且处理不同的文件类型；

#### 07 理解".vue"后缀文件
原生的DOM模板有限制，会全部DOM元素转换成JS来实现；
- main.js: 当打包后的JS文件在index.html里被加载时,main.js是首先被执行的；这个地方加载Vue对象；
```
render: h => h(App)    # 获取el属性指定的DOM，但不分析模板；h是参数，实际上是之后要执行的函数，这个函数要接收的是要渲染的Vue模板；这个函数会自动渲染特定的模板，渲染el选择器指定的Vue程序运行的地方；
```

- .vue： Vue文件，含一个template、script、可选的style标签，这三者就有了有效的Vue文件，也就是“单文件模板”，这个文件模板和脚本逻辑分离

#### 08 理解Vue文件中的对象

#### 09 如何构建一个真正的可发布的应用

#### 10 本章总结

## chapter07: 组件 Components

#### 02 组件介绍
- 直接使用`template`，仅对第一个元素有效，第二个元素起不会起作用，即使使用`class`选择器;
- `template`不可复用

#### 03 使用数据方法来想组件保存数据
- 如果定义一个全局的data对象，则该对象是共享一个内存块的，任意一个组件对该对象的修改都会影响全局;


#### 04 将组件注册到局部或全局
- 直接在JS文件中定义的组件是全局插件
- 在JS文件可以预先设置组件的参数，在Vue对象中再注册组件，这是局部注册;


#### 05 在App.vue中间中“根组件“
- main.js指定了App.vue中返回的值进行渲染
- src中的App.vue是根对象，也可以算是一种组件，其data属性是一个函数;
- exprot default 返回的不是一个组件，是一个对象;
- 

#### 06 创建一个组件
查看chapter07/exercise/

#### 07 使用组件
查看chapter07/Start

#### 08 组件练习
查看chapter07/Start

#### 10 采用更好的目录结构

#### 11 怎么给组件标签命名: 选择器
查看chapter07/src/App.vue

#### 12 组件样式作用域
- 组件内的样式默认是全局通用的；
- scoped 改变成只在插件内生效


## chapter08 组件间通信

#### 1 介绍

#### 2 通信存在的问题
`chapter08/Start`

- 父组件： User.vue
- 子组件: UserDetail.vue
- 子组件： UserEdit.vue

#### 3 使用Props来让父子组件通信
- 父组件中必须使用":"动态绑定参数,例如“:name”, 否则只是传递一个字符串，非对应变量的值;

#### 4 为props命名


#### 5 在子组件中使用Props
- 子组件中可以像使用data那样使用props传递过来的值

#### 6 验证Props
- 用来保证传递过来的参数值是正确的；

#### 7 使用自定义事件来让父子组件通信
- 在子组件中定义一个事件, '$emit'
- 在父组件的选择器中，监听这个事件，并执行一些操作;

#### 8 理解单向数据流
- 数据通信是单向的，只能从父组件到子组件，或者反过来；
- 子组件间不能直接通信；

#### 9 使用回调函数来通信
- 在父组件中定义一个函数，通过props传递给子组件，子组件执行的是父组件中的函数;

#### 10 在同级组件间通信
- 方法一: 使用自定义事件来传递
- 方法二: 使用回调函数
- 方法三： 使用event bus

#### 11 使用事件总线来通信
- 在main中创建一个新的Vue对象来实现数据的流通

#### 12 在一个事件总线中集中实现代码
- 可以在main中创建一个实例，要实现整个应用的通用代码，这样可以直接在组件中直接使用，避免重复代码；

#### 13 作业7： 组件间通信


## chapter09 高级组件用法

#### 02 ～08 插槽
- 父组件定义子插件的内容，在子插件中使用关键字slot，就可以将父组件中的内容显示在子组件中；
- slot的样式定义在子组件中完成，父组件的中样式不能影响slot的样式，即使slot是在父组件中定义的；

#### 09 ～ 14 动态组件
- 默认情况下，组件切换后，是重新创建组件，一切换就会销毁
- 在<keep-alive>包裹下，可以让切换组件的时候，不销毁组件；
- 使用deactived和actived两个新的生命周期钩子，实现切换组件时执行的动作;





Mint UI
基于 Vue.js 的移动端组件库


Material Component Framework for Vue.js 2 https://vuetifyjs.com


什么是 vonic ？
一个基于 vue.js 和 ionic 样式的 UI 框架，用于快速构建移动端单页应用。


bootstrap-vue ★1267 - 应用于Vuejs2的Twitter的Bootstrap 4组件


## chapter16 路由

#### 01 简介


#### 02 配置VueJS路由


#### 03 配置和加载路由
- url中的`#`表示本地应用处理，非服务器处理


#### 04 理由路由模式
- 默认mode是hash模式
- 使用'history'模式可以去掉URL中的#，但这样需要服务器也配置; webpack 已经自动实现了，不需要调整服务器
- 服务器应该怎么配置，查看vue router 官方文档: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations

```
location / {
  try_files $uri $uri/ /index.html;
}
```


#### 05 路由链接导航
**为什么不用<a>?**
- 请求发送到服务器，会离开当前应用


- 使用router-link 代替<a href></a>

#### 06 我在哪里，定义活动链接
- 会丢失样式，见样例

#### 07 通过代码导航(强制导航)
- 跳转的命令直接写在JavaScript中，通过push将下一跳跳到目标路径


#### 08 配置路由参数


#### 09 获取、使用路由参数

#### 10 相应路由参数更改

#### 11 配置子路由(嵌套路由)

#### 12 嵌套路由导航

#### 13 更动态配置路由链接


#### 14 创建链接更好的方式-命名路由


#### 15 使用查询参数

#### 16 多路由视图


#### 17 重定向

#### 18 配置Catch ALl 路由通配符


#### 19 路由动画过渡

#### 20 传递 Hash fragment

#### 21 控制卷屏行为


#### 22 使用守卫来保护路由

#### 23 使用beforeEnter守卫

#### 24 使用beforeLeave守卫


#### 25 路由加载


#### 26 总结



 







