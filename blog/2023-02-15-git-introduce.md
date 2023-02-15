---
slug: git-introduce
title: Làm quen với Git
authors:
  - name: Đoàn Khiết Thanh
    title: Developer Embedded C and JS
    url: https://github.com/doankhietthanh
    image_url: https://github.com/doankhietthanh.png
tags: [git]
---

# Làm quen với Git

Các bạn cần cài đặt Git theo bài hướng dẫn đây nhé
[Hướng dẫn cài đặt Git và Github](/blog/2023-02-15-git-install.md)

## 1. Giới thiệu về Git

Theo trang chủ của [Git (git-scm.com)](https://git-scm.com/)

> Git is a free and open source distributed version control system designed tohandle everything from small to very large projects with speed and efficiency.

Git là một hệ thống kiểm soát phiên bản phân tán (DVCS: Distributed Version Control System) mã nguồn mở và miễn phí được thiết kế để xử lý mọi thứ từ các dự án nhỏ đến rất lớn với tốc độ và hiệu quả.

### Ưu điểm

- Sử dụng hệ thống DVCS nên phân tán và tạp ra các bản sao sang các máy khác, giúp tránh mất mát dữ liệu so với việc lưu trữ tập trung.
- Điểm bảo dữ liệu toàn vẹn và an toàn.
- Dễ dàng trong việc quản lý dự án làm chung.

## 2. Một số thành phần của Git

> - Repository
> - Commit
> - Brand
> - Stage area

### 2.1. Repository

### 2.2. Commit

### 2.3. Brand

### 2.4. Stage area

## 3. Luồng hoạt động của Git

## 4. Một số câu lệnh cơ bản

Config email và usernam để đồng bộ với Git

```bash
git config --global user.name "User Name"
git config --global user.name "username@gmail.com"
```

Clone một repository trên Remote Repository bằng url.

```bash
git clone <url>
// Ví dụ clone một repository về từ Github
git clone https://github.com/doankhietthanh/Atmega328P_driver.git
```

Add một remote để làm việc

```bash
git remore add <url>
```

Add một file vào Stage area

```bash
git add <path_to_file>
// add toàn bộ file
git add .
```

Remove file khỏi Stage area

```bash
git reset <path_to_file>
```

Commit để lưu các thay đổi vào reprository đang làm việc

```bash
git commit -m "comment"
```

Backup lại commit chỉ định và không xóa file thay đổi

```bash
git reset -soft <commit>
```

Backup lại commit chỉ định và xóa file thay đổi

```bash
git reset -hard <commit>
```

Xem tất cả các branch đang có repository

```bash
git branch
```

Tạo mới một branch và chuyển qua branch đó

```bash
git branch -b <branch>
```

Chuyển qua một branch khác để làm việc

```bash
git checkout <branch>
```

Push (đẩy lên) những thay đổi từ Local Repository lên Remote Repository

```bash
git push <repo_name> <branch>
```

Pull (kéo về) những thay đổi mới nhất từ Remote Reposity về Local Repository

```bash
git pull <repo_name> <branch>
```

## 5. Tổng kết

Ở bài viết này, mình giới thiệu một số kiến thức cơ bản và quan trọng của Git, giúp các bạn mới làm quen có hiểu về Git và biết được các câu lệnh cơ bản của nó, nên có chút khó hiểu. Vì vậy ở bài viết tiếp theo, mình sẽ giới thiệu các bạn _làm quen với Github, phân biệt giữa Git và Github và hướng dẫn dùng Github trên VS Code_.

_Cảm ơn mọi người đã theo dõi bài viết này... 💕_
