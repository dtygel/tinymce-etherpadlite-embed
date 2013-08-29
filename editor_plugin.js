(function(){tinymce.PluginManager.requireLangPack('etherpadlite');tinymce.create('tinymce.plugins.EtherPadLitePlugin',{init:function(ed,url){var t=this;t.editor=ed;if(!ed.getParam("plugin_etherpadlite_padServerUrl")){alert(etherpadlite.error);return null}var padUrl=ed.getParam("plugin_etherpadlite_padServerUrl");var padPrefix=(ed.getParam("plugin_etherpadlite_padNamesPrefix"))?ed.getParam("plugin_etherpadlite_padNamesPrefix"):"";var padWidth=(ed.getParam("plugin_etherpadlite_padWidth"))?ed.getParam("plugin_etherpadlite_padWidth"):"100%";var padHeight=(ed.getParam("plugin_etherpadlite_padHeight"))?ed.getParam("plugin_etherpadlite_padHeight"):"400";ed.addCommand('mceEtherPadLite',function(){var xmlhttp;if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest()}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")}xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){var padName=xmlhttp.responseText;var iframe="<iframe name='embed_readwrite' src='"+padUrl+padName+"?showControls=true&showChat=true&&alwaysShowChat=true&lang=pt&showLineNumbers=true&useMonospaceFont=false' width='"+padWidth+"' height='"+padHeight+"'></iframe>";ed.execCommand('mceInsertContent',false,iframe)}};xmlhttp.open("GET",url+"/etherpad_name_generator.php?padPrefix="+padPrefix,true);xmlhttp.send()});ed.addButton('etherpadlite',{title:'etherpadlite.desc',cmd:'mceEtherPadLite',image:url+'/img/etherpadlite.gif'})},getInfo:function(){return{longname:'Insert a collaborative text with Etherpad Lite',author:'Daniel Tygel',authorurl:'http://cirandas.net/dtygel',infourl:'https://github.com/dtygel/tinymce-etherpadlite-embed',version:tinymce.majorVersion+"."+tinymce.minorVersion}}});tinymce.PluginManager.add('etherpadlite',tinymce.plugins.EtherPadLitePlugin)})();
