---
title: TC Myths coming soon
layout: root-page
comments: true
---

These myths have been identified, but they do not have a complete description, yet.

If you'd like to contribute to an unfinished myth, go to that myth topic and leave a comment.

If you don't see your favorite myth listed here or on the home page, leave a comment below.

<ol>
{% for file in site.myths %}
{% if file.last-edited-date = "NEVER" %}
  <li><a href="{{site.mybaseurl}}{{file.url}}" title="{{file.title}}">{{file.title}}</a></li>
{% endif %}
{% endfor%}
</ol>

