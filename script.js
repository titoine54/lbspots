var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.382258, lng: -71.928324},
    zoom: 12
  });
}

$(function(){

				var list 		= $("#myList"),
					listItem	= $("> ul li",list),
					listCount	= listItem.length;

				function expand(){
					listItem.each(function(i){
						$(this).attr("style", "z-index:"+i+";"
							+ "-webkit-animation-delay:" + i * 100 + "ms;"
							   + "-moz-animation-delay:" + i * 100 + "ms;"
							     + "-o-animation-delay:" + i * 100 + "ms;"
							        + "animation-delay:" + i * 100 + "ms;");
				    });
					list.removeClass("collapse").addClass("expand");
				}

				function collapse(){
					listItem.each(function(i){
						i++;
						$(this).attr("style", "z-index:"+i+";"
							+ "-webkit-animation-delay:" + (listCount-i) * 100 + "ms;"
							   + "-moz-animation-delay:" + (listCount-i) * 100 + "ms;"
							     + "-o-animation-delay:" + (listCount-i) * 100 + "ms;"
							        + "animation-delay:" + (listCount-i) * 100 + "ms;");
				    });
					list.removeClass("expand").addClass("collapse");
				}

				$("span").bind("click", function(){
					if (list.hasClass("expand")) {
						collapse();
					}else{
						expand();
					}
				});

			});
