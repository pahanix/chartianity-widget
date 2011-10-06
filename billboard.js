var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "October 15, 2011",
  items : [{"position":8,"artist_title":"Switchfoot","media_title":"Vice Verses","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq500/q595/q59573qtdx4.jpg"},{"position":34,"artist_title":"Needtobreathe","media_title":"The Reckoning","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":62,"artist_title":"Casting Crowns","media_title":"Until The Whole World Hears","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n260/n26008x9hct.jpg"},{"position":79,"artist_title":"Tenth Avenue North","media_title":"The Light Meets The Dark","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn800/n824/n82497adxjg.jpg"},{"position":122,"artist_title":"LeCrae","media_title":"Rehab","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro300/o373/o37328vgxzx.jpg"},{"position":136,"artist_title":"The Devil Wears Prada","media_title":"Dead Throne","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq200/q241/q24182c4vv5.jpg"},{"position":140,"artist_title":"Kirk Franklin","media_title":"Hello Fear","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p810/p81072moviq.jpg"},{"position":147,"artist_title":"Chris August","media_title":"No Far Away","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro000/o070/o07089jl5c4.jpg"},{"position":150,"artist_title":"Jamie Grace","media_title":"One Song At A Time","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":170,"artist_title":"Skillet","media_title":"Awake","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n218/n21875onqu6.jpg"},{"position":185,"artist_title":"Press Play","media_title":"World Anthem","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq100/q194/q19481j4qlc.jpg"},{"position":190,"artist_title":"Oh, Sleeper","media_title":"Children Of Fire","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":192,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":194,"artist_title":"Mat Kearney","media_title":"Young Love","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq300/q340/q34057hybzx.jpg"}],
  
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