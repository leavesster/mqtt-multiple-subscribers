# Multiple Subscribers To One Topic

[English](#English) | [中文](#中文)

## English

This demo demonstrates that multiple clients subscribing to the same topic and sending puback data to each other after publishing will not interfere with each other.

### Environment Setup

```shell
pnpm install
```

### How to Test

Open four terminals and execute the following four commands respectively:

```shell
pnpm run broker
```

```shell
pnpm run publisher
```

```shell
pnpm run client
```

```shell
pnpm run client
```

### Test Result

Two clients can receive messages sent by the publisher at the same time without interfering with each other.

## 中文

这个 demo 证明多个 client 订阅同一个 topic，互相发送给 publish 的 puback 数据，不会互相影响。

### 环境准备

```shell
pnpm install
```

### 测试方式

开启四个终端，分别执行以下四个命令：

```shell
pnpm run broker
```

```shell
pnpm run publisher
```

```shell
pnpm run client
```

```shell
pnpm run client
```

### 测试结果

两个 client 能够同时收到 publisher 发送的消息，互不影响。