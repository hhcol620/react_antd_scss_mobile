---
to: src/pages/<%= folder %>/index.js
---

import React from 'react'
import './index.module.scss'

function <%= name.replace(name[0],name[0].toUpperCase()) %> () {
  return (
    <div className="container">
      <h1>这是<%= name %>页面</h1>
    </div>
  )
}

export default <%= name.replace(name[0],name[0].toUpperCase()) %>

