+++
title = "openeis"
template = "home.html"
+++

**openeis** —— *Open Enterprise Information System(开源企业信息系统)*,是构建企业信息化系统的基础设施层:一个围绕 **创建 → 发布 → 部署** 生命周期的统一 CLI,外加可扩展的 `openeis-<name>` 插件机制。

## 核心工作流

| 命令 | 作用 | 状态 |
|---|---|---|
| `openeis generate` | 从 KDL 模板生成项目(本地 / git / archive / favorite;Liquid 渲染 + Rhai 钩子) | ✅ 已发布 |
| `openeis publish` | 发布产物到 registry | ⏳ 规划中 |
| `openeis deploy` | 按 `openeis.kdl` 构建 → 打包 → 发布 | ✅ 已发布 |

`deploy` 支持 **rust / node / python** 项目(自动探测),打包成 **tarball / wheel / docker**,通过 **SSH/rsync** 发布。

## 天生可扩展

openeis 本身也是 cargo 风格的外部子命令分发器:`PATH` 中任何名为 `openeis-<name>` 的可执行文件,都会被 `openeis <name>` 调用。

- `openeis install <src>` —— 安装插件(本地路径或 URL)
- `openeis uninstall <name>` —— 卸载插件
- `openeis --list` —— 列出内置 + 外部命令(外部命令经 `__describe` 协议提供描述)
- `openeis completions <shell>` —— bash / zsh / fish / … 补全(外部插件也能补全)

## 配置文件

| 文件 | 作用域 | 使用者 |
|---|---|---|
| `<project>/openeis.kdl` | 项目(构建 / 打包 / 目标) | `deploy`,未来 `publish` |
| `<template>/template.kdl` | 模板(过滤 / 占位符 / 钩子) | `generate` |
| `~/.config/openeis/openeis.kdl` | 全局收藏 | `generate` |

## 快速开始

```sh
cargo install openeis            # 或从源码构建:cargo build
openeis --help
openeis generate --path ./my-template --name my-app
openeis deploy --dry-run
```
