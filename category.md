---
layout: default
title: Category
---
<div class="home" id="home">
  {% for category in site.categories %}
  <h3 style="text-align: center" class="posts" id="{{ category[0] }}">{{ category[0] }}</h3>
  <ul class="posts noList">
    {% for post in category[1] %}
    <li>
        <h4>
            <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            <br>
            <span class="date">
              {{ post.date | date: '%Y.%m.%d' }} /
              <strong class="disqus-comment-count" data-disqus-identifier="{{post.id}}">0 Comments</strong>
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