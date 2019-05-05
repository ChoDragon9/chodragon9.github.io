---
layout: default
title: Tags
---
<div class="home" id="home">
  {% for tag in site.tags %}
    <a href="#{{ tag[0] }}">#{{ tag[0] }}</a>&nbsp;
  {% endfor %}
  
  {% for tag in site.tags %}
  <h3 style="text-align: center" class="posts" id="{{ tag[0] }}">#{{ tag[0] }}</h3>
  <ul class="posts noList">
    {% for post in tag[1] %}
    <li>
        <h4>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            <br>
            <span class="date">
              {{ post.date | date: '%Y.%m.%d' }}
            </span>
        </h4>
        <figure>
            <img 
              src="/assets/img/tags/{{post.tags[0]}}.png" 
              alt="{{post.tags[0]}}">
        </figure>
    </li>
    {% endfor %}
  </ul>
  {% endfor %}
</div>
