# Client-Side

这里是对Co-VSCode客户端的介绍

客户端的源码在src文件夹里，包含以下各部分

* client文件夹：客户端独有相关代码
* core文件夹：协同编程相关核心抽象数据结构
* test文件夹：测试相关，目前无内容
* utils文件夹：各种可能会复用到的小功能
* constans.ts：各种常量
* extens.ts：插件的入口文件
* types.ts：对于各种数据类型的定义，来自老代码，为方便阅读而定义



接下来将会对这些代码中重要的部分做简要介绍

## client

* connection文件夹：与服务端连接相关代码。两个文件分别对应连接和shareDB相连接所需要使用的端口以及msg包通信所需要使用的端口
* entity文件夹：抽象的实体类。coFile抽象对应被协同操作的文件对象；coRepo抽象对应一个协同工作的代码仓库。docManager是一个静态的全局对象，用来进行shareDB相应数据的管理和取用。
* inter文件夹：
