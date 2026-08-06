---
title: "Writing template: formulas, code, and collapsible notes"
description: "A private draft used to verify the technical-note publishing pipeline."
publishedAt: 2026-08-06
category: math
tags: [template, math]
draft: true
---

This draft is intentionally hidden from the public site. Duplicate it when starting a new technical note.

## Formula

$$
\operatorname{Attention}(Q,K,V)=\operatorname{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
$$

## Code

```python
scores = q @ k.transpose(-2, -1)
```

<details>
<summary>Open the full derivation</summary>

Put optional derivations, hints, or algorithm answers in a collapsible block.

</details>
