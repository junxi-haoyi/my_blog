---
title: git代理设置
date: 2023-3-20
cover: /images/forza2.jpg
tags:
 - git笔记
categories:
 - git
sticky: false
---
::: tip git代理
:::


<!-- more -->



# git代理设置
有时候git pull不过来，还有push不了，往往都是代理设置问题

### 查看代理设置情况
```
git config --list --show-origin
```




### 重置代理

```
git config --global --unset http.proxy
git config --global --unset https.proxy
```

```
git config --global  --unset https.https://github.com.proxy 
git config --global  --unset http.https://github.com.proxy 
```

### 设置代理
```
# http
git config --global http.https://github.com.proxy http://127.0.0.1:<端口号，每个人的代理端口号基本上不一样> 例子：8080
git config --global https.https://github.com.proxy https://127.0.0.1:<端口号>

# socket
git config --global http.proxy 'socks5://127.0.0.1:<端口号>'
git config --global https.proxy 'socks5://127.0.0.1:<端口号>'
```