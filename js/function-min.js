const e="/js/course.json",t=new URLSearchParams(window.location.search);_.isNull(localStorage.getItem("course_list"))?$.getJSON(e).done((function(e){localStorage.setItem("course_list",JSON.stringify(e))})):JSON.parse(localStorage.getItem("course_list")),_.isNull(localStorage.getItem("users"))||JSON.parse(localStorage.getItem("users")),localStorage.getItem("login-popup-skip");var a=document.querySelectorAll(".needs-validation"),i=$("#form-join-program");Array.prototype.slice.call(a).forEach((function(e){e.addEventListener("submit",(function(t){e.checkValidity()||(t.preventDefault(),t.stopPropagation()),e.classList.add("was-validated")}),!1)}));var s="<div class='col-12 col-md-12'><div class='alert alert-info' role='alert'><div class='d-flex'><div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div><div><h6 class='alert-heading'>Pelatihan tidak ditemukan</h6><p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p></div></div></div></div>",l=function(e,t,a,i){var s=t.course_type.toLowerCase()=="Online Self-Paced Learning".toLowerCase()?"text-bg-warning":"text-bg-help",l=i?'<img src="'+t.course_image+'" class="card-img-top" loading="lazy" alt="'+t.course_title+'">':'<img src="'+t.course_image+'" loading="lazy" class="card-img-top" alt="'+t.course_title+'">',r="/pelatihan/detail.html?title="+t.course_title.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/gi,"-").toLowerCase()+"&id="+t.course_id,c="<img class='me-1 card-logo' src='"+t.lp_logo+"' alt='"+t.lp_name+"'>",o=null==a?"col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5":"wl-carousel-card pb-3",n="<div id='"+t.course_id+"' class='"+o+"'><div class='card pds-card'><a href='"+r+"' class='text-decoration-none to-detail-course' title='"+t.course_title+"'><div class='card-cover'>"+l+"<div class='card-cover-overlay'><div class='d-flex justify-content-between align-middle'><div class='align-self-center'><div class='card-company'>"+c+"<span class='course-lp-name'>"+t.lp_name+"</span></div></div><div class='align-self-center'><span class='badge rounded-pill text-capitalize "+s+"'>"+t.course_type.replace(/Online/g,"")+"</span></div></div></div></div><div class='card-body'><h6 class='mb-1 course-title text-capitalize' title='"+t.course_title+"'>"+t.course_title+"</h6><div class='d-flex my-2'><span class='badge text-bg-light text-capitalize badge-ellipsis' title='"+t.course_category+"'>"+t.course_category+"</span></div><div><div class='course-real-price mb-1'><span>"+t.number_of_materials+" Modul</span> <span class='badge text-bg-ghost-success'>"+t.duration+" (Menit)</span></div></div></div></div></a></div>";$(e).append(n).ready((function(){$(".to-detail-course").unbind("click"),$(".to-detail-course").click((function(e){e.preventDefault(),window.location.href=$(this).attr("href")}))}))},r=function(e,t,a,i,s,r,c,o,d){$(e).unbind("click"),$(e).on("click",(function(){var u=$(e);a=i,i+=t,c+=1,$.each(s.slice(a,i),(function(e,t){d?function(e,t){var a='<div class="col-12.col-sm-6 col-md-4 col-xl-3"><a class="text-capitalize card-company-list" href="pelatihan/index.html?topic=&keyword=&price=&lp='+t.lp_name.replace(/\s+/gi,"-").toLowerCase()+'" title="'+t.course_title+'"><img class="me-1 card-logo" height="40" src="'+t.lp_logo+'" alt="'+t.lp_name+'" loading="lazy"/><span class="lp-name">'+t.lp_name+"</span></a></div>";$(e).append(a)}(r,t):l(r,t,null,!0)})),n(u,o,c)}))},c=function(e,t,a,i){$(e).click((function(e){var c=$("#course-lists"),o=$("#load-more"),d=(c=$("#course-lists"),[]),u=[],p=[],m=[],f=[],h=[],g=t,b=$("#filter-keyword").val();$.each($(".filter-category:checked"),(function(e,t){d[e]=$(t).val()})),$.each($(".filter-price:checked"),(function(e,t){u[e]=$(t).val()})),$.each($(".filter-lp:checked"),(function(e,t){p[e]=$(t).val()})),$.each($(".filter-trending:checked"),(function(e,t){f[e]=$(t).val()})),$.each($(".filter-newcourse:checked"),(function(e,t){m[e]=$(t).val()})),$.each($(".filter-method:checked"),(function(e,t){h[e]=$(t).val()})),$(".quick-filter").removeClass("btn-primary").addClass("btn-outline-light"),_.isEmpty(d)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:d}),_.each(d,(function(e,t){$('.quick-filter[data-category="'+e+'"]').addClass("btn-primary").removeClass("btn-outline-light")}))),_.isEmpty(p)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p})),_.isEmpty(h)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_type.replace(/-|%20/gi," ").toLowerCase())>-1}),{keys:h}));var v=_.filter(g,(function(e){return-1!==e.course_title.toLowerCase().indexOf(b.toLowerCase())})),y=v.length,k=Math.ceil(y/12);c.html(""),$("#course-counter div").html("Ditemukan <b>"+y+"</b> pelatihan"),0!==v.length?$.each(v.slice(a,i),(function(e,t){l(c,t,null,!0)})):c.html(s),r(o,12,a,i,v,c,1,k),n(o,k,1),$("#modalFilter").modal("hide");var w=d.join(","),C=p.join(","),x=h.join(",");window.history.replaceState(null,null,"?topic="+w.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+b.replace(/\s+/gi,"-").toLowerCase()+"&lp="+C.replace(/\s+/gi,"-").toLowerCase()+"&method="+x.replace(/\s+/gi,"-").toLowerCase())}))},o=function(e,t,a,i,c){$(e).on("submit",(function(e){e.preventDefault();var t=$("#course-lists"),o=$("#load-more"),d=[],u=[],p=[],m=[],f=[],h=[],g=a,b=$(this).find("input").val();$.each($(".filter-category:checked"),(function(e,t){d[e]=$(t).val()})),$.each($(".filter-price:checked"),(function(e,t){u[e]=$(t).val()})),$.each($(".filter-lp:checked"),(function(e,t){p[e]=$(t).val()})),$.each($(".filter-category:checked"),(function(e,t){d[e]=$(t).val()})),$.each($(".filter-price:checked"),(function(e,t){u[e]=$(t).val()})),$.each($(".filter-lp:checked"),(function(e,t){p[e]=$(t).val()})),$.each($(".filter-trending:checked"),(function(e,t){f[e]=$(t).val()})),$.each($(".filter-newcourse:checked"),(function(e,t){m[e]=$(t).val()})),$.each($(".filter-method:checked"),(function(e,t){h[e]=$(t).val()})),$(".quick-filter").removeClass("btn-primary").addClass("btn-outline-light"),_.isEmpty(u)||(3==u.length?($(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),$('.quick-filter[price="diskon besar"], .quick-filter[price="0"], .quick-filter[price="20000"]').addClass("btn-primary").removeClass("btn-outline-light")):_.contains(u,"diskon besar")&&_.contains(u,"20000")?(g=_.filter(a,(function(e){return"0"!==e.course_after_discount})),$(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),$('.quick-filter[price="20000"], .quick-filter[price="diskon besar"]').addClass("btn-primary").removeClass("btn-outline-light")):_.contains(u,"diskon besar")&&_.contains(u,"0")?(u=_.contains(u,"0")?u.concat(""):u,g=_.filter(a,(function(e){return"20000"!==e.course_after_discount})),$(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),$('.quick-filter[price="0"], .quick-filter[price="diskon besar"]').addClass("btn-primary").removeClass("btn-outline-light")):_.contains(u,"diskon besar")?(g=_.filter(a,(function(e){return"20000"!==e.course_after_discount&&"0"!==e.course_after_discount})),$(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),$('.quick-filter[price="diskon besar"]').addClass("btn-primary").removeClass("btn-outline-light")):(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:u}),_.each(u,(function(e,t){$(".quick-filter[price="+e+"]").addClass("btn-primary").removeClass("btn-outline-light")})))),_.isEmpty(d)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:d}),_.each(d,(function(e,t){$('.quick-filter[data-category="'+e+'"]').addClass("btn-primary").removeClass("btn-outline-light")}))),_.isEmpty(p)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:p})),_.isEmpty(h)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_type.replace(/-|%20/gi," ").toLowerCase())>-1}),{keys:h}));var v=_.filter(g,(function(e){return-1!==e.course_title.toLowerCase().indexOf(b.toLowerCase())})),y=v.length,k=Math.ceil(y/12);$(window).scrollTop(0),t.html(""),$("#course-counter div").html("Ditemukann <b>"+y+"</b> pelatihan"),0!==v.length?$.each(v.slice(i,c),(function(e,a){l(t,a,null,!0)})):t.html(s),r(o,12,i,c,v,t,1,k),n(o,k,1);var w=d.join(","),C=p.join(","),x=h.join(",");window.history.replaceState(null,null,"?topic="+w.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+b.replace(/\s+/gi,"-").toLowerCase()+"&lp="+C.replace(/\s+/gi,"-").toLowerCase()+"&method="+x.replace(/\s+/gi,"-").toLowerCase())})),$(t).on("click",(function(t){$(e).trigger("submit")}))};var n=function(e,t,a){t>0&&a<t?e.removeClass("visually-hidden"):e.addClass("visually-hidden")};function d(){$(document).ready((function(){var a=$("#course-lists"),i=$("#load-more"),d=$("#btn-apply-filter"),u=$("#form-search"),p=$("#button-search"),m=_.isEmpty(t.get("topic"))?"":t.get("topic").toLowerCase().replace(/-|%20/gi," ").split(","),f=_.isEmpty(t.get("lp"))?"":t.get("lp").toLowerCase().replace(/-|%20/gi," ").split(","),h=_.isEmpty(t.get("keyword"))?"":t.get("keyword").replace(/-|%20/gi," "),g=_.isEmpty(t.get("method"))?"":t.get("method").replace(/-|%20/gi," ").split(",");_.isEmpty(m)&&_.isEmpty(f)||$("#button-addon1").attr("class","btn btn-primary"),a.length&&$.getJSON(e,(function(e){var b=_.shuffle(e);$(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),_.isEmpty(m)||(b=_.filter(b,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:m}),_.each(m,(function(e,t){$('.quick-filter[data-category="'+e+'"]').addClass("btn-primary").removeClass("btn-outline-light")}))),_.isEmpty(f)||(b=_.filter(b,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:f})),_.isEmpty(g)||(b=_.filter(b,(function(e){return this.keys.indexOf(e.course_type.toLowerCase().replace(/-|%20/gi," "))>-1}),{keys:g}));var v=null!==h?_.filter(b,(function(e){return-1!==e.course_title.toLowerCase().indexOf(h.toLowerCase())})):b;null!==h&&$("#filter-keyword").val(h);var y=v.length,k=Math.ceil(y/12);$(window).scrollTop(0),setTimeout((function(){var h;a.html(""),$("#course-counter div").html("Ditemukan <b>"+y+"</b> pelatihan"),_.isEmpty(v)?a.html(s):$.each(v.slice(0,12),(function(e,t){l(a,t,null,!0)})),n(i,k,1),r(i,12,0,12,v,a,1,k),function(e,t,a,i){for(var s,l={},r={},c=[],o=[],n=0;s=e[n++];){var d=s.course_category.toLowerCase(),u=s.lp_name.toLowerCase();d in l||(l[d]=1,c.push(d)),u in r||(r[u]=1,o.push(u))}c=c.sort(),o=o.sort(),$("#course-LP, #course-category").html(""),_.each(c,(function(e,t){var i=-1!==_.indexOf(a,e)?"checked":"";$("#course-category").append('<div class="form-check"><input class="form-check-input filter-category" id="filter-category-'+t+'" type="checkbox" value="'+e+'" '+i+'><label class="form-check-label text-capitalize" for="filter-category-'+t+'">'+e+"</label></div>")})),_.each(o,(function(e,a){var i=-1!==_.indexOf(t,e)?"checked":"";$("#course-LP").append('<div class="form-check"><input class="form-check-input filter-lp" id="filter-lp-'+a+'" type="checkbox" value="'+e+'" '+i+'><label class="form-check-label text-capitalize" for="filter-lp-'+a+'">'+e+"</label></div>")})),_.each(i,(function(e){$('.filter-method[value="'+e+'"]').attr("checked",!0)})),_.isEmpty(t)&&_.isEmpty(a)||$("#btn-reset-filter").removeClass("disabled")}(e,f,m,g),h="input.form-check-input",$("#btn-reset-filter").click((function(e){$(this).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"),$(h).prop("checked",!1)})),function(e,t){$(e).click((function(a){$(e).is(":checked")?($(t).removeClass("disabled"),$("#button-addon1").attr("class","btn btn-primary")):($(t).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"))}))}(".form-check-input","#btn-reset-filter"),c(d,e,0,12),o(u,p,e,0,12),$(".quick-filter").click((function(e,a){e.preventDefault();var i=$(this);i.attr("data-target"),i.hasClass("btn-primary")?i.addClass("btn-outline-light").removeClass("btn-primary"):i.removeClass("btn-outline-light").addClass("btn-primary");var s=_.isEmpty(t.get("keyword"))?"":t.get("keyword").replace(/-|%20/gi," "),l=[];$(".filter-category").attr("checked",!1),$.each($('.quick-filter.btn-primary[data-target="course_category"]'),(function(e,t){l[e]=$(t).attr("data-category"),$('input.filter-category[value="'+$(t).attr("data-category")+'"]').attr("checked",!0)})),categoryJoin=l.join(","),window.history.replaceState(null,null,"?topic="+categoryJoin.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+s.replace(/\s+/gi,"-").toLowerCase()),$("#btn-apply-filter").trigger("click")}))}),1500)})).fail((function(){}))}))}function u(){var a=_.isEmpty(t.get("id"))?"ISW-P0005":t.get("id"),i=$("#detail-course"),s=$("#courseCarousel"),r=$("#breadcrumb-detail ol");i.length&&$.getJSON(e,(function(e){var t=_.findWhere(e,{course_id:a}),c=_.sample(_.reject(_.filter(e,(function(e){return-1!==e.course_category.toLowerCase().indexOf(t.course_category.toLowerCase())})),(function(e){return e.course_id==a})),4),o="/pelatihan/index.html?topic="+t.course_category.toLowerCase()+"&keyword=&price=&lp=",n=$(".similar-course");r.html('<ol class="breadcrumb overflow-hidden fs-7 mb-0"><li class="breadcrumb-item"> <a href="/"><i class="bi bi-house-door"></i></a></li><li class="breadcrumb-item"> <a href="/pelatihan">Pelatihan </a></li><li class="breadcrumb-item active text-truncate">'+t.course_title+"</li></ol>");_.isNull(localStorage.getItem("course_takens"))||JSON.parse(localStorage.getItem("course_takens"));$.when(i.html("").append(function(e){if(!_.isEmpty(e.cs_call_center)||!_.isEmpty(e.cs_email)||!_.isEmpty(e.cs_wa)){var t="",a="",i="";_.each(e.cs_call_center.trim().split(","),(function(e){if(!_.isEmpty(e))return t+='<a class="btn btn-ghost-primary btn-contact-center mb-2" data-service="call center" target="_blank" href="tel:'+e+'"> <i class="bi bi-telephone-fill me-2"></i>'+e+"</a>"})),_.each(e.cs_wa.trim().split(","),(function(e){if(!_.isEmpty(e))return a+='<a class="btn btn-ghost-success btn-contact-center mb-2" data-service="whatsapp" target="_blank" href="https://wa.me/'+e+'"> <i class="bi bi-whatsapp me-2"></i>'+e+"</a>"})),_.each(e.cs_email.trim().split(","),(function(e){if(!_.isEmpty(e))return i+='<a class="btn btn-ghost-light btn-contact-center mb-2" data-service="email" target="_blank" href="mailto:'+e+'"> <i class="bi bi-envelope-at me-2"></i>'+e+"</a>"}));_.isEmpty(e.cs_call_center);_.isEmpty(e.cs_wa),_.isEmpty(e.cs_email)}return'<section class="section-detail-course"><div class="container pt-3 pb-5 px-4 px-md-0"><div class="row flex-row-reverse"><div class="col-12 col-md-4 col-lg-4"><div class="course-cover-sticky"><div class="course-cover"><img loading="lazy" class="w-100 rounded" src="'+e.course_image+'" alt=""/></div><div class="mt-3 d-flex justify-content-between course-cta p-3 px-lg-0 w-flex gap-3"><div class="px-lg-0 px-1 m-r1 w-70"><a href="'+e.course_url+'" target="_blank" class="btn btn-orange btn-lg w-100">Lihat Pelatihan</a></div><button class="btn btn-light btn-md share-button w-30 px-1" type="button" title="Bagikan halaman ini"><i class="bi bi-share-fill">&nbsp;&nbsp;</i>Bagikan</button></div></div></div><div class="col-12 col-md-8 col-lg-8 pe-xl-4"><h1 class="mb-3">'+e.course_title+'</h1><div class="row mt-5 mb-4"> <div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-person-badge"></i><div class="ps-2"> <h6 class="fs-7 mb-2">Instruktur</h6><p class="fs-7">'+e.instructure_name+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-clock"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Durasi Pelatihan</h6><p class="fs-7">'+e.duration+' (Menit)</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-journal-bookmark-fill"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Modul Pelatihan</h6><p class="fs-7">'+e.number_of_materials+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-person-video"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Metode Ajar</h6><span class="badge rounded-pill text-bg-warning">'+e.course_type+'</span></div></div><div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-tag"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Kategori</h6><a href="/pelatihan/index.html?topic='+e.course_category.replace(/\s+/gi,"-").toLowerCase()+'&keyword=&price=&lp=" class="badge text-bg-light text-capitalize text-decoration-none">'+e.course_category+'</a></div></div><div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-link-45deg"></i><div class="ps-2 overflow-hidden"><h6 class="fs-7 mb-2">Link Pelatihan</h6><a class="fs-7 d-flex align-items-center" href="'+e.course_url+'" target="_blank" title="'+e.course_title+'"> <span class="pds-truncate">'+e.course_url+'</span><i class="bi bi-arrow-up-right-square-fill"></i></a></div></div></div><hr/><article><section class="py-3"><h4 class="mb-4">Deskripsi Pelatihan </h4><article id="description">'+e.description.replace(/\n/g,"</br>")+"</article></section><hr/></article></div></div></div></section>"}(t))).then((function(){var e=$(".share-button"),a=$(".share-dialog"),i=$(".close-button");$(".btn-contact-center").click((function(e){var t=$(this);t.attr("data-service"),t.text()})),e.click((function(){var e=$("#share-facebook"),i=$("#share-twitter"),s=$("#share-linkedin"),l=$("#share-email"),r=$("#copy-link"),c=$(".pen-url");e.attr("href","https://www.facebook.com/sharer/sharer.php?u="+window.location.href),i.attr("href","https://twitter.com/intent/tweet?text=Ikuti pelatihan "+t.course_title+" hanya di Alibaba Cloud Academy, sertifikasi gratis untuk peserta Prakerja dalam bidang Big Data dan Cloud Computing, berlangsung Agustus-Oktober 2024&hashtags=alibaba-cloud-academy"),s.attr("href","https://www.linkedin.com/shareArticle?mini=true&url="+window.location.href+"&title=hanya di Alibaba Cloud Academy, sertifikasi gratis untuk peserta Prakerja dalam bidang Big Data dan Cloud Computing, berlangsung Agustus-Oktober 2024&hashtags=alibaba-cloud-academy"),l.attr("href","mailto:contact@email.com?subject=Pelatihan"+t.course_title+" &body=hanya di Alibaba Cloud Academy, sertifikasi gratis untuk peserta Prakerja dalam bidang Big Data dan Cloud Computing, berlangsung Agustus-Oktober 2024&hashtags=alibaba-cloud-academy"),c.html(window.location.href),navigator.share?navigator.share({title:"Prakerja x Alibaba Cloud Academy - "+t.course_title,url:window.location.href}).then((()=>{})).catch(console.error):(a.addClass("is-open"),$("#target-share a").click((function(){social=$(this).attr("data-share")})),r.click((function(){navigator.clipboard.writeText(c.text()),$("#toast-sucess-copy").toast("show"),$(".close-toast-copy").click((function(){$("#toast-sucess-copy").toast("hide")}))})))})),i.click((function(){a.removeClass("is-open")}))})),s.html(""),n.attr("href",o),_.isEmpty(c)?s.html('<section class="section-course mb-4"><div class="container py-0 px-4 px-md-0"><div class="d-flex align-items-center justify-content-between mb-3"><h4>Pelatihan Serupa</h4></div><div class="d-flex similar-course-empty rounded justify-content-center"><div class="col-lg-8 d-lg-flex p-4 justify-content-center"><div class="p-md-3 mb-3 mb-lg-0"><img loading="lazy" src="img/img-ornament-1.svg" height="116" /></div><div class="p-md-3"><h5>Sepertinya tidak ditemukan pelatihan serupa</h5><p>Yuk cari pelatihan lainnya yang mungkin kamu tertarik untuk ikuti</p><a class="btn btn-primary" href="/pelatihan">Cari Pelatihan Lainnya</a></div></div></div></div></section>').css({display:"block"}):$.each(c,(function(e,t){l(s,t,null,!0)}))}))}function p(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}const m=document.getElementById("EmailAddress");function f(){$(i).off("submit").on("submit",(function(e,t){e.preventDefault();var a=i.find("#NamaLengkap").val(),s=i.find("#EmailAddress").val(),l=i.find("#IDAlibaba").val(),r=i.find("#CourseCat option:selected").val(),c=i.find("#Background option:selected").val(),o=i.find("#Reference option:selected").val(),n=i.find("#ReasontoJoin option:selected").val(),d=$("#submit-form"),u=JSON.stringify({NamaLengkap:a,EmailAddress:s,IDAlibaba:l,CourseCat:r,Background:c,Reference:o,ReasontoJoin:n});_.isEmpty(a)||_.isEmpty(s)||_.isEmpty(r)||_.isEmpty(c)||_.isEmpty(o)||_.isEmpty(n)||_.isEmpty(l)||!p(s)||(d.attr("disabled",!0).html('<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> <span role="status">Loading...</span>'),$.ajax({dataType:"json",contentType:"application/json",headers:{apiKey:"PfOS2Vg0zBdHT/Bmgdf6Uw==","Content-Type":"application/json"},type:"POST",url:"https://aliacademy-api.prakerja.go.id/",data:u}).done((function(e){e.data;d.attr("disabled",!1).html('Gabung Program <i class="bi bi-arrow-right"> </i>'),$("#enrollSuccess").modal("show"),i[0].reset()})))}))}m&&m.addEventListener("input",(function(){p(this.value)?this.setCustomValidity(""):this.setCustomValidity("Email not Valid")})),function(e){e(window).scroll((function(){var t=e(window).scrollTop();t>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),t>=214?e(".search-boxy").addClass("is-fixed"):e(".search-boxy").removeClass("is-fixed"),t>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".nav-link, .nav-cta").on("click",(function(t){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")})),e(".modal-search-trigger").click((function(){e(".modal-search").fadeIn().toggleClass("is-show"),e(".modal-search-input").focus(),e("body").toggleClass("freeze")})),e(".modal-search-close").click((function(){e(".modal-search").fadeOut().toggleClass("is-show"),e("body").toggleClass("freeze")})),e(".owl-carousel-btb").owlCarousel({loop:!0,margin:24,nav:!1,dots:!1,responsive:{0:{items:1.2},600:{items:2.2},1200:{items:4}}});var t=e("#liveToastBtn"),a=e("#liveToast");if(t.length){var i=bootstrap.Toast.getOrCreateInstance(a);t.click((function(){i.show()}))}d(),u(),f()}(jQuery),AOS.init();[...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map((e=>new bootstrap.Tooltip(e)));
//# sourceMappingURL=function-min.js.map