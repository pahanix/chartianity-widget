var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "June 09, 2012",
  items : [{"position":7,"artist_title":"MercyMe","media_title":"The Hurt & The Healer","media_url":"http://www.billboard.com/images/defaults/artist-94.gif"},{"position":54,"artist_title":"Mary Mary","media_title":"Go Get It (Soundtrack)","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":88,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":113,"artist_title":"Jon McLaughlin","media_title":"Promising Promises","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drs300/s321/s32176ei02d.jpg"},{"position":156,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":197,"artist_title":"12 Stones","media_title":"Beneath The Scars","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drs200/s236/s23620d7eoq.jpg"},{"position":200,"artist_title":"Matt Redman","media_title":"10,000 Reasons","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq200/q200/q20080rs5xj.jpg"}],
  
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