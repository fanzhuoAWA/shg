---
title: 示例文章
published: 2026-05-30
draft: true
---

# 测试

## 测试

### 测试

首先，让 Git 知道你是谁：git config --global user.name "你的GitHub用户名" 和 git config --global user.email "你的GitHub邮箱@example.com"

然后，将远程仓库地址改成 SSH 形式（如果你本来就是通过 SSH 克隆的，就不需要再修改）：git remote set-url origin git@github.com:xxx/xxx

随后，提交所有变更：git add .

接着，创建一次本地提交：git commit -m "项目初始化"

最后，把本地更改推送到远程仓库：git push