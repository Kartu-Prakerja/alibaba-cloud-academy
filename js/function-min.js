const e="/js/course.json",a=new URLSearchParams(window.location.search);var t=_.isNull(localStorage.getItem("course_list"))?$.getJSON(e).done((function(e){localStorage.setItem("course_list",JSON.stringify(e))})):JSON.parse(localStorage.getItem("course_list")),i=_.isNull(localStorage.getItem("users"))?null:JSON.parse(localStorage.getItem("users")),s=localStorage.getItem("login-popup-skip"),l=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(l).forEach((function(e){e.addEventListener("submit",(function(a){e.checkValidity()||(a.preventDefault(),a.stopPropagation()),e.classList.add("was-validated")}),!1)}));var r="<div class='col-12 col-md-12'><div class='alert alert-info' role='alert'><div class='d-flex'><div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div><div><h6 class='alert-heading'>Pelatihan tidak ditemukan</h6><p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p></div></div></div></div>",o=function(e,a,t,i){var s=a.course_type.toLowerCase()=="Online Self-Paced Learning".toLowerCase()?"text-bg-warning":"text-bg-help",l=i?'<img src="'+a.course_image+'" class="card-img-top" loading="lazy" alt="'+a.course_title+'">':'<img src="'+a.course_image+'" loading="lazy" class="card-img-top" alt="'+a.course_title+'">',r="/pelatihan/detail.html?title="+a.course_title.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/gi,"-").toLowerCase()+"&id="+a.course_id,o="<img class='me-1 card-logo' src='"+a.lp_logo+"' alt='"+a.lp_name+"'>",n=null==t?"col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5":"wl-carousel-card pb-3",c="<div id='"+a.course_id+"' class='"+n+"'><div class='card pds-card'><a href='"+r+"' class='text-decoration-none to-detail-course' title='"+a.course_title+"'><div class='card-cover'>"+l+"<div class='card-cover-overlay'><div class='d-flex justify-content-between align-middle'><div class='align-self-center'><div class='card-company'>"+o+"<span class='course-lp-name'>"+a.lp_name+"</span></div></div><div class='align-self-center'><span class='badge rounded-pill text-capitalize "+s+"'>"+a.course_type.replace(/Online/g,"")+"</span></div></div></div></div><div class='card-body'><h6 class='mb-1 course-title text-capitalize' title='"+a.course_title+"'>"+a.course_title+"</h6><div class='d-flex my-2'><span class='badge text-bg-light text-capitalize badge-ellipsis' title='"+a.course_category+"'>"+a.course_category+"</span></div><div><div class='course-real-price mb-1'><span>"+a.number_of_materials+" Modul</span> <span class='badge text-bg-ghost-success'>"+a.duration+" (Menit)</span></div></div></div></div></a></div>";$(e).append(c).ready((function(){$(".to-detail-course").unbind("click"),$(".to-detail-course").click((function(e){e.preventDefault(),window.location.href=$(this).attr("href")}))}))},n=function(e,a,t,i){a.course_type.toLowerCase(),"Online Self-Paced Learning".toLowerCase(),$("html").attr("page-class");var s='<img src="'+a.course_image+'" loading="lazy" class="card-img-top" alt="'+a.course_title+'">',l=(i?(a.logo_lp,a.lp_name):(a.logo_lp,a.lp_name),"/pelatihan/detail.html?title="+a.course_title.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/gi,"-").toLowerCase()+"&id="+a.course_id),r="100%"==a.course_discount||""==a.course_discount?"Gratis":"Rp "+Number(a.course_after_discount).toLocaleString("id"),o=("0"==a.course_price||Number(a.course_price).toLocaleString("id"),"100%"==a.course_discount||a.course_discount,'<a class="course-list-card d-flex align-items-center course-recommend-searc" href="'+l+'">'+s+'<span class="d-block w-100"><span class="course-title">'+a.course_title+'</span><span class="d-flex justify-content-between"><span class="course-price">'+r+'</span><span class="course-institution">'+a.lp_name+"</span></span></span></a>");$(e).append(o).ready((function(){$(".course-recommend-search").unbind("click"),$(".course-recommend-search").click((function(e){e.preventDefault(),window.location.href=$(this).attr("href")}))}))},c=function(e,a){var t='<div class="col-12.col-sm-6 col-md-4 col-xl-3"><a class="text-capitalize card-company-list" href="pelatihan/index.html?topic=&keyword=&price=&lp='+a.lp_name.replace(/\s+/gi,"-").toLowerCase()+'" title="'+a.course_title+'"><img class="me-1 card-logo" height="40" src="'+a.lp_logo+'" alt="'+a.lp_name+'" loading="lazy"/><span class="lp-name">'+a.lp_name+"</span></a></div>";$(e).append(t)},d=function(e,a,t,i,s,l,r,n,d){$(e).unbind("click"),$(e).on("click",(function(){var u=$(e);t=i,i+=a,r+=1,$.each(s.slice(t,i),(function(e,a){d?c(l,a):o(l,a,null,!0)})),m(u,n,r)}))},u=function(e,a,t,i){$(e).click((function(e){var s=$("#course-lists"),l=$("#load-more"),n=(s=$("#course-lists"),[]),c=[],u=[],p=[],h=[],f=[],g=a,v=$("#filter-keyword").val();$.each($(".filter-category:checked"),(function(e,a){n[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){c[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){u[e]=$(a).val()})),$.each($(".filter-trending:checked"),(function(e,a){h[e]=$(a).val()})),$.each($(".filter-newcourse:checked"),(function(e,a){p[e]=$(a).val()})),$.each($(".filter-method:checked"),(function(e,a){f[e]=$(a).val()})),$(".quick-filter").removeClass("btn-primary").addClass("btn-outline-light"),_.isEmpty(n)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:n}),_.each(n,(function(e,a){$('.quick-filter[data-category="'+e+'"]').addClass("btn-primary").removeClass("btn-outline-light")}))),_.isEmpty(u)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:u})),_.isEmpty(f)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_type.replace(/-|%20/gi," ").toLowerCase())>-1}),{keys:f}));var b=_.filter(g,(function(e){return-1!==e.course_title.toLowerCase().indexOf(v.toLowerCase())})),y=b.length,k=Math.ceil(y/12);s.html(""),$("#course-counter div").html("Ditemukan <b>"+y+"</b> pelatihan"),0!==b.length?$.each(b.slice(t,i),(function(e,a){o(s,a,null,!0)})):s.html(r),d(l,12,t,i,b,s,1,k),m(l,k,1),$("#modalFilter").modal("hide");var w=n.join(","),C=(c.join(","),u.join(",")),x=(p.join(","),h.join(","),f.join(","));window.history.replaceState(null,null,"?topic="+w.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+v.replace(/\s+/gi,"-").toLowerCase()+"&lp="+C.replace(/\s+/gi,"-").toLowerCase()+"&method="+x.replace(/\s+/gi,"-").toLowerCase())}))},p=function(e,a,t,i,s){$(e).on("submit",(function(e){e.preventDefault();var a=$("#course-lists"),l=$("#load-more"),n=[],c=[],u=[],p=[],h=[],f=[],g=t,v=$(this).find("input").val();$.each($(".filter-category:checked"),(function(e,a){n[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){c[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){u[e]=$(a).val()})),$.each($(".filter-category:checked"),(function(e,a){n[e]=$(a).val()})),$.each($(".filter-price:checked"),(function(e,a){c[e]=$(a).val()})),$.each($(".filter-lp:checked"),(function(e,a){u[e]=$(a).val()})),$.each($(".filter-trending:checked"),(function(e,a){h[e]=$(a).val()})),$.each($(".filter-newcourse:checked"),(function(e,a){p[e]=$(a).val()})),$.each($(".filter-method:checked"),(function(e,a){f[e]=$(a).val()})),$(".quick-filter").removeClass("btn-primary").addClass("btn-outline-light"),_.isEmpty(c)||(3==c.length?($(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),$('.quick-filter[price="diskon besar"], .quick-filter[price="0"], .quick-filter[price="20000"]').addClass("btn-primary").removeClass("btn-outline-light")):_.contains(c,"diskon besar")&&_.contains(c,"20000")?(g=_.filter(t,(function(e){return"0"!==e.course_after_discount})),$(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),$('.quick-filter[price="20000"], .quick-filter[price="diskon besar"]').addClass("btn-primary").removeClass("btn-outline-light")):_.contains(c,"diskon besar")&&_.contains(c,"0")?(c=_.contains(c,"0")?c.concat(""):c,g=_.filter(t,(function(e){return"20000"!==e.course_after_discount})),$(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),$('.quick-filter[price="0"], .quick-filter[price="diskon besar"]').addClass("btn-primary").removeClass("btn-outline-light")):_.contains(c,"diskon besar")?(g=_.filter(t,(function(e){return"20000"!==e.course_after_discount&&"0"!==e.course_after_discount})),$(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),$('.quick-filter[price="diskon besar"]').addClass("btn-primary").removeClass("btn-outline-light")):(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_after_discount)>-1}),{keys:c}),_.each(c,(function(e,a){$(".quick-filter[price="+e+"]").addClass("btn-primary").removeClass("btn-outline-light")})))),_.isEmpty(n)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:n}),_.each(n,(function(e,a){$('.quick-filter[data-category="'+e+'"]').addClass("btn-primary").removeClass("btn-outline-light")}))),_.isEmpty(u)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:u})),_.isEmpty(f)||(g=_.filter(g,(function(e){return this.keys.indexOf(e.course_type.replace(/-|%20/gi," ").toLowerCase())>-1}),{keys:f}));var b=_.filter(g,(function(e){return-1!==e.course_title.toLowerCase().indexOf(v.toLowerCase())})),y=b.length,k=Math.ceil(y/12);$(window).scrollTop(0),a.html(""),$("#course-counter div").html("Ditemukann <b>"+y+"</b> pelatihan"),0!==b.length?$.each(b.slice(i,s),(function(e,t){o(a,t,null,!0)})):a.html(r),d(l,12,i,s,b,a,1,k),m(l,k,1);var w=n.join(","),C=u.join(","),x=f.join(",");window.history.replaceState(null,null,"?topic="+w.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+v.replace(/\s+/gi,"-").toLowerCase()+"&lp="+C.replace(/\s+/gi,"-").toLowerCase()+"&method="+x.replace(/\s+/gi,"-").toLowerCase())})),$(a).on("click",(function(a){$(e).trigger("submit")}))};var m=function(e,a,t){a>0&&t<a?e.removeClass("visually-hidden"):e.addClass("visually-hidden")};function h(){$(document).ready((function(){var t=$("#course-lists"),i=$("#load-more"),s=$("#btn-apply-filter"),l=$("#form-search"),n=$("#button-search"),c=_.isEmpty(a.get("topic"))?"":a.get("topic").toLowerCase().replace(/-|%20/gi," ").split(","),h=_.isEmpty(a.get("lp"))?"":a.get("lp").toLowerCase().replace(/-|%20/gi," ").split(","),f=_.isEmpty(a.get("keyword"))?"":a.get("keyword").replace(/-|%20/gi," "),g=_.isEmpty(a.get("method"))?"":a.get("method").replace(/-|%20/gi," ").split(",");_.isEmpty(c)&&_.isEmpty(h)||$("#button-addon1").attr("class","btn btn-primary"),t.length&&$.getJSON(e,(function(e){var v=_.shuffle(e);$(".quick-filter").addClass("btn-outline-light").removeClass("btn-primary"),_.isEmpty(c)||(v=_.filter(v,(function(e){return this.keys.indexOf(e.course_category.toLowerCase())>-1}),{keys:c}),_.each(c,(function(e,a){$('.quick-filter[data-category="'+e+'"]').addClass("btn-primary").removeClass("btn-outline-light")}))),_.isEmpty(h)||(v=_.filter(v,(function(e){return this.keys.indexOf(e.lp_name.toLowerCase())>-1}),{keys:h})),_.isEmpty(g)||(v=_.filter(v,(function(e){return this.keys.indexOf(e.course_type.toLowerCase().replace(/-|%20/gi," "))>-1}),{keys:g}));var b=null!==f?_.filter(v,(function(e){return-1!==e.course_title.toLowerCase().indexOf(f.toLowerCase())})):v;null!==f&&$("#filter-keyword").val(f);var y=b.length,k=Math.ceil(y/12);$(window).scrollTop(0),setTimeout((function(){var f;t.html(""),$("#course-counter div").html("Ditemukan <b>"+y+"</b> pelatihan"),_.isEmpty(b)?t.html(r):$.each(b.slice(0,12),(function(e,a){o(t,a,null,!0)})),m(i,k,1),d(i,12,0,12,b,t,1,k),function(e,a,t,i){for(var s,l={},r={},o=[],n=[],c=0;s=e[c++];){var d=s.course_category.toLowerCase(),u=s.lp_name.toLowerCase();d in l||(l[d]=1,o.push(d)),u in r||(r[u]=1,n.push(u))}o=o.sort(),n=n.sort(),$("#course-LP, #course-category").html(""),_.each(o,(function(e,a){var i=-1!==_.indexOf(t,e)?"checked":"";$("#course-category").append('<div class="form-check"><input class="form-check-input filter-category" id="filter-category-'+a+'" type="checkbox" value="'+e+'" '+i+'><label class="form-check-label text-capitalize" for="filter-category-'+a+'">'+e+"</label></div>")})),_.each(n,(function(e,t){var i=-1!==_.indexOf(a,e)?"checked":"";$("#course-LP").append('<div class="form-check"><input class="form-check-input filter-lp" id="filter-lp-'+t+'" type="checkbox" value="'+e+'" '+i+'><label class="form-check-label text-capitalize" for="filter-lp-'+t+'">'+e+"</label></div>")})),_.each(i,(function(e){$('.filter-method[value="'+e+'"]').attr("checked",!0)})),_.isEmpty(a)&&_.isEmpty(t)||$("#btn-reset-filter").removeClass("disabled")}(e,h,c,g),f="input.form-check-input",$("#btn-reset-filter").click((function(e){$(this).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"),$(f).prop("checked",!1)})),function(e,a){$(e).click((function(t){$(e).is(":checked")?($(a).removeClass("disabled"),$("#button-addon1").attr("class","btn btn-primary")):($(a).addClass("disabled"),$("#button-addon1").attr("class","btn btn-outline-light"))}))}(".form-check-input","#btn-reset-filter"),u(s,e,0,12),p(l,n,e,0,12),$(".quick-filter").click((function(e,t){e.preventDefault();var i=$(this);i.attr("data-target"),i.hasClass("btn-primary")?i.addClass("btn-outline-light").removeClass("btn-primary"):i.removeClass("btn-outline-light").addClass("btn-primary");var s=_.isEmpty(a.get("keyword"))?"":a.get("keyword").replace(/-|%20/gi," "),l=[];$(".filter-category").attr("checked",!1),$.each($('.quick-filter.btn-primary[data-target="course_category"]'),(function(e,a){l[e]=$(a).attr("data-category"),$('input.filter-category[value="'+$(a).attr("data-category")+'"]').attr("checked",!0)})),categoryJoin=l.join(","),window.history.replaceState(null,null,"?topic="+categoryJoin.replace(/\s+/gi,"-").toLowerCase()+"&keyword="+s.replace(/\s+/gi,"-").toLowerCase()),$("#btn-apply-filter").trigger("click")}))}),1500)})).fail((function(){}))}))}function f(){var a=$("#courseCarouselDiscount"),t=$("#courseCarouselTwenty"),i=$("#courseCarouselFree"),s=$("#courseCarouselNewest"),l=$("#course-provider-list"),r=$("#load-more-lp");(a.length||t.length||i.length||s.length)&&$.getJSON(e,(function(e){dataLimited=_.sample(_.filter(e,(function(e){return"0"!==e.course_after_discount&&"20000"!==e.course_after_discount})),10),dataTwenty=_.sample(_.filter(e,(function(e){return"20000"==e.course_after_discount})),10),dataFree=_.sample(_.filter(e,(function(e){return"0"==e.course_after_discount})),10),dataNewest=_.sample(_.filter(e,(function(e){return"true"==e.new_course})),10),a.addClass("owl-carousel").html(""),t.addClass("owl-carousel").html(""),i.addClass("owl-carousel").html(""),s.addClass("owl-carousel").html("");for(var n,u={},p=[],m=0;n=e[m++];){var h=n.lp_name.toLowerCase();h in u||(u[h]=1,p.push({lp_name:n.lp_name,lp_logo:n.logo_lp}))}p=_.sortBy(p,"lp_name"),l.html("");var f=p.length,g=Math.ceil(f/12);$.each(p.slice(0,12),(function(e,a){c(l,a)})),d(r,12,0,12,p,l,1,g,!0),$.each(dataLimited,(function(e,t){o(a,t,"home")})),$.each(dataTwenty,(function(e,a){o(t,a,"home")})),$.each(dataFree,(function(e,a){o(i,a,"home")})),$.each(dataNewest,(function(e,a){o(s,a,"home")}))})).done((function(){$(".owl-carousel").owlCarousel({loop:!0,margin:24,nav:!0,dots:!1,responsiveClass:!0,responsive:{0:{items:1.2,margin:16,nav:!1},600:{items:3,margin:16,nav:!1},1e3:{items:3.75,nav:!1},1200:{items:4.2,nav:!0}}})}))}function g(){var t=_.isEmpty(a.get("id"))?"ISW-P0005":a.get("id"),i=$("#detail-course"),s=$("#courseCarousel"),l=$("#breadcrumb-detail ol");i.length&&$.getJSON(e,(function(e){var a=_.findWhere(e,{course_id:t}),r=_.sample(_.reject(_.filter(e,(function(e){return-1!==e.course_category.toLowerCase().indexOf(a.course_category.toLowerCase())})),(function(e){return e.course_id==t})),10),n="/pelatihan/index.html?topic="+a.course_category.toLowerCase()+"&keyword=&price=&lp=",c=$(".similar-course");l.html('<ol class="breadcrumb overflow-hidden fs-7 mb-0"><li class="breadcrumb-item"> <a href="/"><i class="bi bi-house-door"></i></a></li><li class="breadcrumb-item"> <a href="/pelatihan">Pelatihan </a></li><li class="breadcrumb-item active text-truncate">'+a.course_title+"</li></ol>");_.isNull(localStorage.getItem("course_takens"))||JSON.parse(localStorage.getItem("course_takens"));$.when(i.html("").append(function(e){"100%"==e.course_discount||""==e.course_discount||Number(e.course_after_discount).toLocaleString("id"),"100%"==e.course_discount||e.course_discount,"0"==e.course_price||Number(e.course_price).toLocaleString("id");var a=JSON.parse(localStorage.getItem("course_takens"));""!==e.quota&&e.quota,Number(e.total)>=20&&e.total,_.contains(a,e.course_id)||""!==e.quota&&(Number(e.quota),e.total);var t="";if(!_.isEmpty(e.cs_call_center)||!_.isEmpty(e.cs_email)||!_.isEmpty(e.cs_wa)){var i="",s="",l="";_.each(e.cs_call_center.trim().split(","),(function(e){if(!_.isEmpty(e))return i+='<a class="btn btn-ghost-primary btn-contact-center mb-2" data-service="call center" target="_blank" href="tel:'+e+'"> <i class="bi bi-telephone-fill me-2"></i>'+e+"</a>"})),_.each(e.cs_wa.trim().split(","),(function(e){if(!_.isEmpty(e))return s+='<a class="btn btn-ghost-success btn-contact-center mb-2" data-service="whatsapp" target="_blank" href="https://wa.me/'+e+'"> <i class="bi bi-whatsapp me-2"></i>'+e+"</a>"})),_.each(e.cs_email.trim().split(","),(function(e){if(!_.isEmpty(e))return l+='<a class="btn btn-ghost-light btn-contact-center mb-2" data-service="email" target="_blank" href="mailto:'+e+'"> <i class="bi bi-envelope-at me-2"></i>'+e+"</a>"}));var r=_.isEmpty(e.cs_call_center)?"":'<div class="pt-2 pb-2"><h6>Telepon </h6>'+i+"</div>";t='<section class="py-3"><h4>Contact Center</h4>'+(_.isEmpty(e.cs_wa)?"":'<div class="pt-2 pb-2"><h6>Whatsapp </h6>'+s+"</div>")+r+(_.isEmpty(e.cs_email)?"":'<div class="pt-2 pb-2"><h6>Email </h6>'+l+"</div>")+"</section>"}return'<section class="section-detail-course"><div class="container pt-3 pb-5 px-4 px-md-0"><div class="row flex-row-reverse"><div class="col-12 col-md-4 col-lg-4"><div class="course-cover-sticky"><div class="course-cover"><img loading="lazy" class="w-100 rounded" src="'+e.course_image+'" alt=""/></div><div class="mt-3 d-flex justify-content-between"><div class="px-3 px-lg-0 m-r1"><a href="'+e.course_url+'" id="get-voucher" class="btn btn-primary btn-lg w-90" data-bs-toggle="modal" data-bs-target="#">Lihat Detail Pelatihan</a></div><button class="btn btn-light btn-md share-button w-30" type="button" title="Bagikan halaman ini"><i class="bi bi-share-fill">&nbsp;&nbsp;</i>Bagikan</button></div></div></div><div class="col-12 col-md-8 col-lg-8 pe-xl-4"><h1 class="mb-3">'+e.course_title+'</h1><div class="row mt-5 mb-4"> <div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-badge"></i><div class="ps-2"> <h6 class="fs-7 mb-2">Instruktur</h6><p class="fs-7">'+e.instructure_name+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-clock"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Durasi Pelatihan</h6><p class="fs-7">'+e.duration+' (Menit)</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-journal-bookmark-fill"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Modul Pelatihan</h6><p class="fs-7">'+e.number_of_materials+'</p></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-person-video"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Metode Ajar</h6><span class="badge rounded-pill text-bg-warning">'+e.course_type+'</span></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-tag"> </i><div class="ps-2"> <h6 class="fs-7 mb-2">Kategori</h6><a href="/pelatihan/index.html?topic='+e.course_category.replace(/\s+/gi,"-").toLowerCase()+'&keyword=&price=&lp=" class="badge text-bg-light text-capitalize text-decoration-none">'+e.course_category+'</a></div></div><div class="col-12 col-md-6 col-lg-4 mb-4 d-flex"> <i class="bi bi-link-45deg"></i><div class="ps-2 overflow-hidden"><h6 class="fs-7 mb-2">Link Pelatihan</h6><a class="fs-7 d-flex align-items-center" href="'+e.course_url+'" target="_blank" title="'+e.course_title+'"> <span class="pds-truncate">'+e.course_url+'</span><i class="bi bi-arrow-up-right-square-fill"></i></a></div></div></div><hr/><article><section class="py-3"><h4 class="mb-4">Deskripsi Pelatihan </h4><article id="description">'+e.description.replace(/\n/g,"</br>")+"</article></section>"+t+"<hr/></article></div></div></div></section>"}(a))).then((function(){var e=$(".share-button"),t=$(".share-dialog"),i=$(".close-button");$(".btn-contact-center").click((function(e){var a=$(this);a.attr("data-service"),a.text()})),e.click((function(){var e=$("#share-facebook"),i=$("#share-twitter"),s=$("#share-linkedin"),l=$("#share-email"),r=$("#copy-link"),o=$(".pen-url");e.attr("href","https://www.facebook.com/sharer/sharer.php?u="+window.location.href),i.attr("href","https://twitter.com/intent/tweet?text=Dapatkan voucher pelatihan "+a.course_title+" hanya di Indonesia Skills Week, dan jutaan voucher lainnya&url="+window.location.href+"&hashtags=IndonesiSKillsWeek"),s.attr("href","https://www.linkedin.com/shareArticle?mini=true&url="+window.location.href+"&title=Voucher pelatihan "+a.course_title+"&source=skillsweek.prakerja.go.id&summary=Dapatkan voucher pelatihan "+a.course_title+" melalui Indonesia Skills Week, dan kesempatan untuk mendapatkan jutaan voucher lainnya"),l.attr("href","mailto:contact@email.com?subject=Pelatihan"+a.course_title+" &body=Dapatkan voucher pelatihan "+a.course_title+" melalui Indonesia Skills Week, dan kesempatan untuk mendapatkan jutaan voucher lainnya!"),o.html(window.location.href),navigator.share?navigator.share({title:"Indonesia Skill Week - "+a.course_title,url:window.location.href}).then((()=>{})).catch(console.error):(t.addClass("is-open"),$("#target-share a").click((function(){social=$(this).attr("data-share")})),r.click((function(){navigator.clipboard.writeText(o.text()),$("#toast-sucess-copy").toast("show"),$(".close-toast-copy").click((function(){$("#toast-sucess-copy").toast("hide")}))})))})),i.click((function(){t.removeClass("is-open")}))})),s.html(""),c.attr("href",n),_.isEmpty(r)?s.html('<section class="section-course mb-4"><div class="container py-0 px-4 px-md-0"><div class="d-flex align-items-center justify-content-between mb-3"><h4>Pelatihan Serupa</h4></div><div class="d-flex similar-course-empty rounded justify-content-center"><div class="col-lg-8 d-lg-flex p-4 justify-content-center"><div class="p-md-3 mb-3 mb-lg-0"><img loading="lazy" src="img/img-ornament-1.svg" height="116" /></div><div class="p-md-3"><h5>Sepertinya tidak ditemukan pelatihan serupa</h5><p>Yuk cari pelatihan lainnya yang mungkin kamu tertarik untuk ikuti</p><a class="btn btn-primary" href="/pelatihan">Cari Pelatihan Lainnya</a></div></div></div></div></section>').css({display:"block"}):$.when($.each(r,(function(e,a){o(s,a,"detail")}))).then((function(){$(".owl-carousel").owlCarousel({loop:!0,margin:24,nav:!0,dots:!1,lazyLoad:!0,responsive:{0:{items:1.2,margin:16,nav:!1},600:{items:3,margin:16,nav:!1},1e3:{items:4,nav:!1},1200:{items:4,nav:!0}}})}))}))}function v(){var e=_.isNull(i)?"Masuk":i.email,a=$("#btn-login"),t=$("#login"),l=$("#profile"),r=$("#btn-logout"),o=$("#loginModal"),n=$("#loginSuccessModal"),c=$("#loginAlreadyModal"),d=$(".login-dismiss"),u=$("#login-form"),p=$("#submit-login");$(".register-account").click((function(e){$(this).attr("data-source")})),_.isNull(i)?(a.find("span").removeClass("skeleton-box rounded-pill").html(e),t.removeClass("supper-hidden"),a.click((function(){o.modal("show")})),_.isNull(s)&&(o.modal("show"),d.click((function(){localStorage.setItem("login-popup-skip",!0),u.find(".alert.alert-danger").addClass("visually-hidden"),p.removeClass("disabled").html("Masuk")}))),u.submit((function(e){e.preventDefault();var t={email:u.find("input#userEmail").val(),password:u.find("input#userPassword").val()};_.isEmpty(t.email)||_.isEmpty(t.password)||(p.addClass("disabled").html('<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"> </span><span class="sr-only"> Loading...</span>'),$.ajax({dataType:"json",contentType:"application/json",type:"POST",url:"https://api-ext.prakerja.go.id/api/v1/user/login-a17ab03c3d1d",data:JSON.stringify(t)}).done((function(e){var s=e.data;7!==s.stat.step?(p.removeClass("disabled").html("Masuk"),u.find(".alert.alert-danger").removeClass("visually-hidden").find(".alert.alert-danger .text-error").html("Lengkapi dan selesaikan proses daftar di Prakerja untuk bisa login pada Skillsweek")):(localStorage.setItem("users",JSON.stringify(_.extend(s,{email:t.email}))),$("#user-email").html(t.email),u.find(".alert.alert-danger").addClass("visually-hidden"),p.removeClass("disabled").html("Masuk"),o.modal("hide"),n.find("#emailUserVoucher").text(t.email),n.find(".email-account").text(t.email),n.modal("show"),$("#success-login").click((function(){window.location.reload()})),a.click((function(){c.find("#validEmailUser").val(i.email),c.find(".text-email").text("("+i.email+")"),c.modal("show"),r.click((function(){localStorage.removeItem("users"),localStorage.removeItem("course_takens"),window.location.reload()}))})))})).fail((function(e){e.responseJSON;u.find(".alert.alert-danger").removeClass("visually-hidden").find(".alert.alert-danger .text-error").html("Alamat email atau password salah. Mohon periksa kembali."),p.removeClass("disabled").html("Masuk")})))}))):(l.removeClass("supper-hidden"),$("#user-email").html(i.email),a.click((function(){c.find("#validEmailUser").val(i.email),c.find(".text-email").text("("+i.email+")"),c.modal("show"),r.click((function(){localStorage.removeItem("users"),localStorage.removeItem("course_takens"),window.location.reload()}))})),r.click((function(){localStorage.removeItem("users"),localStorage.removeItem("course_takens"),window.location.reload()})))}function b(e){var a=$("#user-profile"),t=$("#course-list"),s=$("#active-course-container"),l=$("#empty-list"),r=$("#loginModal"),o=$(".section-profile");a.length&&(_.isNull(i)?(r.modal("show"),o.find("p").html("Untuk mendapatkan Voucher Pelatihan, masuk ke Indonesia Skill Weeks dengan menggunakan email yang sudah terdaftar sebagai peserta di Prakerja."),o.find("button").attr("class","btn btn-primary").html("Masuk"),s.addClass("hidden")):($(".text-email").html("("+i.email+")"),$.ajax({dataType:"json",contentType:"application/json",type:"GET",url:"https://api-proxy.prakerja.go.id/api/v1/general/voucher/list",headers:{Authorization:i.token}}).done((function(a){_.isNull(a.voucher)?(l.removeClass("hidden"),s.addClass("hidden")):(t.html(""),_.each(a.voucher,(function(a,i){var s,l,r,o,n,c,d,u,p,m,h=_.findWhere(e,{course_id:a.CourseID});_.isUndefined(h)||(s=t,r=!0,o=(l=h).course_type.toLowerCase()=="Online Self-Paced Learning".toLowerCase()?"text-bg-warning":"text-bg-help",n='<img src="'+l.course_image+'" loading="lazy" class="card-img-top" alt="'+l.course_title+'">',c=r?"<img class='me-1 card-logo' src='"+l.logo_lp+"' alt='"+l.lp_name+"'>":"<img class='me-1 card-logo' src='"+l.logo_lp+"' alt='"+l.lp_name+"' loading='lazy'>",d="/pelatihan/detail.html?title="+l.course_title.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/gi,"-").toLowerCase()+"&id="+l.course_id,u="100%"==l.course_discount||""==l.course_discount?"Gratis":"Rp "+Number(l.course_after_discount).toLocaleString("id"),p="0"==l.course_price?"-":"Rp "+Number(l.course_price).toLocaleString("id"),"100%"==l.course_discount||l.course_discount,m='<div class="card pds-card pds-card-list mb-3"><div class="card-cover">'+n+'<div class="card-cover-overlay"><div class="d-flex justify-content-between align-middle"><div class="align-self-center"><div class="card-company"> '+c+'<span class="course-lp-name">'+l.lp_name+'</span></div></div><div class="align-self-center"> <span class="badge rounded-pill text-capitalize '+o+'">'+l.course_type.replace(/Online/g,"")+'</span></div></div></div></div><div class="card-body"><h6 class="mb-1 course-title text-capitalize" title="'+l.course_title+'">'+l.course_title+'</h6><span class="mb-2 badge text-bg-light text-capitalize">'+l.course_category+'</span><div class="d-md-flex"><div class="course-real-price mb-1 me-md-3"><span>'+p+'</span><span class="badge text-bg-ghost-success">'+l.course_discount+'</span></div><div class="course-price card-price mb-1">'+u+'</div></div><div class="pds-card-list-footer mt-3 text-center"> <a class="btn btn-outline-primary w-100 mb-2 text-truncate" href="'+d+'" title="">Selengkapnya</a> <a class="btn btn-primary w-100 mb-2 text-truncate" href="'+l.course_url+'" target="_blank">Buka Pelatihan <i class="ms-1 bi bi-arrow-up-right-square"></i></a></div></div></div>',$(s).append(m).ready((function(){$(".to-detail-course").unbind("click"),$(".to-detail-course").click((function(e){e.preventDefault(),window.location.href=$(this).attr("href")}))})))})))})).fail((function(e){localStorage.removeItem("users"),r.modal("show"),o.find("p").html("Untuk mendapatkan Voucher Pelatihan, masuk ke Indonesia Skill Weeks dengan menggunakan email yang sudah terdaftar sebagai peserta di Prakerja."),o.find("button").attr("class","btn btn-primary").html("Masuk"),s.addClass("hidden")}))))}function y(e){var t=$("#form-search-global");$("html").attr("page-class");if(t.length){var i=t.find("button"),s=_.isEmpty(a.get("keyword"))?"":a.get("keyword").replace(/-|%20/gi," "),l=$("#recomendSearchLimited article"),r=$("#recomendSearchTwenty article"),o=$("#recomendSearchFree article");t.find("input.modal-search-input").val(s),t.submit((function(e){e.preventDefault(),s=t.find("input.modal-search-input").val(),window.location.replace("/pelatihan/index.html?&keyword="+s.replace(/\s+/gi,"-").toLowerCase()+"&price=&lp=&topic=")})),i.click((function(){t.trigger("submit")})),dataLimited=_.sample(_.filter(e,(function(e){return"0"!==e.course_after_discount&&"20000"!==e.course_after_discount})),5),dataTwenty=_.sample(_.filter(e,(function(e){return"20000"==e.course_after_discount})),5),dataFree=_.sample(_.filter(e,(function(e){return"0"==e.course_after_discount})),5),l.html(""),r.html(""),o.html(""),$.each(dataLimited,(function(e,a){n(l,a)})),$.each(dataTwenty,(function(e,a){n(r,a)})),$.each(dataFree,(function(e,a){n(o,a)}))}}!function(e){e(window).scroll((function(){var a=e(window).scrollTop();a>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),a>=214?e(".search-boxy").addClass("is-fixed"):e(".search-boxy").removeClass("is-fixed"),a>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".navbar-custom").on("click",".nav-link",(function(a){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")})),e(".modal-search-trigger").click((function(){e(".modal-search").fadeIn().toggleClass("is-show"),e(".modal-search-input").focus(),e("body").toggleClass("freeze")})),e(".modal-search-close").click((function(){e(".modal-search").fadeOut().toggleClass("is-show"),e("body").toggleClass("freeze")})),e(".testimony-carousel").owlCarousel({loop:!0,autoplay:!0,center:!0,dots:!0,responsive:{1e3:{items:3,margin:0},756:{items:2,margin:0},0:{items:1,margin:0}}}),e(".boost-ads-carousel").owlCarousel({loop:!0,autoplay:!1,dots:!0,lazyLoad:!0,items:1.25}),e(".owl-carousel").owlCarousel({loop:!0,margin:24,nav:!1,dots:!1,responsive:{0:{items:1.2},600:{items:3},1200:{items:4}}}),e(".howto-carousel").owlCarousel({dots:!1,autoplay:!1,responsive:{1200:{items:4,margin:0,loop:!1},1e3:{items:3.5,margin:0},800:{items:3.2,margin:0,loop:!0},600:{items:2.2,margin:0,loop:!0},0:{items:1.5,margin:0,loop:!0}}}),e(".show-password").click((function(a){var t=a.currentTarget;e(t).hasClass("show-password-target")?function(e){e.removeClass("show-password-target").addClass("hide"),e.prev("input").attr("type","password"),e.children().addClass("bi-eye").removeClass("bi-eye-slash")}(e(t)):function(e){e.removeClass("hide").addClass("show-password-target"),e.prev("input").attr("type","text"),e.children().removeClass("bi-eye").addClass("bi-eye-slash")}(e(t))}));var a=e("#liveToastBtn"),i=e("#liveToast");if(a.length){var s=bootstrap.Toast.getOrCreateInstance(i);a.click((function(){s.show()}))}e(document).ready((function(){h(),f(),g(),v(),b(t),y(t)}))}(jQuery),AOS.init();
//# sourceMappingURL=function-min.js.map