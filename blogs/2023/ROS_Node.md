---
title: ROS Node和pkg
date: 2023-3-20
cover: /images/spy-x-family1.jpg
tags:
 - ROS笔记
categories:
 - ROS
sticky: false
---
::: tip ROS Node pkg
:::


<!-- more -->






# Node节点和Package包
## 1.Node
&emsp;&emsp;在ROS中，操作系统实现各种功能是通过建立不同的节点来实现的，类似于手机里的APP。在使用ROS的时候，实际上使用的是ROS中的某一个节点，这些节点有的是建图的，有的是导航的，有的是控制底盘的，有的是驱动雷达的。尽管各个节点功能各不相同，但是每个节点在代码上都是遵循一个固定的套路的，如果不配合，就可能导致和ROS核心配合失败，程序运行不起来。

&emsp;&emsp;其实按照ROS模块化的设计理念，单个节点的功能不会太复杂。一些ROS机器人可以实现非常复杂的功能，其实就是一堆节点相互合作的结果

## 2.Package
&emsp;&emsp;虽然ROS程序的基础单元是节点，但是我们不能只安装单个节点，必须是以包的形式安装，ROS采用了模块化的设计理念，强调功能的相互独立，所以造成了但个节点功能比较单一，要想实现完整的功能，通常需要几个节点的配合才能够完成。同时ROS使用CMake和catkin作为编译工具，引入了包的概念，可以把散落的节点联系起来
    
## 3.新建工作目录

```
$ mkdir -p ~/catkin_ws/src
$ cd ~/catkin_ws/
$ catkin_make
```
catkin_make命令在catkin工作空间中是一个非常方便的工具。在你的工作空间中第一次运行它时，它会在src目录下创建一个CMakeLists.txt的链接。 


另外，如果你查看一下当前目录应该能看到build和devel这两个目录。在devel文件夹里面你可以看到几个setup.*sh文件。source这些文件中的任何一个都可以将当前工作空间设置在环境的最顶层。想要了解更多，请参考catkin文档。接下来首先source一下新生成的setup.*sh文件： 

```
$ source devel/setup.bash
```

要保证工作区被安装脚本正确覆盖，需确定ROS_PACKAGE_PATH环境变量包含你当前的工作空间目录：
```
$ echo $ROS_PACKAGE_PATH
/home/<username>/catkin_ws/src:/opt/ros/<distro>/share
```

## 4.创建Package包
&emsp;&emsp;首先进入到工作目录下，再进入到src目录下
```
# You should have created this in the Creating a Workspace Tutorial
$ cd ~/catkin_ws/src
```
现在使用catkin_create_pkg命令创建一个名为beginner_tutorials的新软件包，这个软件包依赖于std_msgs、roscpp和rospy： 

```
$ catkin_create_pkg beginner_tutorials std_msgs rospy roscpp
```
其中std_msgs rospy roscpp是这个包的的依赖项，在此包中需要用到C++，Python和std_msgs消息包依赖项

&emsp;&emsp;在对节点进行组织和划分的时候，一般会把关系比较密切的节点放在一个包里面，但是现实中总会有一些通用性比较强的节点会同时和很多其他节点的包里的节点繁盛关联，把他们放在那个包都不合适，只能通过把这些节点和资源单独封装成一个包，谁需要有，就去依赖这个包，于是这个包就成了一个通用的依赖项

创建完成后回到工作目录输入catkin_make进行编译


## 5.回访依赖包
通过roscd指令来访问各个通用依赖项
```
roscd roscpp
```
```
cmake  msg  package.xml  rosbuild  srv
```