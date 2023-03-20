---
title: linux查看内存和硬盘容量
date: 2023-3-20
cover: /images/forza4.jpg
tags:
 - linux笔记
categories:
 - git
sticky: false
---
::: tip linux内存和硬盘
:::


<!-- more -->




# linux查看内存和硬盘的容量


## 1.内存
 在 Linux 中，可以使用 free 命令来查看系统的内存容量和使用情况。该命令的输出将包含以下信息：

- ``total``：系统的物理内存总量。
- ``used``：已经被占用的内存总量。
- ``free``：未被占用的内存总量。
- ``shared``：被共享的内存总量。
- ``buffers``：被用于缓存的内存总量。
- ``cached``：被用于高速缓存的内存总量。

以下为示例：
```
              total        used        free      shared  buff/cache   available
Mem:           3.9G        2.0G        798M         32M        1.1G        1.7G
Swap:          1.9G         44M        1.9G
```

 其中``-h``选项表示以人可以读取的格式输出，``-g``选项表示以GB为单位输出
 另外，还可以使用``top``命令查看当前系统的内存使用情况，包括每个进程占用内存等详细信息

## 2.硬盘
 在 Linux 中，可以使用`` df ``命令来查看文件系统的磁盘空间使用情况，包括硬盘容量、已使用容量、剩余容量等信息。该命令的输出将包含以下信息：

- ``Filesystem``：文件系统名称。
- ``Size``：文件系统的总容量。
- ``Used``：已经被占用的磁盘空间总量。
- ``Available``：剩余的磁盘空间总量。
- ``Use%``：已使用的磁盘空间占总容量的百分比。
- ``Mounted on``：文件系统挂载的目录路径。

以下是使用 ``df ``命令查看硬盘容量的示例：

```
Filesystem      Size  Used Avail Use% Mounted on
/dev/mmcblk0p1   59G   22G   35G  39% /
none            1.7G     0  1.7G   0% /dev
tmpfs           2.0G   40K  2.0G   1% /dev/shm
tmpfs           2.0G   20M  2.0G   2% /run
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
tmpfs           2.0G     0  2.0G   0% /sys/fs/cgroup
tmpfs           396M  124K  396M   1% /run/user/1000
```

其中 ``-h ``选项表示以人类可读的格式输出，``-k`` 选项表示以 KB 为单位输出。

如果需要查看更详细的信息，可以使用 ``lsblk ``命令来列出当前系统中所有的磁盘和分区信息，包括磁盘容量、分区类型、文件系统类型等信息。