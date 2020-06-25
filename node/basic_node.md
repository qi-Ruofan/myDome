# Basic

## mac上github基本使用

第一步：设置user.name和user.email  
```
git config --global user.name "wenbo"  
git config --global user.email "1050794513@qq.com"
```

第二步：通过终端命令创建ssh key
```
ssh-keygen -t rsa -C "1050794513@qq.com"
```

第三步：终端查看.ssh/id_rsa.pub文件
```
vi .ssh/id_rsa.pub
```

第四步：登陆github添加ssh key