---
title: "LeetCode 3731：找出缺失的元素"
description: "使用固定大小的计数桶，在线性时间内找出数组最小值与最大值之间缺失的元素。"
publishedAt: 2026-08-04
category: algorithms
tags: [leetcode, array, counting]
draft: false
---

## 题目信息

- **题号：** 3731
- **难度：** Easy
- **类型：** 数组
- **完成日期：** 2026-08-04
- **题目链接：** [3731. 找出缺失的元素](https://leetcode.cn/problems/find-missing-elements/)

## 问题描述

找出数组 `nums` 的数值范围内缺失的所有元素，也就是严格位于数组最小值与最大值之间、但没有出现在数组中的整数。

## 思路

数组长度不超过 `100`，元素值也不超过 `100`，因此可以直接使用固定大小的计数桶记录每个数字是否出现过。

遍历数组时，同时得到数组的最小值和最大值，并在桶中标记出现过的数字。随后遍历开区间 `(minn, maxn)`：如果某个数字没有被标记，就将它加入答案。

## 解法

```cpp
class Solution {
public:
    vector<int> findMissingElements(vector<int>& nums) {
        int minn = 101;
        int maxn = 0;
        vector<int> count(102);

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] < minn) {
                minn = nums[i];
            }
            if (nums[i] > maxn) {
                maxn = nums[i];
            }
            count[nums[i]] = 1;
        }

        vector<int> ans;
        for (int i = minn + 1; i < maxn; i++) {
            if (!count[i]) {
                ans.push_back(i);
            }
        }
        return ans;
    }
};
```

## 复杂度分析

设数组长度为 $n$，数组中最大值与最小值之差为 $U$。

- **时间复杂度：** $O(n + U)$。在本题的数据范围内 $U \le 100$，也可以视为 $O(n)$。
- **空间复杂度：** $O(1)$。计数桶的大小固定为 `102`，不会随着输入规模增长。
