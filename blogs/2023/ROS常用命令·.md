---
title: ROS常用命令
date: 2023-3-6
cover: /images/6.jpg
tags:
  - ROS介绍
categories:
 - ROS
sticky: false



---

::: tip ROS常用命令
:::
<!-- more -->

##  1.使用rospack

rospack允许你获取软件包的相关信息，在此只涉及到find参数选项，该选项可以返回软件包所在路径

like：

```shell
rospack find [package_name]
```

E.G.

```shell
rospack find roscpp
```

输入此命令将会输出：

```shell
YOUR_INSTALL_PATH/share/roscpp
```

如果你是Ubuntu系统：

```shell
/opt/ros/<distro>/share/roscpp
```

##  2.使用roscd

[roscd](https://wiki.ros.org/rosbash#roscd)是[rosbash](https://wiki.ros.org/rosbash)命令集的一部分，它允许你直接切换目录（[cd](http://ss64.com/bash/cd.html)）到某个软件包或者软件包集当中。

like：

```shell
roscd [locationname[/subdir]]
```

要想验证是否能切换到roscpp包的位置，请运行以下示例：

```shell
roscd roscpp
```

现在让我们使用Unix命令[pwd](http://ss64.com/bash/pwd.html)输出工作目录：

```shell
YOUR_INSTALL_PATH/share/roscpp
```

###  2.1子目录

[roscd](https://wiki.ros.org/roscd)也可以切换到一个软件包或软件包集的子目录中。

```shell
 roscd roscpp/cmake
 pwd
```

你会看到：

```shell
YOUR_INSTALL_PATH/share/roscpp/cmake
```

###  2.2roscd log

`roscd log`将带您进入存储ROS日志文件的目录。需要注意的是，如果你没有执行过任何ROS程序，系统会报错说该目录不存在。

如果你已经运行过ROS程序，那么可以尝试：

```shell
roscd log
```

##  3.使用rosls

[rosls](https://wiki.ros.org/rosbash#rosls) 是[rosbash](https://wiki.ros.org/rosbash)命令集的一部分，它允许你直接按软件包的名称执行 [ls](http://ss64.com/bash/ls.html) 命令（而不必输入绝对路径）。

like:

```shell
rosls [locationname[/subdir]]
```

E.G.

```shell
rosls roscpp_tutorials
```

将会输出：

```shell
cmake launch package.xml  srv
```





































