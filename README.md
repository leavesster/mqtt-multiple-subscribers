# Multiple Subscribers To One Topic

[English](#English) | [中文](#中文)

## English

This demo demonstrates that multiple clients subscribing to the same topic and sending puback data to each other after publishing will not interfere with each other.
If you want multiple clients to subscribe to the same topic in a competitive manner, you can refer to the [Shared Subscriptions](https://www.hivemq.com/blog/mqtt5-essentials-part7-shared-subscriptions/) feature of mqtt v5.

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
如果想要让多个 client 对同一个 topic 进行抢夺性订阅，可以参考 mqtt v5 的 [Shared Subscriptions](https://www.hivemq.com/blog/mqtt5-essentials-part7-shared-subscriptions/) 特性。

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