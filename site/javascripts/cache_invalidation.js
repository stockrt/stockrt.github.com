---
layout: nil
---
{% if site.cache_invalidation %}
  function rl(now) {
    alert(window.location.href);
    var loc = window.location.href.replace(/\?.*/, "");
    alert(loc);
    var loc = loc.replace(/\/$/, "");
    alert(loc);
    window.location.href = loc+"?cache="+now;
  }
  var qs = new Querystring();
  var ts = Number(qs.get("cache"));
  alert(ts);
  var now = Number(new Date().getTime());
  {% if site.cache_invalidation.ttl < 60 %}
    var ttl = 60 * 1000;
  {% else %}
    var ttl = {{ site.cache_invalidation.ttl }} * 1000;
  {% endif %}
  if (ts) {
    var d = ts + ttl - now;
    if (d < 0)
      rl(now);
  }
  else
    rl(now);
{% endif %}
