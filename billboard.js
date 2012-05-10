var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "May 19, 2012",
  items : [{"position":44,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":95,"artist_title":"newsboys","media_title":"God's Not Dead","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88863pdv3o.jpg"},{"position":101,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":115,"artist_title":"Thousand Foot Krutch","media_title":"The End Is Where We Begin","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr700/r763/r76394u20vh.jpg"},{"position":155,"artist_title":"Trip Lee","media_title":"The Good Life","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":186,"artist_title":"Point Of Grace","media_title":"A Thousand Little Things","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr700/r763/r76309mmphm.jpg"},{"position":198,"artist_title":"Jamie Grace","media_title":"One Song At A Time","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":200,"artist_title":"Mandisa","media_title":"What If We Were Real","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p856/p85656pgcnc.jpg"}],
  
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