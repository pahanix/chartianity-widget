var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "August 11, 2012",
  items : [{"position":80,"artist_title":"tobyMac","media_title":"Tonight","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn400/n484/n48471kblg7.jpg"},{"position":88,"artist_title":"newsboys","media_title":"God's Not Dead","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88863pdv3o.jpg"},{"position":98,"artist_title":"Matt Redman","media_title":"10,000 Reasons","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq200/q200/q20080rs5xj.jpg"},{"position":115,"artist_title":"Jamie Grace","media_title":"One Song At A Time","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":131,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":139,"artist_title":"P.O.D.","media_title":"Murdered Love","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drs500/s506/s50664rvuiz.jpg"},{"position":141,"artist_title":"MercyMe","media_title":"The Hurt & The Healer","media_url":"http://www.billboard.com/images/defaults/artist-94.gif"},{"position":192,"artist_title":"Francesca Battistelli","media_title":"My Paper Heart","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr600/r668/r66857w18gq.jpg"}],
  
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