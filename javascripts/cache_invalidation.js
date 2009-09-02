
  function rl(now) {
    var loc = window.location.href.replace(/\?.*/, "");
    window.location.href = loc+"?cache="+now;
  }
  var qs = new Querystring();
  var ts = Number(qs.get("cache"));
  var now = Number(new Date().getTime());
  
    var ttl = 300 * 1000;
  
  if (ts) {
    var d = ts + ttl - now;
    if (d < 0)
      rl(now);
  }
  else
    rl(now);

