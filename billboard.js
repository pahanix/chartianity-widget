var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "November 05, 2011",
  items : [{"position":2,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":61,"artist_title":"Family Force 5","media_title":"III","media_url":"http://cdn.shopify.com/s/files/1/0052/2462/products/iiiep_cover_medium.jpg"},{"position":63,"artist_title":"Casting Crowns","media_title":"Until The Whole World Hears","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n260/n26008x9hct.jpg"},{"position":64,"artist_title":"Switchfoot","media_title":"Vice Verses","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq500/q595/q59573qtdx4.jpg"},{"position":96,"artist_title":"Sara Groves","media_title":"Invisible Empires","media_url":"http://ecx.images-amazon.com/images/I/51UspG-0lfL._SL500_AA300_.jpg"},{"position":97,"artist_title":"Mat Kearney","media_title":"Young Love","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq300/q340/q34057hybzx.jpg"},{"position":111,"artist_title":"Tenth Avenue North","media_title":"The Light Meets The Dark","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn800/n824/n82497adxjg.jpg"},{"position":115,"artist_title":"Chris Tomlin","media_title":"Glory In The Highest: Christmas Songs Of Worship","media_url":"http://ecx.images-amazon.com/images/I/51ek3POuFDL._SL500_AA300_.jpg"},{"position":134,"artist_title":"Needtobreathe","media_title":"The Reckoning","media_url":"http://static.global.ciscoeos.com/avatars/865/7fd/8657fdfe503429e6c7cab9b80e9d02f5_6.jpg"},{"position":150,"artist_title":"Mandisa","media_title":"What If We Were Real","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p856/p85656pgcnc.jpg"},{"position":164,"artist_title":"Skillet","media_title":"Awake","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n218/n21875onqu6.jpg"},{"position":185,"artist_title":"Kirk Franklin","media_title":"Hello Fear","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p810/p81072moviq.jpg"}],
  
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