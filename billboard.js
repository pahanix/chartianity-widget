var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "February 18, 2012",
  items : [{"position":58,"artist_title":"Kari Jobe","media_title":"Where I Find You","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr000/r024/r02480o6hgg.jpg"},{"position":64,"artist_title":"Third Day","media_title":"Move","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro500/o581/o58189k6b4l.jpg"},{"position":84,"artist_title":"David Crowder*Band","media_title":"Give Us Rest Or (A Requiem Mass In C [The Happiest Of All Keys])","media_url":"http://ecx.images-amazon.com/images/I/517noUMV5xL._SL500_AA280_.jpg"},{"position":88,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":108,"artist_title":"Skillet","media_title":"Awake","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n218/n21875onqu6.jpg"},{"position":154,"artist_title":"Chris Tomlin","media_title":"How Great Is Our God: The Essential Collection","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88881m6an7.jpg"},{"position":184,"artist_title":"Kirk Franklin","media_title":"Hello Fear","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p810/p81072moviq.jpg"}],
  
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