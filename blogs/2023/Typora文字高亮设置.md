---
title: Typora文字高亮快捷键设置
date: 2023-2-27
cover: /images/elden2.jpg
tags:
 - markedown
categories:
 - markdown学习
sticky: false



---

::: tip Typora
:::
<!-- more -->

#  文字高亮设置快捷键

1. `ctrl`+`，`打开设置或者打开 typora -> 文件 -> 偏好设置 -> 通用 -> 打开高级设置。

2. 用文本编辑器打开文件夹中的 conf.user.json 文件。

3. 在 keyBinding 添加响应的快捷键操作,（或者将原来的快捷键注释符号去掉也可）。

   ```json
   "keyBinding": {
       // for example: 
       // "Always on Top": "Ctrl+Shift+P"
       // All other options are the menu items 'text label' displayed from each typora menu
   	"Highlight": "Ctrl + q" 
     }
   
   
   ```

   

4. 添加完成保存后，需要重启 typora。
5. 点击上方菜单栏中格式，就可以发现块接键生效了
