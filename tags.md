---
layout: default
title: Tags
---
<div class="home" id="home">
  {% for tag in site.tags %}
    <a href="#{{ tag[0] }}">#{{ tag[0] }}</a>
  {% endfor %}
  
  {% for tag in site.tags %}
  <h3 style="
      color: #888;
      text-align: center;
  " class="posts" id="#{{ tag[0] }}">#{{ tag[0] }}</h3>
  <ul class="posts noList">
    {% for post in tag[1] %}
    <li>
        <span class="date">{{ post.date | date: '%B %d, %Y' }}</span>
        <h3><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h3>
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>