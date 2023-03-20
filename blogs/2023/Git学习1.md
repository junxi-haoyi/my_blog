---
title: Git学习1
date: 2023-3-3
cover: /images/happy.png
tags:
  - Git学习
categories:
 - Git
sticky: false



---

::: tip Git学习
:::
<!-- more -->

##  Git简介

1. Git是一个免费的，开源的分布式版本控制系统，可以快速高效的地处理从小到大的项目
2. Git易于学习，体积小，性能快，且拥有廉价的本地仓库，方便的暂存区域或多个工作流分支等特性。

##  1.版本控制工具

- 集中式版本控制，每个人都把代码提交到一个服务器上面，每个程序员可以在授权内进行对代码的修改与提交
- 分布式版本控制，每个电脑就是一个代码库，代码可以提交到远程库，每个人可以克隆远程库的代码，对代码进行修改和提交

##  2.Git的工作机制

- 工作区：代码存放在磁盘的位置
- 暂存区：临时存储工作区的代码，告诉Git你的代码放在那里`git add`
- 本地库：把暂存区的代码存放到本地仓库，也称为历史版本`git commit`

##  3.Git常用命令

| 命令名称                             | 作用             |
| ------------------------------------ | ---------------- |
| git config --global user.name 用户名 | 设置用户签名     |
| git config --global user.email 邮箱  | 设置用户邮箱     |
| git init                             | 初始化本地库     |
| git status                           | 查看本地库状态   |
| git add                              | 添加到暂存区     |
| git commit -m “日志消息”文件名       | 提交到本地库     |
| git reflog                           | 查看历史记录     |
| git reset --hard                     | 版本穿梭         |
| git log                              | 查看详细历史记录 |

##  4.Git分支操作

1. 在版本控制过程中，同时推进多个任务，我们就可以为每个任务创建单独的分支。使用分支意味着程序员可以把自己的工作从开发主线上分离开来，开发自己分支的时后，不会影响主线分支的运行。对于初学者而言，分支可以简单理解为副本，一个分支就是一个单独的副本。（分支底层其实就是指针的使用）

| 命令名称            | 作用                         |
| ------------------- | ---------------------------- |
| git branch 分支名   | 创建分支                     |
| git branch -v       | 查看分支                     |
| git checkout 分支名 | 切换分支                     |
| git merge 分支名    | 把指定的分支合并到当前分支上 |

2. 基本操作

-	git branch -v`   查看分支

   

![image-20230304181652957](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304181652957.png) 

- `git branch` 分支名   创建分支

![image-20230304182248788](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304182248788.png)

查看分支

![image-20230304182331645](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304182331645.png)

- `git checkout` 分支名 切换分支

  ![image-20230304182527903](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304182527903.png)

- 修改文件后提交

```shell
vim test.txt
#修改文件
git add test.txt
git commit -m test.txt
```

![image-20230304184418179](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304184418179.png)

- 切换到master主线 `git checkout master`
- 查看主线文件 `cat test.txt`

![image-20230304184643284](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304184643284.png)

可以看到主线文件不会被支线干扰，保持原样

- 分支合并 `git merge 分支名`

  ![image-20230304184948459](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304184948459.png)

  查看合并后的主线文件

  ![image-20230304185031867](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304185031867.png)

可以看到主线合并支线后，文件内容发生了变化

###  4.1产生冲突

产生冲突的原因：合并分支时，两个分支在==同一个文件的同一个位置==有两套完全不同的修改，Git无法替我们决定使用哪一个，必须人为来选择

也就说合并时，需要合并的那个分支在合并其他分支时，合并前文件内容不能发生改变，如果发生改变，两个分支的文件源不一致（也就是从某一分支线分支出来的文件），就会发生冲突

- 切换到blue分支

- 修改文件内容

  ![image-20230304191739272](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304191739272.png)

- 添加缓存区
- 上传本地库

![image-20230304191910875](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304191910875.png)

- 切换到主线

- 修改文件内容

  ![image-20230304192223829](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304192223829.png)

- 合并文件

  ![image-20230304192456545](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304192456545.png)

​		发现出现冲突，原因时两个分支的文件源不一致。

​        而且右下角出现`(master|MERGING)`意思时合并中

- 产看本地库状态

  ![image-20230304192822810](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304192822810.png)

状态指出俩个文件都修改了，不知道要保存哪一个，需要去手动打开文件进行修改

- 查看文件

  ![image-20230304193031281](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304193031281.png)

可以看到Git已经标出两者冲突的地方

- 修改文件

![image-20230304193240257](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304193240257.png)

- 将认为修改的文件添加到本地库

  ![image-20230304193521393](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304193521393.png)

🥸注意：在上传本地库时，不能添加文件文件名

- 查看文件内容

  ![image-20230304193757930](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230304193757930.png)





![Screenshot_2023-03-04-19-39-21-001_tv.danmaku.bil](https://aniya.oss-cn-shanghai.aliyuncs.com/Screenshot_2023-03-04-19-39-21-001_tv.danmaku.bil.jpg)

如图可以解释冲突问题

##  5.Git团队协作

