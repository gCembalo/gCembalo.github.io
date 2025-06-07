---
layout: default
title: Home
---

Hi, I'm **Gabriele Cembalo**

I'm a Theoretical Physics student and this is my personal page, here you can find some of my notes, ideas and software projects.

My **GitHub** page: [gCembalo](https://github.com/gCembalo)
[//]: # (- [LinkedIn](https://linkedin.com/in/tuo-profilo))
[//]: # ([Email](gabriele.cembalo02@gmail.com))

---

### Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date | date: "%Y-%m-%d" }})
    </li>
  {% endfor %}
</ul>
