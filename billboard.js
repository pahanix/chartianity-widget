var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "September 24, 2011",
  items : [{"position":37,"artist_title":"Casting Crowns","media_title":"Until The Whole World Hears","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n260/n26008x9hct.jpg"},{"position":54,"artist_title":"MercyMe","media_title":"The Generous Mr. Lovewell","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn700/n757/n75752lo2e2.jpg"},{"position":84,"artist_title":"Jon McLaughlin","media_title":"Forever If Ever","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":102,"artist_title":"Kirk Franklin","media_title":"Hello Fear","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p810/p81072moviq.jpg"},{"position":107,"artist_title":"Mat Kearney","media_title":"Young Love","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq300/q340/q34057hybzx.jpg"},{"position":121,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":124,"artist_title":"Skillet","media_title":"Awake","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n218/n21875onqu6.jpg"},{"position":142,"artist_title":"Oh, Sleeper","media_title":"Children Of Fire","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":155,"artist_title":"Needtobreathe","media_title":"The Outsiders","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n228/n22862vq2ri.jpg"}],
  
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