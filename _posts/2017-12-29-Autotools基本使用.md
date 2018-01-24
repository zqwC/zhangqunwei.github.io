---
layout: post
title: Autotools基本使用
date: 2017-12-29 
tags: 工具使用    
---

### 准备工作
源代码项目结构：
[下载项目](http://download.csdn.net/detail/w__l__/9874315)
```
　test1
　　|-->src
　　|　　|-->main.c
　　|　　|-->fun.c
　　|-->inc
　　|　　|-->hello.h
　　|　　|-->fun.c
```

---

### 操作流程   

注：命令均在 test1目录下执行   
    

* `autoscan`　\[auto scan 自动扫描\]   
    作用：扫描当前目录   
    产生文件：configure.scan    
* 修改configure.scan后缀名为.ac  
* 修改configure.ac文件中的内容如下 
    ```   
    ...    
    AC_INIT(hello,1.0, 1509282319@qq.com)       //打包发行信息
    AM_INIT_AUTOMAKE(hello,1.0)                 //MAKE相关信息
    ...
    AC_OUTPUT(Makefile)                         //添加输出文件名
    ```
* `aclocal`　\[auto config local 自动配置本地\]    　　　
    产生文件：aclocal.m4    
* `autoheader`　\[auto header 自动头文件\]    　　　
    产生文件：config.h.in    
* `autoconf`　\[auto config 自动配置\]    　　　
    产生可执行文件：configure    
* 编写Makefile.am文件    
    ```
    bin_PROGRAMS = hello
    hello_SOURCES = ./src/main.c ./src/fun.c
    ```
* `automake --add-missing`（需执行三次)
    产生文件：Makefile.in   
* `./configure`
    产生文件：Makefile    
* `make`
    产生可执行文件：hello     
* `make install`　　　安装到系统    
* `make dist` 　　　自动打包    

### 操作演示
![这里写图片描述](/images/post/2017-12-29-Autotools基本使用/20170619111042660-1.gif)

### 总结：
一图胜过千言万语

![一图胜过千言万语](/images/post/2017-12-29-Autotools基本使用/20170619111726371-2.bmp)
