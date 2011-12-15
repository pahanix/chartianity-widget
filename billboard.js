var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "December 24, 2011",
  items : [{"position":36,"artist_title":"Chris Tomlin","media_title":"Glory In The Highest: Christmas Songs Of Worship","media_url":"http://ecx.images-amazon.com/images/I/51ek3POuFDL._SL500_AA300_.jpg"},{"position":57,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":88,"artist_title":"Casting Crowns","media_title":"Peace On Earth","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drl700/l786/l78687xbhar.jpg"},{"position":110,"artist_title":"Chris Tomlin","media_title":"How Great Is Our God: The Essential Collection","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88881m6an7.jpg"},{"position":125,"artist_title":"David Crowder*Band","media_title":"Oh For Joy (EP)","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10560.jpg"},{"position":131,"artist_title":"newsboys","media_title":"God's Not Dead","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88863pdv3o.jpg"},{"position":136,"artist_title":"tobyMac","media_title":"Christmas In Diverse City","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq500/q560/q56081vsdu2.jpg"},{"position":138,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":150,"artist_title":"Amy Grant","media_title":"The Christmas Collection","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drl700/l725/l72532npsb2.jpg"},{"position":154,"artist_title":"Jamie Grace","media_title":"One Song At A Time","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":170,"artist_title":"Mandisa","media_title":"What If We Were Real","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p856/p85656pgcnc.jpg"},{"position":171,"artist_title":"Matthew West","media_title":"The Heart Of Christmas","media_url":"http://www.billboard.com/images/pref_images/p75370e2z4c.jpg"}],
  
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