(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{427:function(s,t,a){"use strict";a.r(t);var i=a(0),e=Object(i.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("linux")])]),s._v(" "),t("h2",{attrs:{id:"ssh服务器拒绝了密码-请再试一次"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh服务器拒绝了密码-请再试一次"}},[s._v("#")]),s._v(" SSH服务器拒绝了密码，请再试一次")]),s._v(" "),t("p",[s._v("第一次利用windows中的Xshell连接工具连接Ubuntu系统时，可能会出现如下报错")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230309151522272.png",alt:"image-20230309151522272"}})]),s._v(" "),t("h4",{attrs:{id:"解决办法如下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决办法如下"}},[s._v("#")]),s._v(" 解决办法如下：")]),s._v(" "),t("ol",[t("li",[s._v("进入终端窗口")]),s._v(" "),t("li",[s._v("进入root权限，输入命令："),t("code",[s._v("sudo su")]),s._v(" ，回车输入密码即可")]),s._v(" "),t("li",[s._v("打开ssh服务器配置文件，输入命令："),t("code",[s._v("vim /etc/ssh/sshd_config")])]),s._v(" "),t("li",[s._v("在弹出窗口找到Authentication，使用vim命令修改其中PermitRootLogin后的prohibit-password为yes")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230309152138462.png",alt:"image-20230309152138462"}})]),s._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[s._v("重启ssh服务器，输入命令："),t("code",[s._v("sudo /etc/init.d/ssh restart")])]),s._v(" "),t("li",[s._v("重新使用Xshell连接即可")])]),s._v(" "),t("p",[s._v("参考："),t("a",{attrs:{href:"https://blog.csdn.net/qq_42768347/article/details/108851552",target:"_blank",rel:"noopener noreferrer"}},[s._v("(ssh服务器拒绝了密码 请再试一次"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);