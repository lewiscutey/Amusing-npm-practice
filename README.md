## 一些有趣库的小练习

### css-what
  * 解析css选择器
```js
const selectorList = CSSwhat.parse("#outer[DATA=11] .inner DIV");
~>
[
  [ 
    { type: 'attribute',
      name: 'id',
      action: 'equals',
      value: 'outer',
      ignoreCase: false },
    { type: 'attribute',
      name: 'data',
      action: 'equals',
      value: '11',
      ignoreCase: false },
    { type: 'descendant' },
    { type: 'attribute',
      name: 'class',
      action: 'element',
      value: 'inner',
      ignoreCase: false },
    { type: 'descendant' },
    { type: 'tag', name: 'div' }
  ]
]
```

### mocha
  * 测试