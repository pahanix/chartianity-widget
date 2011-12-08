var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "December 17, 2011",
  items : [{"position":33,"artist_title":"Chris Tomlin","media_title":"Glory In The Highest: Christmas Songs Of Worship","media_url":"http://ecx.images-amazon.com/images/I/51ek3POuFDL._SL500_AA300_.jpg"},{"position":55,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":102,"artist_title":"Chris Tomlin","media_title":"How Great Is Our God: The Essential Collection","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88881m6an7.jpg"},{"position":104,"artist_title":"Casting Crowns","media_title":"Peace On Earth","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drl700/l786/l78687xbhar.jpg"},{"position":107,"artist_title":"tobyMac","media_title":"Christmas In Diverse City","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq500/q560/q56081vsdu2.jpg"},{"position":127,"artist_title":"Amy Grant","media_title":"The Christmas Collection","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drl700/l725/l72532npsb2.jpg"},{"position":134,"artist_title":"David Crowder*Band","media_title":"Oh For Joy (EP)","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10560.jpg"},{"position":165,"artist_title":"Matthew West","media_title":"The Heart Of Christmas","media_url":"http://www.billboard.com/images/pref_images/p75370e2z4c.jpg"},{"position":190,"artist_title":"Michael W. Smith","media_title":"Glory","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq700/q728/q72892b4oln.jpg"},{"position":193,"artist_title":"Mandisa","media_title":"What If We Were Real","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p856/p85656pgcnc.jpg"}],
  
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