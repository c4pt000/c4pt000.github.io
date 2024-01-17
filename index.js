(function(){
				result("", navigator.appCodeName);

				result("", navigator.appVersion);
				
		

				
        $('#example').append('');
  
				if(navigator.userAgent.indexOf('Firefox') != -1){
					document.getElementById("example").innerHTML += '<div class="browser"><img style="width:50px" src="https://d33wubrfki0l68.cloudfront.net/06185f059f69055733688518b798a0feb4c7f160/9f07a/images/product-identity-assets/firefox.png"></div> Your Firefox browser can generate cryptographic strength and secure wallet keys.';
				} else if(navigator.userAgent.indexOf('Safari') != -1){
					if(navigator.userAgent.indexOf('Chrome') != -1){
						document.getElementById("example").innerHTML += '<div class="browser"><img style="width:50px" src="https://vignette.wikia.nocookie.net/logopedia/images/6/65/Chorme_old_logo.png"></div>Your Chrome browser can generate cryptographic strength and secure wallet keys.';
					} else {
						document.getElementById("example").innerHTML += '<div class="browser"><img style="width:50px" src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/mac_apps/safari/yosemite-safai_icon.png"></div> Your Safari browser can generate cryptographic strength and secure wallet keys.';
					}
				} else if(navigator.userAgent.indexOf('Opera') != -1){
					document.getElementById("example").innerHTML += '<div class="browser"><img style="width:50px" src="https://cdn1.iconfinder.com/data/icons/android-png/256/Android-Opera-Mini.png"></div>Your Opera browser can generate cryptographic strength and secure wallet keys.';
				}
			})()
function result(title, data){
  var dt = $('');
  var dd = $('');
  
  dt.text(title);
  dd.text(data);
  
  $('#example').append(dt);
  $('#example').append(dd);
}