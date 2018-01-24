---
layout: post
title: Visual Studio Code 使用浏览器打开HTML文件
date: 2017-12-28
tags: 工具使用
---


### 步骤如下   
1. 同时按住Ctrl + Shift + p打开如下图所示，输入ctr后选择第二项，打开tasks.json文件。    
    ![这里写图片描述](/images/post/2017-12-28-VisualStudioCode使用浏览器打开HTML文件/20170621214413467-1.png)   

2.将tasks.json中的内容改为如下所示，保存后即可。   
![这里写图片描述](/images/post/2017-12-28-VisualStudioCode使用浏览器打开HTML文件/20170621214515922-2.png)   
* 图中代码如下     
    ```
    {
        // See https://go.microsoft.com/fwlink/?LinkId=733558
        // for the documentation about the tasks.json format
        "version": "0.1.0",
        "command": "explorer",
        "windows": {
            "command": "explorer.exe" 
        },
        "isShellCommand": true,
        "args": ["${file}"],
        "showOutput": "never"
    }        
    ```
３.在html文件下按住Ctrl + Shift + b即可使用系统默认的浏览器打开html文件。    

- - - - - - - - - - - - - - - - - - - - - - - -

### 总结      
1. 我对json并不了解，但是看上面的代码大概意思是通过命令打开资源管理器，然后打开相应的html文件。整个过程类似你平时通过界面打开html文件一样，先鼠标双击打开资源管理器找到相应html文件然后双击该文件，系统调用默认的浏览器打开该文件。这里只不过是把整个过程变成一个类似脚本或Windows下的批处理的东西。    
2. 在此之前我也看了一下网上其他的做法，其实都类似，只不过其他的都不太方便，都会有各种各样的问题。有的做法只针对当前路径下的html文件，每次都要改文件名，而且好像路径还必须不能有中文，有的是可以选择自己常用的浏览器来打开html，但是我试了，浏览器的路径中含有中文也是打不开。     
3. 其实用浏览器打开html文件的方法有很多，比如    
    3.1. 用Ctrl + Shift + V预览，不过我刚试了一下效果不太好。    
    3.2. 在终端下输入文件名打开，你可能会觉得输入文件名比较慢，但是不必担心，终端下支持Tab自动补全，和linux环境下一样。    

![这里写图片描述](/images/post/2017-12-28-VisualStudioCode使用浏览器打开HTML文件/20170621222730544-3.png)

Visual Studio Code我也是刚用，很多地方都不太熟，希望路过的大牛不吝赐教。