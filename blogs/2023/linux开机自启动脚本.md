---
title: linux开机脚本
date: 2023-3-20
cover: /images/2055684.jpg
tags:
 - linuxt笔记
categories:
 - linux
sticky: false
---
::: tip Linux开机脚本
:::


<!-- more -->


# 设置一个linux开机自启动脚本

## 在 Linux 系统中，可以通过将 shell 脚本添加到系统启动项来实现开机自启动的功能。具体步骤如下：

- 编写要自启动的 shell 脚本。需要确保脚本可以在后台运行，例如使用 nohup 命令或者将脚本放在 screen 会话中。
- 将脚本放置到系统启动项目录中。在 Ubuntu 等基于 systemd 的系统中，可以将脚本放置到 ``/etc/systemd/system/`` 目录下，以 ``.service`` 作为后缀名。例如：
```
$ sudo vi /etc/systemd/system/my-script.service
```
- 在 ``my-script.service`` 文件中添加如下内容：
```
[Unit]
Description=My Script
After=network.target

[Service]
User=username
Type=simple
WorkingDirectory=/path/to/my-script
ExecStart=/path/to/my-script/my-script.sh
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```
 其中，``Description`` 字段是对服务的简要描述；

 ``After ``字段指定服务启动的时间，这里是在系统启动后启动；User 字段指定服务所属的用户，

 ``Type`` 字段指定服务的启动类型，这里是简单的单进程类型；WorkingDirectory 字段指定服务的工作目录；

 ``ExecStart`` 字段指定服务启动的命令；

 ``Restart ``和 ``RestartSec ``字段指定服务的重启策略；WantedBy 字段指定服务所在的系统运行级别。


现在，每次系统启动时，就会自动运行你的 shell 脚本。你可以使用 ``systemctl status my-script.service ``命令来查看服务的状态和日志信息。如果需要禁用自启动，可以使用 ``systemctl disable my-script.service`` 命令。