var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "October 29, 2011",
  items : [{"position":54,"artist_title":"Switchfoot","media_title":"Vice Verses","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq500/q595/q59573qtdx4.jpg"},{"position":64,"artist_title":"Casting Crowns","media_title":"Until The Whole World Hears","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n260/n26008x9hct.jpg"},{"position":92,"artist_title":"Needtobreathe","media_title":"The Reckoning","media_url":"http://static.global.ciscoeos.com/avatars/865/7fd/8657fdfe503429e6c7cab9b80e9d02f5_6.jpg"},{"position":94,"artist_title":"Tenth Avenue North","media_title":"The Light Meets The Dark","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn800/n824/n82497adxjg.jpg"},{"position":114,"artist_title":"Deas Vail","media_title":"Deas Vail","media_url":"http://ecx.images-amazon.com/images/I/51-C6tDrkfL._SL500_AA280_.jpg"},{"position":141,"artist_title":"Chris August","media_title":"No Far Away","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro000/o070/o07089jl5c4.jpg"},{"position":147,"artist_title":"MercyMe","media_title":"The Generous Mr. Lovewell","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn700/n757/n75752lo2e2.jpg"},{"position":161,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":162,"artist_title":"Kirk Franklin","media_title":"Hello Fear","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p810/p81072moviq.jpg"},{"position":166,"artist_title":"LeCrae","media_title":"Rehab","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro300/o373/o37328vgxzx.jpg"},{"position":168,"artist_title":"Skillet","media_title":"Awake","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn200/n218/n21875onqu6.jpg"},{"position":197,"artist_title":"Third Day","media_title":"Move","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro500/o581/o58189k6b4l.jpg"}],
  
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