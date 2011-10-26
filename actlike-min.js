#<Net::HTTPOK:0x007fb92593a518>
Act={ATTR:"actlike",go:function(){for(var g=document.getElementsByTagName("*"),d=[],b,e=0;(b=g[e])!=null;e++){var c=b.getAttribute(Act.ATTR);if(c){for(var f=c.split("."),a=window;f.length>0;)a=a[f.shift()];if(a&&a!==window)d.push(new a(b));else throw"Could not find definition of "+c;}}return d}};
