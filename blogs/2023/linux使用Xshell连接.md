---
title: linux使用Xshell连接
date: 2023-2-28
cover: /images/forza2.jpg
tags:
 - linux小知识
categories:
 - linux
sticky: false

---


::: tip linux
:::


<!-- more -->





##  SSH服务器拒绝了密码，请再试一次

第一次利用windows中的Xshell连接工具连接Ubuntu系统时，可能会出现如下报错

![image-20230309151522272](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230309151522272.png)

####  解决办法如下：

1. 进入终端窗口
2. 进入root权限，输入命令：`sudo su` ，回车输入密码即可
3. 打开ssh服务器配置文件，输入命令：`vim /etc/ssh/sshd_config`
4. 在弹出窗口找到Authentication，使用vim命令修改其中PermitRootLogin后的prohibit-password为yes

![image-20230309152138462](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230309152138462.png)

5. 重启ssh服务器，输入命令：`sudo /etc/init.d/ssh restart`
6. 重新使用Xshell连接即可



参考：[(ssh服务器拒绝了密码 请再试一次](https://blog.csdn.net/qq_42768347/article/details/108851552)

