Chartianity = {
  chartName : "Billboard 200",
  publishDate : "September 10, 2011",
  items : [{"position":74,"artist_title":"MercyMe","media_title":"The Generous Mr. Lovewell","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn700/n757/n75752lo2e2.jpg"},{"position":81,"artist_title":"Mat Kearney","media_title":"Young Love","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq300/q340/q34057hybzx.jpg"},{"position":87,"artist_title":"Selah","media_title":"Hope Of The Broken World","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq100/q166/q16608vnk3r.jpg"},{"position":91,"artist_title":"Kirk Franklin","media_title":"Hello Fear","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p810/p81072moviq.jpg"},{"position":95,"artist_title":"Icon For Hire","media_title":"Scripted","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":114,"artist_title":"Skillet","media_title":"Awake","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n218/n21875onqu6.jpg"},{"position":163,"artist_title":"David Crowder Band","media_title":"Church Music","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":166,"artist_title":"Warr Acres","media_title":"Warr Acres","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq100/q123/q12383nbwdy.jpg"},{"position":169,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":188,"artist_title":"Steven Curtis Chapman","media_title":"Re:Creation","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq000/q039/q03905f4c15.jpg"}],
  
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