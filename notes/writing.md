---
title: The Schilling Point
layout: page-template
permalink: /writing/
---
<p><i>Subscribe <a href="https://www.theschillingpoint.com/subscribe">here</a>.</i></p>

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