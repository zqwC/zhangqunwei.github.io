---
layout: post
title: git基本使用
date: 2017-12-08 
tags: 工具使用  
---

### git 配置  
git的配置可以选择全局配置或者项目配置，各有各的缺点。  
全局配置只需配置一次，但以后你新建的每一个项目都会使用该配置。     
项目配置只针对当前的项目，当你新建其他项目时需要重新配置。

* 全局配置  
全局配置会影响你建立的每一个项目，执行以下命令会在你的用户目录下建立一个.gitconfig的文件。
    > $ git config --global user.name "你的git用户名"  
    > $ git config --global user.email "你的邮箱"

* 项目配置  
项目配置只会影响你当前的项目
    > $ git config user.name "你的git用户名"  
    > $ git config user.email "你的邮箱"

### 获得一个仓库

获得一个仓库的方法有两种：  
1，Clone一个仓库  
    从远程clone一个别人的或者自己的仓库（项目）   
> $ git clone https://github.com/zhangqunwei/vim


2，在本地新建一个仓库  
    若准备将一个新项目置于git的版本控制之下，则需先进到项目的根目录下，然后执行git的初始化命令
> $ cd project              (project是项目的跟路径)
> $ git init 


### 使用流程

1，在工作区中编辑或修改文件  
2，将修改添加到索引区(也叫暂存区)  
- 方式1：添加指定文件file1,file2,file3到索引区
    > $ git add file1 file2 file3

- 方式2：添加当前目录的所有文件到索引区
    > $ git add .

3，查看当前项目的状态
> $ git status

4，将索引区中的内容提交到版本库,之后会提示输入本次修改的注释
> $ git commit  
  
5，推送到远程仓库
> $ git push


