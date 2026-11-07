// EDITE SOLO ESTOS 3 DATOS (se aplican a todas las páginas)
var TELEFONO="51944637497", TELEFONO2="51915369115", CORREO="administracion.scy@gmail.com", ESTUDIO="SCY Consulting Group", RUC="20616715128";
var P=[["index.html","Inicio"],["servicios.html","Servicios"],["regimenes.html","Regímenes"],["nosotros.html","Nosotros"]];
var here=location.pathname.split("/").pop()||"index.html";
var links=P.map(function(p){return '<li><a href="'+p[0]+'"'+(p[0]==here?' class="on"':'')+'>'+p[1]+'</a></li>'}).join("");
document.getElementById("hdr").innerHTML='<header><div class="wrap nav"><a class="logo" href="index.html">'+ESTUDIO+'</a><nav aria-label="Principal"><ul>'+links+'<li><a class="btn" href="contacto.html">Contacto</a></li></ul></nav></div></header>';
document.getElementById("ftr").innerHTML='<footer><div class="wrap"><div>© '+new Date().getFullYear()+' '+ESTUDIO+'. Todos los derechos reservados.<br>RUC '+RUC+'</div><div>'+P.map(function(p){return '<a href="'+p[0]+'">'+p[1]+'</a>'}).join("")+'<a href="contacto.html">Contacto</a></div></div></footer><a class="wa" href="https://wa.me/'+TELEFONO+'?text='+encodeURIComponent("Hola "+ESTUDIO+", quisiera una asesoría.")+'" aria-label="Escribir por WhatsApp"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="#fff" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z"/><circle cx="8" cy="12" r="1.3" fill="#1FA855"/><circle cx="12" cy="12" r="1.3" fill="#1FA855"/><circle cx="16" cy="12" r="1.3" fill="#1FA855"/></svg><span>WhatsApp</span></a>';
document.querySelectorAll("[data-tel2]").forEach(function(a){a.href="https://wa.me/"+TELEFONO2});
document.querySelectorAll("[data-tel]").forEach(function(a){a.href="https://wa.me/"+TELEFONO});
document.querySelectorAll("[data-mail]").forEach(function(a){a.href="mailto:"+CORREO;a.textContent=CORREO});
var f=document.getElementById("form");
if(f)f.addEventListener("submit",function(e){e.preventDefault();var g=function(i){return document.getElementById(i).value.trim()};
window.open("https://wa.me/"+TELEFONO+"?text="+encodeURIComponent("Hola "+ESTUDIO+", soy "+g("nombre")+". Mi negocio: "+(g("negocio")||"no indicado")+". Necesito: "+g("servicio")+". "+g("msg")),"_blank","noopener")});
