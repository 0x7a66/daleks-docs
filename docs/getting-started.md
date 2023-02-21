# 快速开始

为了快速上手了解系统功能，本文会帮助你将系统运行起来。

[[toc]]

## 本地运行

- 后端技术栈：Java、SpringBoot、Mysql、Redis、MongoDB
- 前端技术栈：React、Ant Design Pro

### 环境要求

- Java: 1.8+
- Mysql
- Redis 
- MongoDB
- Maven: 3+
- Node.js: 10+

### 源码获取

```bash
git clone https://github.com/0x7a66/daleks
```

使用你熟悉的IDE打开，本文以 [IntelliJ IDEA](https://www.jetbrains.com/zh-cn/idea/) 示例。

### 配置修改

打开 `backend/src/main/resources/application.properties`，修改端口、Mysql、MongoDB、Redis 等配置.

```properties
# 启动端口
server.port=8080

# Mysql
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/risk?autoReconnect=true&useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull
spring.datasource.username=root
spring.datasource.password=root

# MongoDB
spring.data.mongodb.uri=mongodb://root:root@127.0.0.1:27017/risk?authSource=admin

# Redis
spring.redis.host=127.0.0.1
spring.redis.password=root
spring.redis.port=6379
```

>其他配置项根据实际情况添加修改删除

### 数据库初始化

1. 初始化数据库表，导入 `db-init.sql` 到数据库
2. 初始化demo数据，导入 `db-demo.sql` 到数据库

### 启动运行

**启动后端服务**

打开 `backend/src/main/java/top/daleks/risk/Application.java`，运行 `main`方法，等到控制台输出 `risk server started...` 则表示后端服务启动成功。

![](./images/start.png)

**启动前端服务**

1. 安装依赖
    ```bash
    cd frontend && npm install
    ```

2. 启动服务
    ```bash
    npm run start:no-mock
    ```

根据控制台提示浏览器打开 `http://localhost:8000/` 即可进入系统.
![](./images/front.png)

>前端相关的构建运行文档请参考 [Ant Design Pro](https://pro.ant.design/zh-CN/docs/getting-started)


## docker 运行

1. 拉取 `daleks-docker`
```bash
git clone https://github.com/0x7a66/daleks-docker
```

2. 进入 `daleks-docker` 目录
```bash
cd daleks-docker
```

3. 运行
```bash
docker compose up -d
```
>老版本或 MAC 系统上可能需要执行 `docker-compose up -d`

4. 查看启动日志
```bash
docker logs daleks
```

若日志出现 `risk server started...` 表示启动成功。

浏览器打开 `http://localhost:8080/` 即可进入系统.