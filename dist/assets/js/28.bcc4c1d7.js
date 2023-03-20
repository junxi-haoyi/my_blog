(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{428:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("树莓派基础")])]),s._v(" "),a("h2",{attrs:{id:"_1-初探-sys目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-初探-sys目录"}},[s._v("#")]),s._v(" 1. 初探/sys目录")]),s._v(" "),a("p",[s._v("与/proc目录类似，/sys目录下的文件/文件夹向用户提供了一些关于设备、内核模块、文件系统以及其他内核组件的信息， 如子目录block中存放了所有的块设备；子目录bus中存放了系统中所有的总线类型，有i2c、usb、sdio、pci等； 子目录class按类型归类设备，如leds、lcd、mtd、pwm等。")]),s._v(" "),a("p",[s._v("尝试在板卡的终端执行以下命令查看sys各层级的目录内容：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在板卡上的终端执行以下命令查看")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /sys\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /sys/class\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /sys/class/leds\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /sys/class/leds/led1\n")])])]),a("p",[a("img",{attrs:{src:"https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230301111518382.png",alt:"image-20230301111518382"}})]),s._v(" "),a("p",[s._v("以其中的/sys/class/leds/sys_status_led目录为例，它下面又包含brightness、device、max_brightness、power、subsystem、trigger、uevent等文件。 其中brightness表示LED灯的亮度，trigger表示LED灯的触发方式，我们可以通过echo、cat等命令来修改或查看这些文件， 从而达到控制LED灯的目的。下面以实例进行讲解。")]),s._v(" "),a("h2",{attrs:{id:"_2-控制心跳灯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-控制心跳灯"}},[s._v("#")]),s._v(" 2.控制心跳灯")]),s._v(" "),a("p",[s._v("控制心跳灯之前，需要切换到root")]),s._v(" "),a("p",[s._v("在控制心跳前，可以查看下心跳灯的触发方式")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/class/leds/led1/trigger\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#led1可以换成别的灯，看板子上有什么")]),s._v("\n")])])]),a("p",[s._v("可以看到此时灯的状态")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/leds/led1/brightness "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#灭了心跳灯")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/leds/led1/brightness "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启心跳灯")]),s._v("\n")])])]),a("p",[s._v("如果想要将灯切换到心跳模式，选择对应的出发状态即可")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在root权限下进行下列操作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" heartbeat "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/class/leds/sys_status_led/trigger\n")])])]),a("h2",{attrs:{id:"_3-初探-dev目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-初探-dev目录"}},[s._v("#")]),s._v(" 3.初探/dev目录")]),s._v(" "),a("p",[s._v("除了/proc和/sys目录外，/dev目录也包含了非常丰富的设备信息，该目录下包含了Linux系统中使用的所有外部设备， 如/dev/tty为串口设备、/dev/ram为内存、通过这些设备文件，我们也可以访问到对应的硬件设备。")]),s._v(" "),a("p",[s._v("尝试使用以下命令查看dev目录的内容：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /dev/input\n")])])]),a("p",[a("img",{attrs:{src:"https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304115615168.png",alt:"image-20230304115615168"}})]),s._v(" "),a("p",[s._v("这里以野火的鲁班猫为例")]),s._v(" "),a("p",[s._v("以上图中/dev/input目录下的内容为例，上面的event0是输入设备的事件文件接口， 通过它们可以获知设备上报的输入事件。event后带的数字并不是跟设备绑定的， 可以查看文件/proc/bus/input/devices了解它们分别代表什么。")]),s._v(" "),a("p",[s._v("在板卡的终端执行以下命令：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/bus/input/devices\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);