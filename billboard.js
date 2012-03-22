var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "March 31, 2012",
  items : [{"position":59,"artist_title":"Dave Barnes","media_title":"Stories To Tell","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr600/r696/r69632qlubp.jpg"},{"position":88,"artist_title":"Phillips, Craig & Dean","media_title":"Breathe In","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr800/r861/r86152iwmct.jpg"},{"position":98,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":99,"artist_title":"newsboys","media_title":"God's Not Dead","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88863pdv3o.jpg"},{"position":107,"artist_title":"Impending Doom","media_title":"Baptized In Filth","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr700/r704/r70497le8o2.jpg"},{"position":121,"artist_title":"Skillet","media_title":"Awake","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n218/n21875onqu6.jpg"},{"position":125,"artist_title":"MercyMe","media_title":"The Generous Mr. Lovewell","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn700/n757/n75752lo2e2.jpg"},{"position":162,"artist_title":"Mat Kearney","media_title":"Young Love","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq300/q340/q34057hybzx.jpg"},{"position":165,"artist_title":"LeCrae","media_title":"Rehab","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro300/o373/o37328vgxzx.jpg"},{"position":173,"artist_title":"Kari Jobe","media_title":"Where I Find You","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr000/r024/r02480o6hgg.jpg"},{"position":187,"artist_title":"Kutless","media_title":"Believer","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr600/r653/r65380hmu7g.jpg"}],
  
  generateHTML : function(imageSize){
    var html = "<table><thead><tr><th colspan=\"4\">" + 
      this.chartName + ", <nobr>Week of " + this.publishDate + 
      "</nobr> / Christian Artists</th></tr></thead><tbody>"
      
      for (i=0; i < this.items.length; i++) {
        html += "<tr>"
        html += "<td><img src=\"" + this.items[i].media_url + "\" style=\"width:"+ imageSize +";height:"+ imageSize +"\"></td>"
        html += "<td>" + this.items[i].position + "</td>"
        html += "<td>" + this.items[i].artist_title + "</td>"
        html += "<td>" + this.items[i].media_title + "</td>"
        html += "</tr>"
      }
    html += "</tbody></table><p>Tracked by <a href=\"http://chartianity.com\">Chartianity</a></p>";
    return html;
  },
  
  init : function(options){    
    options = options || {};
    var container = options["container"] || "chartianity-widget"
    var imageSize = options["imageSize"] || "24px";

    // create container if doesn't exist
    if (!document.getElementById(container))
      document.write('<div id="' + container + '"></div>');
      
    document.getElementById(container).innerHTML = this.generateHTML(imageSize);
  }
}

Chartianity.init();