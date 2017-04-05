function gMap() {
    return new google.maps.Map(document.getElementById('gmap'),{
        zoom: 15,
        center: {lat: 50.078522, lng: 14.440081},
        scrollwheel: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}
function iMarkers(map) {
    var markers = [];
    
   markers[0] = new google.maps.Marker ({
        position: {lat: 50.078522, lng: 14.440081},
        map: map,
        animation: google.maps.Animation.DROP,
       title: 'Prague College'
    });
    
    return markers;
}

function iInfo(map, markers) {
    var html = [];
    html[0] = '<div class="infowin">' + '<h5>Prague College </h5>' + '<h5>Polska 10, Good luck finding it</h5>' + '</div>';
    
    var info = [];
    
    for (var i=0; i < html.length; i++){
      info[i] = addInfo(html[i], markers[i], map);
    }
    
   
    function addInfo(html, marker, map) {
        var iw = new google.maps.InfoWindow({
            content: html,
            maxWidth: 500
        });
        google.maps.event.addListener(marker, 'click', function(){
            if (isInfoOpen(iw)) {
                iw.close();
            }
            else {
                closeAllInfo(info);
                iw.open(map, this);
            }
        });
        return iw;
    }

    function isInfoOpen(infowin){
        var map = infowin.getMap();
        if (map == null || map == "undefined") return false;
        return true;
    }
    return info;
}

function closeAllInfo(info){
    for (var i=0; i < info.length; i++){
      info[i].close();
    }
}

function openInfo(index, map, info, markers ) {
    info[index].open(map, markers[index]);
}
   
   


$(document).ready(function() {
    $('.smoothscroll').smoothScroll({speed: 800});
    
    $('header').parallax();
    
    var map = gMap();
    var markers = iMarkers(map);
    var info = iInfo(map,markers);
    var lastTop = 0;
    var offset = 5;
    
    

    $(window).scroll(function() {
    
        var top = $(this).scrollTop();
    
        if( Math.abs(lastTop - top) >= offset) {
            
            if(top > lastTop) {
              $('nav').css('top', '-' + $('nav').height() + 'px');
            } else {
                $('nav').css('top', 0);
                }
            
            lastTop = top;  
            }
    });
    
    
    
     $('h1').each(function() {
        new Waypoint.Inview({
            element: this,
            entered: function(direction) {
                $(this.element).addClass("transition");
              
            },
            exited: function(direction) {
                $(this.element).removeClass("transition");
             
            }
        });
        
    });
    
     $('h4').each(function() {
        new Waypoint.Inview({
            element: this,
            entered: function(direction) {
                $(this.element).addClass("transition");
              
            },
            exited: function(direction) {
                $(this.element).removeClass("transition");
             
            }
        });
        
    });
    
    $('.style4speakers').each(function() {
        new Waypoint.Inview({
            element: this,
            entered: function(direction) {
                
                $(this.element).addClass('enlarge');
              
            },
            exited: function(direction) {
                $(this.element).removeClass('enlarge');
             
            }
        });
        
    });

});
    
    
   