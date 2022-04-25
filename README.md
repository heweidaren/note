# 前端个人笔记 查漏补缺

### npm 篇

例子 "axios": "0.24.0",

\- 更新最新版本
^ 更新次要版本
~ 更新补丁

更新指定版本 npm i axios@0.26.0

#### 发布 npm 包

// todo npm 淘宝源需要切到官方源上 npm config set registry https://registry.npmjs.org

    npm login 登录
    npm init初始化
    npm link 调试
    npm publish 发布 第一次发布ts版本 需要加–access=publi  声明公共 否则收费

下载指定包 npm install front-date@1.0.7

## 正则

#### 正则表达式是匹配模式，要么匹配字符 要么匹配位置

正则 api https://tool.oschina.net/uploads/apidocs/jquery/regexp.html
正则可视化网址 https://regexper.com/

^匹配开头 $匹配结尾 \b 匹配单词边界 ?=xxx

let a = 'hello' a.replace(/^/,'1') // 1hello

let a = 'hello' a.replace(/$/,'1') // hello1

let z = /^[a-z0-9]{10}$/

z.test('1222131212') true

let z = /^([a-z0-9_]{1,})@qq\.([a-z]{1,3})$/

## 浏览器调试

console.log('%c 测试','color:red'); 命令行打印颜色

## node

console.log('\x1B[36m', 'img', '\x1B[0m'); 命令行打印颜色
