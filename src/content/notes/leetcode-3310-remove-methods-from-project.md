---
title: "LeetCode 3310：移除可疑的方法"
description: "使用邻接表建图和 BFS 搜索可疑方法，并判断这些方法能否被安全移除。"
publishedAt: 2026-08-06
category: algorithms
tags: [leetcode, graph, bfs, dfs]
draft: false
---

## 题目信息

- **题号：** 3310
- **难度：** Medium
- **类型：** 图、搜索
- **完成日期：** 2026-08-06
- **题目链接：** [3310. 移除可疑的方法](https://leetcode.cn/problems/remove-methods-from-project/)

## 问题描述

找出所有不会被移除的方法，也就是所有不属于以 `k` 为起点所能到达的可疑方法集合的结点。

需要特别注意：如果存在一个非可疑方法调用了可疑方法，那么这些可疑方法不能被安全移除，此时必须保留全部方法。

## 思路

首先根据调用关系建立有向图，然后从方法 `k` 开始搜索。所有从 `k` 可达的方法都属于可疑方法，可以使用一个数组标记它们是否被访问过。

BFS 和 DFS 都可以完成搜索。不过本题的数据规模最大可达 $10^5$，递归 DFS 可能因为递归层数过深而爆栈，因此使用 BFS 会更稳妥。

完成搜索后，再遍历所有调用关系。如果发现某个非可疑方法调用了可疑方法，说明无法只移除可疑方法，需要返回全部方法；否则返回所有非可疑方法。

## 解法

```cpp
class Solution {
public:
    vector<int> remainingMethods(int n, int k,
                                 vector<vector<int>>& invocations) {
        vector<vector<int>> graph(n);
        for (auto& e : invocations) {
            graph[e[0]].push_back(e[1]);
        }

        vector<int> suspicious(n, 0);

        queue<int> q;
        q.push(k);
        suspicious[k] = 1;

        while (!q.empty()) {
            int cur = q.front();
            q.pop();

            for (int next : graph[cur]) {
                if (!suspicious[next]) {
                    suspicious[next] = 1;
                    q.push(next);
                }
            }
        }

        for (auto& e : invocations) {
            if (!suspicious[e[0]] && suspicious[e[1]]) {
                vector<int> ans(n);
                iota(ans.begin(), ans.end(), 0);
                return ans;
            }
        }

        vector<int> ans;
        for (int i = 0; i < n; i++) {
            if (!suspicious[i]) {
                ans.push_back(i);
            }
        }
        return ans;
    }
};
```

## 复杂度分析

- **时间复杂度：** $O(n + m)$，其中 $m$ 为调用关系的数量。
- **空间复杂度：** $O(n + m)$，用于保存邻接表、访问标记和 BFS 队列。

<details>
<summary>一些需要掌握的技巧</summary>

### 邻接表建图

```cpp
vector<vector<int>> graph(n);
for (auto& e : invocations) {
    graph[e[0]].push_back(e[1]);
}
```

### DFS

```cpp
auto dfs = [&](auto&& self, int x) -> void {
    suspicious[x] = 1;
    for (int y : graph[x]) {
        if (!suspicious[y]) {
            self(self, y);
        }
    }
};
dfs(dfs, k);
```

### BFS

```cpp
queue<int> q;
q.push(k);
suspicious[k] = 1;

while (!q.empty()) {
    int cur = q.front();
    q.pop();

    for (int y : graph[cur]) {
        if (!suspicious[y]) {
            suspicious[y] = 1;
            q.push(y);
        }
    }
}
```

</details>
