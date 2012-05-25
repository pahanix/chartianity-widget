var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "June 02, 2012",
  items : [{"position":31,"artist_title":"Mary Mary","media_title":"Go Get It (Soundtrack)","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":47,"artist_title":"mewithoutYou","media_title":"Ten Stories","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drs200/s242/s24256egswa.jpg"},{"position":49,"artist_title":"Owl City","media_title":"Shooting Star (EP)","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":63,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":76,"artist_title":"newsboys","media_title":"God's Not Dead","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88863pdv3o.jpg"},{"position":128,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":130,"artist_title":"Third Day","media_title":"Move","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro500/o581/o58189k6b4l.jpg"},{"position":147,"artist_title":"Jamie Grace","media_title":"One Song At A Time","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":164,"artist_title":"Thousand Foot Krutch","media_title":"The End Is Where We Begin","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr700/r763/r76394u20vh.jpg"},{"position":189,"artist_title":"tobyMac","media_title":"Tonight","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn400/n484/n48471kblg7.jpg"},{"position":195,"artist_title":"Matt Redman","media_title":"10,000 Reasons","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq200/q200/q20080rs5xj.jpg"}],
  
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