var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "April 28, 2012",
  items : [{"position":17,"artist_title":"Trip Lee","media_title":"The Good Life","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":36,"artist_title":"Demon Hunter","media_title":"True Defiance","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":103,"artist_title":"newsboys","media_title":"God's Not Dead","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88863pdv3o.jpg"},{"position":104,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":144,"artist_title":"Britt Nicole","media_title":"Gold","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr900/r932/r93242d28nl.jpg"},{"position":175,"artist_title":"Skillet","media_title":"Awake","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n218/n21875onqu6.jpg"},{"position":180,"artist_title":"Desperation Band","media_title":"Center Of It All","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":196,"artist_title":"tobyMac","media_title":"Dubbed & Freq'd: A Remix Project","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr900/r932/r93249o2prz.jpg"}],
  
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