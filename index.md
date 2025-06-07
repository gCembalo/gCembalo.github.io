---
layout: default
title: Home
---

Hi, I'm **Gabriele Cembalo**,
I'm a Theoretical Physics student and this is my personal page, here you can find some of my notes, ideas and software projects.

---

### My posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})
    </li>
  {% endfor %}
</ul>
