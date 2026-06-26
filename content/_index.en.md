+++
title = "openeis"
template = "home.html"
+++

**openeis** — *Open Enterprise Information System* — is the infrastructure
layer for building enterprise information systems: a single CLI around the
**create → publish → deploy** lifecycle, plus an extensible `openeis-<name>`
plugin mechanism.

## Core workflow

| Command | What it does | Status |
|---|---|---|
| `openeis generate` | Scaffold a project from a KDL template (local / git / archive / favorite; Liquid rendering + Rhai hooks) | ✅ shipped |
| `openeis publish` | Publish artifacts to a registry | ⏳ planned |
| `openeis deploy` | Build → package → publish, driven by `openeis.kdl` | ✅ shipped |

`deploy` supports **rust / node / python** projects (auto-detected), packages
as **tarball / wheel / docker**, and ships via **SSH/rsync**.

## Extensible by design

openeis is also a cargo-style external-subcommand dispatcher: any executable
named `openeis-<name>` on your `PATH` is invoked by `openeis <name>`.

- `openeis install <src>` — install a plugin (local path or http(s) URL)
- `openeis uninstall <name>` — remove one
- `openeis --list` — list built-in + external commands
- `openeis completions <shell>` — bash / zsh / fish / … completions

## Configuration

| File | Scope | Used by |
|---|---|---|
| `<project>/openeis.kdl` | project (build/package/target) | `deploy`, future `publish` |
| `<template>/template.kdl` | template (filters/placeholders/hooks) | `generate` |
| `~/.config/openeis/openeis.kdl` | global favorites | `generate` |

## Quick start

```sh
cargo install openeis            # or build from source: cargo build
openeis --help
openeis generate --path ./my-template --name my-app
openeis deploy --dry-run
```
