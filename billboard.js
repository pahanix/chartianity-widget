var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "December 10, 2011",
  items : [{"position":23,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":58,"artist_title":"Chris Tomlin","media_title":"Glory In The Highest: Christmas Songs Of Worship","media_url":"http://ecx.images-amazon.com/images/I/51ek3POuFDL._SL500_AA300_.jpg"},{"position":59,"artist_title":"Chris Tomlin","media_title":"How Great Is Our God: The Essential Collection","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88881m6an7.jpg"},{"position":73,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":84,"artist_title":"tobyMac","media_title":"Christmas In Diverse City","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq500/q560/q56081vsdu2.jpg"},{"position":89,"artist_title":"David Crowder Band","media_title":"Oh For Joy (EP)","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10560.jpg"},{"position":110,"artist_title":"Chris Tomlin","media_title":"And If Our God Is For Us...","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro900/o905/o90588sgk2v.jpg"},{"position":121,"artist_title":"Michael W. Smith","media_title":"Glory","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq700/q728/q72892b4oln.jpg"},{"position":131,"artist_title":"Jeremy Camp","media_title":"We Cry Out: The Worship Project","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro100/o191/o19183y3o12.jpg"},{"position":137,"artist_title":"Casting Crowns","media_title":"Peace On Earth","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drl700/l786/l78687xbhar.jpg"},{"position":138,"artist_title":"newsboys","media_title":"God's Not Dead","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88863pdv3o.jpg"},{"position":157,"artist_title":"tobyMac","media_title":"Tonight","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn400/n484/n48471kblg7.jpg"},{"position":170,"artist_title":"Brandon Heath","media_title":"Leaving Eden","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp400/p439/p43982mtqjp.jpg"},{"position":171,"artist_title":"Matthew West","media_title":"The Story Of Your Life","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro500/o565/o56552tyfno.jpg"},{"position":174,"artist_title":"Amy Grant","media_title":"Christmas Memories","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":177,"artist_title":"Mandisa","media_title":"What If We Were Real","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p856/p85656pgcnc.jpg"},{"position":182,"artist_title":"Sanctus Real","media_title":"Pieces Of A Real Heart","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn500/n585/n58553mvikz.jpg"},{"position":184,"artist_title":"MercyMe","media_title":"The Generous Mr. Lovewell","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn700/n757/n75752lo2e2.jpg"},{"position":188,"artist_title":"Tenth Avenue North","media_title":"The Light Meets The Dark","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drn800/n824/n82497adxjg.jpg"},{"position":192,"artist_title":"Switchfoot","media_title":"Vice Verses","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq500/q595/q59573qtdx4.jpg"}],
  
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