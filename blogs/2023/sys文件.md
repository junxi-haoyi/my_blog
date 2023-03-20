---
title: sys和dev
date: 2023-2-28
cover: /images/5.jpg
tags:
  - 树莓派
categories:
 - linux开发
sticky: false



---

::: tip 树莓派基础
:::
<!-- more -->

##  1. 初探/sys目录

与/proc目录类似，/sys目录下的文件/文件夹向用户提供了一些关于设备、内核模块、文件系统以及其他内核组件的信息， 如子目录block中存放了所有的块设备；子目录bus中存放了系统中所有的总线类型，有i2c、usb、sdio、pci等； 子目录class按类型归类设备，如leds、lcd、mtd、pwm等。

尝试在板卡的终端执行以下命令查看sys各层级的目录内容：

```shell
#在板卡上的终端执行以下命令查看
ls /sys
ls /sys/class
ls /sys/class/leds
ls /sys/class/leds/led1
```

![image-20230301111518382](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230301111518382.png)

以其中的/sys/class/leds/sys_status_led目录为例，它下面又包含brightness、device、max_brightness、power、subsystem、trigger、uevent等文件。 其中brightness表示LED灯的亮度，trigger表示LED灯的触发方式，我们可以通过echo、cat等命令来修改或查看这些文件， 从而达到控制LED灯的目的。下面以实例进行讲解。

##  2.控制心跳灯

控制心跳灯之前，需要切换到root

在控制心跳前，可以查看下心跳灯的触发方式

```shell
cat /sys/class/leds/led1/trigger
#led1可以换成别的灯，看板子上有什么
```

可以看到此时灯的状态

```shell
echo 0 > /sys/class/leds/led1/brightness #灭了心跳灯
echo 1 > /sys/class/leds/led1/brightness #开启心跳灯
```

如果想要将灯切换到心跳模式，选择对应的出发状态即可

```shell
#在root权限下进行下列操作
echo heartbeat > /sys/class/leds/sys_status_led/trigger
```

##  3.初探/dev目录

除了/proc和/sys目录外，/dev目录也包含了非常丰富的设备信息，该目录下包含了Linux系统中使用的所有外部设备， 如/dev/tty为串口设备、/dev/ram为内存、通过这些设备文件，我们也可以访问到对应的硬件设备。

尝试使用以下命令查看dev目录的内容：

```shell
ls /dev
ls /dev/input
```

![image-20230304115615168](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304115615168.png)

这里以野火的鲁班猫为例

以上图中/dev/input目录下的内容为例，上面的event0是输入设备的事件文件接口， 通过它们可以获知设备上报的输入事件。event后带的数字并不是跟设备绑定的， 可以查看文件/proc/bus/input/devices了解它们分别代表什么。

在板卡的终端执行以下命令：

```shell
cat /proc/bus/input/devices
```

