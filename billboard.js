var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "March 17, 2012",
  items : [{"position":36,"artist_title":"Kutless","media_title":"Believer","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr600/r653/r65380hmu7g.jpg"},{"position":101,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":105,"artist_title":"MercyMe","media_title":"The Generous Mr. Lovewell","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn700/n757/n75752lo2e2.jpg"},{"position":128,"artist_title":"for King & Country","media_title":"Crave","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":142,"artist_title":"Skillet","media_title":"Awake","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n218/n21875onqu6.jpg"},{"position":164,"artist_title":"Third Day","media_title":"Move","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro500/o581/o58189k6b4l.jpg"},{"position":175,"artist_title":"Kari Jobe","media_title":"Where I Find You","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr000/r024/r02480o6hgg.jpg"},{"position":177,"artist_title":"newsboys","media_title":"God's Not Dead","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88863pdv3o.jpg"},{"position":179,"artist_title":"Sent By Ravens","media_title":"Mean What You Say","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr600/r615/r61539tkz4y.jpg"}],
  
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