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
* inter文件夹：caretView封装了光标视觉效果；fileEditor/repoEditor封装了文件内容编辑、文件级操作；statusBarView封装了状态栏视觉效果。
* watcher文件夹：监视器所在的文件夹，进行对应注册操作后插件会自动监视对应事件，并根据设定的逻辑进行后续处理。文件内容编辑事件对应的函数是onDidChangeTextDocument，后续改动需要在该事件中进行

## core

* action文件夹：定义了不同的数据类型来代表不同的操作，其中fileTree文件夹定义了文件相关操作对应的数据类型，而session则定义了新建仓库、加入仓库等相关操作所对应的数据类型。
* dal文件夹：目前无意义，来自老项目
* msg文件夹：定义了数据通信时的数据结构，其中repoZippedDataDto是加入仓库时获取到的仓库数据对应的数据结构；SimpleWsMessage是所有通信数据的抽象类；SiteIdDto则是确认与服务端相连接时收到分配siteId的对应数据结构。

此处还有一些需要说明的文件

* createWsMsgDataSerializer/Json2Data：前者是老项目的数据映射模块，后者负责本项目的数据映射，仅使用后者即可
* otModule：老项目的OT模块，本项目使用了ShareDB库，OT步骤已经被自动完成



项目主要内容见上文，现在大致说明客户端的工作流程

extension.ts是项目的入口，在输入相关信息后，插件会新建一个ClientCoRepo，并与服务端进行连接。此后本地有一个对应的抽象的仓库对象，一切行动都会在仓库对象中进行。后续用户执行的本地操作会被监控器检测到，进而触发不同的处理逻辑。

目前，文件级操作已经实现了新建文件（夹）的同步，删除、重命名功能待完善，具体可参考clientCoRepo.onWsMessage中新建操作进行实现。

各客户端文件内容协同同步已基本实现，但在多用户协同工作时，任意节点输入速度过快仍会导致最终内容不符合用户预期的情况，后续需要完善，相关部分见clientCoFile.contentUpdate函数。
