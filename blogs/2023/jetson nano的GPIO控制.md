---
title: jetson nano GPIO的控制
date: 2023-3-7
cover: /images/2052007.jpg
tags:
  - jetson nano
categories:
 - linux开发
sticky: false



---

::: tip jetson nano 基础
:::
<!-- more -->

##  1.使用python控制jetson nano GPIO

jetpack自带有Jetson.GPIO库，无需用户自己安装

💖注意：不要强制卸载系统自带的GPIO库，否则会面临无法导入的报错

###  1.1导入GPIO mudule

```python
import Jetson.GPIO as GPIO
```

###  1.2Pin引脚编号

一共有四种引脚编号,不同编码模式，正常来讲选BOARD即可

```python
GPIO.setmode(GPIO.BOARD)
#or
GPIO.setmode(GPIO.BCM)
#or
GPIO.setmode(GPIO.CVM)
#or
GPIO.setmode(GPIO.TEGRA_SOC)
```

检查你设置了那种模式，可以用如下代码：

```python
mode = GPIO.getmode()
```

![20190812174551977](https://aniya.oss-cn-shanghai.aliyuncs.com/20190812174551977.png)

###  1.3警告消息

你设置和使用的GPIO可能已经被用来作为特定的外设，在这种情况下，Jetson GPIO库会警告你是否GPIO被用来设置成别的外设

你也可以用代码来消除这个警告

```python
GPIO.setwarnings(False)
```

### 1.4设置输入输出

GPIO通道在使用之前必须被设置成input或者output，初始化通道为输入引脚，如下

```python
#通道是基于之前讨论过的编码模式来确定的
GPIO.setup(channel,GPIO.IN)
```

设置通道为输出模式，如下：

```python
GPIO.setup(channel,GPIO.OUT)
```

也可以设置初始化引脚的电平

```python
GPIO.setup(channel,GPIO.OUT,initial=GPIO.HIGH)
```

也可以一次设置多个GPIO通道

```python
channels = [18,12,13]
GPIO.setup(channels,GPIO.OUT)
```

###  1.5输入检测

读取某个GPIO通道，可以用：

```python
GPIO.input(channel)
```

###  1.6设置通道电平

设置某个通道的电平：

```python
GPIO.output(channel,state)
```

state可以为GPIO.LOW 或 GPIO.HIGH

同样的，你可以一次设置多个通道

```python
channels = [18, 12, 13] # or use tuples
GPIO.output(channels, GPIO.HIGH) # or GPIO.LOW
# set first channel to LOW and rest to HIGH
GPIO.output(channel, (GPIO.LOW, GPIO.HIGH, GPIO.HIGH))
```

###  1.7清除

在程序的末尾，你最好清除各个通道，这样各个引脚都会被设置成默认模式。清除通道代码如下：

```python
GPIO.cleanup()
```

如果你不想清除所有通道，你可以清除单个或多个特定的通道

```python
GPIO.cleanup(chan1) # cleanup only chan1
GPIO.cleanup([chan1, chan2]) # cleanup only chan1 and chan2
GPIO.cleanup((chan1, chan2))  # does the same operation as previous statement
```

###  1.8Jetson Board 信息和库版本

获得jetson module信息

```python
GPIO.JETSON_INFO
```

他提供了一系列python字典信息：P1_REVISION, RAM, REVISION, TYPE, MANUFACTURER and PROCESSOR。字典里的值都是string类型🫡P1_REVISION除外，他是int类型

获得Jetson.GPIO库版本

```python
GPIO.VERSION
```

它提供一个字符类型 X.Y.Z形式

###  1.8中断

该函数库提供了三种中断方式

##### ==THE WAIT_FOR_EDGE() FUNCTION==

这个函数会发生阻塞，直到等到一个电平

```python
GPIO.wait_for_edge(channel, GPIO.RISING)
```

第二个参数选择特定的电平可以是GPIO.RISING, GPIO.FALLING or GPIO.BOTH。如果你希望限定阻塞的时间，你也可以设置阻塞时间

```python
# timeout is in milliseconds
GPIO.wait_for_edge(channel, GPIO.RISING, timeout=500)
```

这个函数返回该通道被检测到的电平，如果时间超出timeout发生，则返回None

##### ==THE EVENT_DETECTED() FUNCTION==

此函数可用于定期检查自上次调用以来是否发生了事件。可以按如下方式设置和调用该函数：

```python
# set rising edge detection on the channel
GPIO.add_event_detect(channel, GPIO.RISING)
run_other_code()
if GPIO.event_detected(channel):
    do_something()
```

和以前一样，你可以检测事件GPIO.RISING, GPIO.FALLING or GPIO.BOTH.

##### ==A CALLBACK FUNCTION RUN WHEN AN EDGE IS DETECTED==

此功能可用于运行回调函数的第二个线程。因此，回调函数可以与主程序并发运行以响应边缘。此功能可以按如下方式使用：

```python
# define callback function
def callback_fn(channel):
    print("Callback called from channel %s" % channel)

# add rising edge detection
GPIO.add_event_detect(channel, GPIO.RISING, callback=callback_fn)
```

如果需要，还可以添加多个回调，如下所示：

```python
def callback_one(channel):
    print("First Callback")

def callback_two(channel):
    print("Second Callback")

GPIO.add_event_detect(channel, GPIO.RISING)
GPIO.add_event_callback(channel, callback_one)
GPIO.add_event_callback(channel, callback_two)
```

在这种情况下，两个回调是按顺序运行的，而不是同时运行的，因为只有线程运行所有回调函数。

为了通过将多个事件折叠为一个事件来防止对回调函数的多次调用，可以选择设置去抖动时间：

```
# bouncetime set in milliseconds
GPIO.add_event_detect(channel, GPIO.RISING, callback=callback_fn,
bouncetime=200)
```

如果不再需要边缘检测，可以按如下方式将其删除：

```python
GPIO.remove_event_detect(channel)
```



###  1.10检测GPIO 通道功能

此功能允许您检查提供的 GPIO 通道的功能：

```python
GPIO.gpio_function(channel)
```

The function returns either GPIO.IN or GPIO.OUT.

















