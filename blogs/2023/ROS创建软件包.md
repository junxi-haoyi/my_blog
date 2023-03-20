---
title: ROS创建软件包
date: 2023-3-6
cover: /images/2055761.jpg
tags:
  - ROS创建软件包
categories:
 - ROS
sticky: false



---

::: tip ROS创建软件包
:::
<!-- more -->

##  1.一个catkin软件包的组成

一个包要想称为catkin软件包，必须符合以下要求：

- 这个包必须有一个符合catkin规范的[package.xml](https://wiki.ros.org/catkin/package.xml)文件
  - 这个`package.xml`文件提供有关该软件包的元信息
- 这个包必须有一个[catkin版本的CMakeLists.txt](https://wiki.ros.org/catkin/CMakeLists.txt)文件
  - 如果它是个[Catkin元包](https://wiki.ros.org/catkin/package.xml#Metapackages)的话，则需要有一个`CMakeList.txt`文件的相关样板
- 每个包必须有自己的目录
  - 这意味着在同一个目录下不能有嵌套的或者多个软件包存在

最简单的软件包看起来就像这样：

```shell
my_package/
  CMakeLists.txt
  package.xml
```

##  2.catkin工作空间中的软件包

开发catkin软件包的推荐方法是使用[catkin工作空间](https://wiki.ros.org/catkin/workspaces)，但是你也可以单独开发catkin软件包。一个简单的工作空间如下所示：

```shell
workspace_folder/        -- WORKSPACE
  src/                   -- SOURCE SPACE
    CMakeLists.txt       -- 'Toplevel' CMake file, provided by catkin
    package_1/
      CMakeLists.txt     -- CMakeLists.txt file for package_1
      package.xml        -- Package manifest for package_1
    ...
    package_n/
      CMakeLists.txt     -- CMakeLists.txt file for package_n
      package.xml        -- Package manifest for package_n
#💖各种软件包需要放在src目录下
```

##  3.创建catkin软件包

首先切换到刚才创建的空白catkin工作空间中的源文件空间目录：

```shell
# You should have created this in the Creating a Workspace Tutorial
$ cd ~/catkin_ws/src
```

现在使用`catkin_create_pkg`命令创建一个名为`beginner_tutorials`的新软件包，这个软件包依赖于`std_msgs`、`roscpp`和`rospy`：

`catkin_create_pkg`命令会要求你输入`package_name`，如有需要还可以在后面添加一些需要依赖的其它软件包：

```shell
# This is an example, do not try to run this
# catkin_create_pkg <package_name> [depend1] [depend2] [depend3]
catkin_create_pkg ssr_pkg roscpp rospy std_msgs
#💖第一个参数为软件包的名字，后面三个为软件包的依赖项
```

##  4.构建一个catkin工作区并生效配置文件

现在你需要在catkin工作区中构建软件包：

```shell
 cd ~/catkin_ws
 catkin_make#😎注意编译的时候需要在工作目录下进行，也就是该目录下需要有build，devel，src目录
```

工作空间构建完成后，在`devel`子目录下创建了一个与你通常在`/opt/ros/$ROSDISTRO_NAME`下看到的目录结构类似的结构。

要将这个工作空间添加到ROS环境中，你需要`source`一下生成的配置文件：

```shell
 source ~/catkin_ws/devel/setup.bash
```

##  5.软件包依赖关系

###  5.1 一级依赖

之前在使用[catkin_create_pkg](https://wiki.ros.org/catkin/commands/catkin_create_pkg)命令时提供了几个软件包作为依赖关系，现在我们可以使用`rospack`命令工具来查看这些**一级**依赖包。

```shell
rospack depends1 beginner_tutorials
```

```shell
std_msgs
rospy
roscpp
```

###  5.2间接依赖

在很多情况下，一个依赖包还会有它自己的依赖关系，比如，`rospy`就有其它依赖包。

```shell
rospack depends1 rospy
```

```shell
genpy
roscpp
rosgraph
rosgraph_msgs
roslib
std_msgs
```

一个软件包可以有相当多间接的依赖关系，好在使用`rospack`可以递归检测出所有嵌套的依赖包。

```shell
$ rospack depends beginner_tutorials
cpp_common
rostime
roscpp_traits
roscpp_serialization
catkin
genmsg
genpy
message_runtime
gencpp
geneus
gennodejs
genlisp
message_generation
rosbuild
rosconsole
std_msgs
rosgraph_msgs
xmlrpcpp
roscpp
rosgraph
ros_environment
rospack
roslib
rospy
```





















