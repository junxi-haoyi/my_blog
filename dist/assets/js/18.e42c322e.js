(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{416:function(s,a,t){"use strict";t.r(a);var r=t(0),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("ROS常用命令")])]),s._v(" "),a("h2",{attrs:{id:"_1-使用rospack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用rospack"}},[s._v("#")]),s._v(" 1.使用rospack")]),s._v(" "),a("p",[s._v("rospack允许你获取软件包的相关信息，在此只涉及到find参数选项，该选项可以返回软件包所在路径")]),s._v(" "),a("p",[s._v("like：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rospack "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("package_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("E.G.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rospack "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" roscpp\n")])])]),a("p",[s._v("输入此命令将会输出：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("YOUR_INSTALL_PATH/share/roscpp\n")])])]),a("p",[s._v("如果你是Ubuntu系统：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/opt/ros/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("distro"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/share/roscpp\n")])])]),a("h2",{attrs:{id:"_2-使用roscd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用roscd"}},[s._v("#")]),s._v(" 2.使用roscd")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.ros.org/rosbash#roscd",target:"_blank",rel:"noopener noreferrer"}},[s._v("roscd"),a("OutboundLink")],1),s._v("是"),a("a",{attrs:{href:"https://wiki.ros.org/rosbash",target:"_blank",rel:"noopener noreferrer"}},[s._v("rosbash"),a("OutboundLink")],1),s._v("命令集的一部分，它允许你直接切换目录（"),a("a",{attrs:{href:"http://ss64.com/bash/cd.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("cd"),a("OutboundLink")],1),s._v("）到某个软件包或者软件包集当中。")]),s._v(" "),a("p",[s._v("like：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("roscd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("locationname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/subdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("要想验证是否能切换到roscpp包的位置，请运行以下示例：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("roscd roscpp\n")])])]),a("p",[s._v("现在让我们使用Unix命令"),a("a",{attrs:{href:"http://ss64.com/bash/pwd.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("pwd"),a("OutboundLink")],1),s._v("输出工作目录：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("YOUR_INSTALL_PATH/share/roscpp\n")])])]),a("h3",{attrs:{id:"_2-1子目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1子目录"}},[s._v("#")]),s._v(" 2.1子目录")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.ros.org/roscd",target:"_blank",rel:"noopener noreferrer"}},[s._v("roscd"),a("OutboundLink")],1),s._v("也可以切换到一个软件包或软件包集的子目录中。")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v(" roscd roscpp/cmake\n "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n")])])]),a("p",[s._v("你会看到：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("YOUR_INSTALL_PATH/share/roscpp/cmake\n")])])]),a("h3",{attrs:{id:"_2-2roscd-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2roscd-log"}},[s._v("#")]),s._v(" 2.2roscd log")]),s._v(" "),a("p",[a("code",[s._v("roscd log")]),s._v("将带您进入存储ROS日志文件的目录。需要注意的是，如果你没有执行过任何ROS程序，系统会报错说该目录不存在。")]),s._v(" "),a("p",[s._v("如果你已经运行过ROS程序，那么可以尝试：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("roscd log\n")])])]),a("h2",{attrs:{id:"_3-使用rosls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用rosls"}},[s._v("#")]),s._v(" 3.使用rosls")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://wiki.ros.org/rosbash#rosls",target:"_blank",rel:"noopener noreferrer"}},[s._v("rosls"),a("OutboundLink")],1),s._v(" 是"),a("a",{attrs:{href:"https://wiki.ros.org/rosbash",target:"_blank",rel:"noopener noreferrer"}},[s._v("rosbash"),a("OutboundLink")],1),s._v("命令集的一部分，它允许你直接按软件包的名称执行 "),a("a",{attrs:{href:"http://ss64.com/bash/ls.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("ls"),a("OutboundLink")],1),s._v(" 命令（而不必输入绝对路径）。")]),s._v(" "),a("p",[s._v("like:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rosls "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("locationname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/subdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("E.G.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rosls roscpp_tutorials\n")])])]),a("p",[s._v("将会输出：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("cmake launch package.xml  srv\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);