# XieCheng_Manage

后台管理系统

一个用于对后台数据进行审核管理的系统，该系统只会展示没有被逻辑删除的数据。

系统用户有两种权限：

1、审核人员：拥有审核数据的权限（通过、不通过），没有删除数据的权限；

2、管理员：拥有操作所有数据的权限（包括通过、不通过、删除）。

系统用户通过登录界面登录，通过注册界面注册。

（注意点：系统用户的用户名必须是唯一的，否则注册界面不允许通过。）

管理界面分成 4 种展示方式：

1、所有游记：展示所有游记的信息和操作；

2、待审核游记：展示所有“待审核”状态的游记的信息和操作；

3、通过游记：展示所有“通过”状态的游记的信息和操作；

4、拒绝游记：展示所有“拒绝”状态的游记的信息和操作；

其中，只有“待审核”状态游记的操作包括“通过、不通过、删除”，其余状态的游记操作只包括“删除”。
