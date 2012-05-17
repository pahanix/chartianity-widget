var Chartianity = {
  chartName : "Billboard 200",
  publishDate : "May 26, 2012",
  items : [{"position":16,"artist_title":"Mary Mary","media_title":"Go Get It (Soundtrack)","media_url":"http://www.billboard.com/images/defaults/album-94.gif"},{"position":30,"artist_title":"Laura Story","media_title":"Blessings","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp900/p910/p91034ot6n1.jpg"},{"position":44,"artist_title":"Casting Crowns","media_title":"Come To The Well","media_url":"http://www.newreleasetuesday.com/images/album_cover_images/cover_10491.jpg"},{"position":79,"artist_title":"Chris Tomlin","media_title":"And If Our God Is For Us...","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro900/o905/o90588sgk2v.jpg"},{"position":89,"artist_title":"Mandisa","media_title":"What If We Were Real","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp800/p856/p85656pgcnc.jpg"},{"position":99,"artist_title":"Michael W. Smith","media_title":"Decades Of Worship","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr200/r200/r20006wy1j3.jpg"},{"position":101,"artist_title":"newsboys","media_title":"God's Not Dead","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88863pdv3o.jpg"},{"position":147,"artist_title":"Michael W. Smith","media_title":"Glory","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq700/q728/q72892b4oln.jpg"},{"position":149,"artist_title":"Francesca Battistelli","media_title":"Hundred More Years","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drp500/p512/p51223kojp6.jpg"},{"position":155,"artist_title":"Matthew West","media_title":"The Story Of Your Life","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/dro500/o565/o56552tyfno.jpg"},{"position":158,"artist_title":"Thousand Foot Krutch","media_title":"The End Is Where We Begin","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drr700/r763/r76394u20vh.jpg"},{"position":184,"artist_title":"Chris Tomlin","media_title":"How Great Is Our God: The Essential Collection","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drq800/q888/q88881m6an7.jpg"},{"position":185,"artist_title":"Nicole C. Mullen","media_title":"The Ultimate Collection","media_url":"http://www.billboard.com/images/album_images/cov200/pop/cov200/drm600/m648/m64851hxdrb.jpg"}],
  
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