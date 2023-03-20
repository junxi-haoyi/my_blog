---
title: 树莓派 proc文件查看板载信息
date: 2023-2-28
cover: /images/forza3.jpg
tags:
 - 树莓派
categories:
 - linux开发
sticky: false



---

::: tip 树莓派基础
:::
<!-- more -->





##  查看板卡系统信息

当我们新购入一台笔记本电脑或者是台式机时，都免不了会去看看它的CPU型号，内存容量以及硬盘的使用情况等等。 对于Linux板卡来说，实际上也相当于一台小型电脑，虽然距离传统PC可能有差别，但是麻雀虽小，五脏俱全，我们同样希望去查看板卡的这些相关信息。



##  1.初探/proc目录

Linux没有提供类似Windows的任务管理器，但是它将系统运行的信息都记录在/proc目录下的文件中， 用户可以通过访问该目录下的文件获取对应的系统信息。

可以在中断下执行如下命令

```shell
ls /proc
```

运行后系统运行记录

![image-20230301102545174](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230301102545174.png

![image-20230305172955366](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230305172955366.png)





| 文件名      | 作用                                                         |
| ----------- | ------------------------------------------------------------ |
| pid*        | “pid*”通常就是一个数字，该数字表示的是进程的 PID 号，系统中当前运行的每一个进程都有对应的一个目录，用于记录进程所有相关信息。对于操作系统来说，一个应用程序就是一个进程 |
| self        | 该文件是一个软链接，指向了当前进程的目录，通过访问/proc/self/目录来获取当前进程的信息，就不用每次都获取pid |
| thread-self | 该文件也是一个软链接，指向了当前线程，访问该文件，等价于访问“当前进程pid/task/当前线程tid”的内容。一个进程，可以包含多个线程，但至少需要一个进程，这些线程共同支撑进程的运行。 |
| version     | 记录了当前运行的内核版本，通常可以使用“uname –r”命令查看     |
| cpuinfo     | 记录系统中CPU的提供商和相关配置信息                          |
| modules     | 记录了目前系统加载的模块信息                                 |
| meminfo     | 记录系统中内存的使用情况，free命令会访问该文件，来获取系统内存的空闲和已使用的数量 |
| filesystems | 记录内核支持的文件系统类型，通常mount一个设备时，如果没有指定文件系统并且它无法确定文件系统类型时，mount会尝试包含在该文件中的文件系统，除了那些标有“nodev”的文件系统。 |

##  2.查看CPU信息

/proc/cpuinfo文件存储了cpu的信息，可以通过如下命令查看

```shell
cat /proc/cpuinfo
```



```shell
funtime@funtime-desktop:~$ cat /proc/cpuinfo
processor       : 0
model name      : ARMv8 Processor rev 1 (v8l)
BogoMIPS        : 38.40
Features        : fp asimd evtstrm aes pmull sha1 sha2 crc32
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x1
CPU part        : 0xd07
CPU revision    : 1

processor       : 1
model name      : ARMv8 Processor rev 1 (v8l)
BogoMIPS        : 38.40
Features        : fp asimd evtstrm aes pmull sha1 sha2 crc32
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x1
CPU part        : 0xd07
CPU revision    : 1

processor       : 2
model name      : ARMv8 Processor rev 1 (v8l)
BogoMIPS        : 38.40
Features        : fp asimd evtstrm aes pmull sha1 sha2 crc32
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x1
CPU part        : 0xd07
CPU revision    : 1

processor       : 3
model name      : ARMv8 Processor rev 1 (v8l)
BogoMIPS        : 38.40
Features        : fp asimd evtstrm aes pmull sha1 sha2 crc32
CPU implementer : 0x41
CPU architecture: 8
CPU variant     : 0x1
CPU part        : 0xd07
CPU revision    : 1
```

会看到如下类似信息

##  3.查看内核版本

```shell
cat /proc/version
```

会看到如下类似信息

```shell
Linux version 4.9.253-tegra (buildbrain@mobile-u64-5434-d8000) (gcc version 7.3.1 20180425 [linaro-7.3-2018.05 revision d29120a424ecfbc167ef90065c0eeb7f91977701] (Linaro GCC 7.3-2018.05) ) #1 SMP PREEMPT Sat Feb 19 08:59:22 PST 2022
```

也可以通过如下命令获取

```shell
uname -a
```

```shell
Linux funtime-desktop 4.9.253-tegra #1 SMP PREEMPT Sat Feb 19 08:59:22 PST 2022 aarch64 aarch64 aarch64 GNU/Linux
```

##   4.查看内存信息

内核将内存的使用情况记录在/proc/meminfo文件中，我们可以通过读取该文件的内容，来了解我们内存的使用情况：

```shell
cat /proc/meminfo
```

```shell
funtime@funtime-desktop:~$ cat /proc/meminfo
MemTotal:        4059240 kB
MemFree:          313692 kB
MemAvailable:     592696 kB
Buffers:           57932 kB
Cached:           362944 kB
SwapCached:         6036 kB
Active:          2357748 kB
Inactive:         764220 kB
Active(anon):    2153756 kB
Inactive(anon):   602268 kB
Active(file):     203992 kB
Inactive(file):   161952 kB
Unevictable:       15416 kB
Mlocked:              32 kB
SwapTotal:       2029616 kB
SwapFree:        1848840 kB
Dirty:               112 kB
Writeback:             0 kB
AnonPages:       2678648 kB
Mapped:           163736 kB
Shmem:             39544 kB
Slab:             164160 kB
SReclaimable:      87524 kB
SUnreclaim:        76636 kB
KernelStack:       10672 kB
PageTables:        20456 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:     4059236 kB
Committed_AS:    6619784 kB
VmallocTotal:   263061440 kB
VmallocUsed:           0 kB
VmallocChunk:          0 kB
AnonHugePages:   1427456 kB
ShmemHugePages:        0 kB
ShmemPmdMapped:        0 kB
NvMapMemFree:       1024 kB
NvMapMemUsed:     244748 kB
CmaTotal:         475136 kB
CmaFree:          127580 kB
HugePages_Total:       0
HugePages_Free:        0
HugePages_Rsvd:        0
HugePages_Surp:        0
Hugepagesize:       2048 kB

```

在实际应用中，我们一般都不会直接去读取该文件的内容，而是使用下面的命令来获取内存的相关信息。



通过free命令查看系统的内存大小：

```shell
free
```

```shell
              total        used        free      shared  buff/cache   available
Mem:        4059240     3235776      316140       39544      507324      594008
Swap:       2029616      183428     1846188
```



##  5.查看存储容量



/proc/partitions文件包含了存储器的分区信息，查看分区信息可以了解板载FLASH存储器的容量。

可使用如下命令查看：

```shell
cat /proc/partitions
```

```shell
funtime@funtime-desktop:~$ cat /proc/partitions
major minor  #blocks  name

   1        0       8192 ram0
   1        1       8192 ram1
   1        2       8192 ram2
   1        3       8192 ram3
   1        4       8192 ram4
   1        5       8192 ram5
   1        6       8192 ram6
   1        7       8192 ram7
   1        8       8192 ram8
   1        9       8192 ram9
   1       10       8192 ram10
   1       11       8192 ram11
   1       12       8192 ram12
   1       13       8192 ram13
   1       14       8192 ram14
   1       15       8192 ram15
   7        0      16384 loop0
  31        0       4096 mtdblock0
 179        0   62367744 mmcblk0
 179        1   62352384 mmcblk0p1
 179        2        128 mmcblk0p2
 179        3        448 mmcblk0p3
 179        4        576 mmcblk0p4
 179        5         64 mmcblk0p5
 179        6        192 mmcblk0p6
 179        7        384 mmcblk0p7
 179        8         64 mmcblk0p8
 179        9        448 mmcblk0p9
 179       10        448 mmcblk0p10
 179       11        768 mmcblk0p11
 179       12         64 mmcblk0p12
 179       13        192 mmcblk0p13
 179       14        128 mmcblk0p14
 252        0     507408 zram0
 252        1     507408 zram1
 252        2     507408 zram2
 252        3     507408 zram3
```



##  6. 查看任务进程

在/proc文件夹下，有很多以数字命名的文件夹，这些文件夹是用来记录当前正在运行的进程状态， 文件名则是他们的pid号，每一个进程都对应一个pid号，用于辨识。这些进程文件夹中包含的内容， 基本上是大同小异的。使用ls命令，来查看pid为1的文件夹内容，如下图所示。其中，fd记录里当前进程使用的文件描述， mountinfo记录了挂载信息，mem则记录了该进程的内存使用情况等。

```shell
ls /proc/1
```

![image-20230305174651053](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230305174651053.png)

除了上面使用的这种方式，常用的还有top命令。该命令的功能类似于windows的任务管理器， 执行效果如上图所示，该命令可以会实时地更新每个进程的使用情况，按下“q”键或“Ctrl + C”，就可以退出该命令。

![image-20230305174814266](https://aniya.oss-cn-shanghai.aliyuncs.com/image-20230305174814266.png)

##  7. 查看支持的文件系统

/proc/filesystems可以用来查看内核支持的文件系统类型，如上图所示。图中有部分文件系统前带有“nodev”标志， 表示这些文件系统不需要挂载块设备，如网络文件系统nfs/nfs4，伪文件系统sysfs等。

```shell
cat /proc/filesystems
```

```she
funtime@funtime-desktop:~$ cat /proc/filesystems
nodev   sysfs
nodev   rootfs
nodev   ramfs
nodev   bdev
nodev   proc
nodev   cpuset
nodev   cgroup
nodev   cgroup2
nodev   tmpfs
nodev   devtmpfs
nodev   configfs
nodev   debugfs
nodev   tracefs
nodev   sockfs
nodev   pipefs
nodev   hugetlbfs
nodev   rpc_pipefs
nodev   devpts
        ext3
        ext2
        ext4
        squashfs
        vfat
nodev   nfs
        ntfs
nodev   autofs
nodev   9p
nodev   pstore
nodev   mqueue
nodev   binfmt_misc
nodev   overlay
        fuseblk
nodev   fuse
nodev   fusectl
```



##  8. 查看CPU当前主频

除了/proc目录外，在/sys目录也可以查看一些系统相关的信息， 如文件/sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq包含了CPU0当前的主频信息， 若系统存在该文件，可以把它的内容输出来查看：

```shell
cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq
```

```shell
funtime@funtime-desktop:~$ sudo cat /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_cur_freq
1479000
```

jetson的CPU具有调频的功能，当你的负载低的时候自动降频节省能耗，当需要高负载的场景会自动提升频率，提高性能

```shell
funtime@funtime-desktop:~$ ls -g /sys/devices/system/cpu/cpu0/cpufreq/
total 0
-r--r--r-- 1 root 4096 3月   5 17:50 affected_cpus
-r-------- 1 root 4096 3月   5 17:49 cpuinfo_cur_freq
-r--r--r-- 1 root 4096 3月   4 23:00 cpuinfo_max_freq
-r--r--r-- 1 root 4096 3月   5 17:50 cpuinfo_min_freq
-r--r--r-- 1 root 4096 3月   5 17:50 cpuinfo_transition_latency
-r--r--r-- 1 root 4096 3月   5 17:50 related_cpus
-r--r--r-- 1 root 4096 3月   5 17:50 scaling_available_frequencies
-r--r--r-- 1 root 4096 3月   5 17:50 scaling_available_governors
-r--r--r-- 1 root 4096 3月   5 17:50 scaling_cur_freq
-r--r--r-- 1 root 4096 3月   5 17:50 scaling_driver
-rw-r--r-- 1 root 4096 3月   4 23:00 scaling_governor
-rw-r--r-- 1 root 4096 3月   5 17:50 scaling_max_freq
-rw-r--r-- 1 root 4096 3月   5 17:50 scaling_min_freq
-rw-r--r-- 1 root 4096 3月   5 17:50 scaling_setspeed
drwxr-xr-x 2 root    0 3月   5 17:50 stats

```



































































































































