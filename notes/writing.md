---
title: Writing
layout: page
permalink: /writing/
---
{% for post in site.posts %}
<div class="post-container">
  <div class="post-date">
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date: "%B %Y" }}</time>
  </div>
  <h4 class="post-title">
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h4>
</div>
{% endfor %}