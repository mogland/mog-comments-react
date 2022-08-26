# NEXT Comments <small><small>For React</small></small>
> 为使用 React 的前端打造的评论区组件
>
> A comment section component built to use the React Frontend Framework.

<img align="center" width="836" alt="image" src="https://user-images.githubusercontent.com/62133302/186838369-4e1df1fc-76f2-4224-bfba-dc96f159c5fd.png">


## Usage

```bash
# in bash
pnpm i @nx-space/nx-comments-react
```

> **Note**  
>
> 此组件不包含请求部分，你需要传入一个 apiClient 使其工作

```ts
// import
import { Comments } from '@nx-space/nx-comments-react';
// enjoy it!
<Comments type="Post" path="hello-world" id={'123'} apiClient={apiClient} />
```

## Features

- [X] GitHub 风格
- [X] 原生黑暗模式支持
- [X] 自定义请求器
- [X] 子评论嵌套支持
- [X] TypeScript 自动补全支持
- [ ] 表情选择器
- [ ] Markdown 支持

## License

此项目 AGPLv3 授权开源，使用此项目进行的二次创作或者衍生项目也必须开源。

## Author

nx-comments-react © Wibus, Released under the AGPL-3.0 License. 

> [Personal Website](http://iucky.cn/) · [Blog](https://blog.iucky.cn/) · GitHub [@wibus-wee](https://github.com/wibus-wee/) · Telegram [@wibus✪](https://t.me/wibus_wee)
