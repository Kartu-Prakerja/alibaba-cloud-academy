/**
 * TASK LIST
 * 1. HANDLE LOGIN USER (√)
 * 1.1 MUNCULIN POPUP UNTUK USER KALAU BELUM LOGIN (√)
 * 1.1.1 KALAU USER SKIP GAK PERLU MUNCULIN POP-UP (√)
 * 1.2 CEK LOCAL STORAGE UNTUK LOGIN USER (√)
 * 1.2.1 SIMPAN KE LOCAL STORAGE KALAU USER SUDAH LOGIN (√)
 * 1.2.2 SET WAKTU UNTUK NGE TIMEOUT LOCALSTORAGE
 * 1.2.3 HAPUS LOCAL STORAGE KALAU USER MAU GANTI AKUN DAN HAPUS SESSION POPUP UNTUK MINTA USER LOGIN KEMBALI (√)
 * 1.3 POP UP KONFIRMASI UNTUK AMBIL VOUCHER (√)
 * 
 * 2. SIMPAN PELATIHAN YANG SUDAH DIAMBIL PESERTA (FLAG PELATIHAN MANA YANG SUDAH DIAMBIL) (√)
 * 2.1 HANDLE PROSES SUBMISSION PELATIHAN YANG MAU DI AMBIL PESERTA (√)
 * 
 * 3. DETAIL PELATIHAN (√)
 * 3.1 HANDLE DEFAULT CONTENT UNTUK PELATIHAN YANG TIDAK DITEMUKAN (404) PAGE
 * 3.2 HANDLE SHARE CONTENT
 * 
 * 4. HANDLE FILTER & SEARCH
 * 4.1 STORE KE LOCAL STORAGE UNTUK DAFTAR PELATIHAN (√)
 * 4.2 HANDLE PANGGIL KE LOCAL STORAGE / AMBIL DARI JSON (√)
 */

// general variable 
const sharerURL = 'https://gist.github.com/tZilTM/6eecb26cd8dca3f9f800128c726d6761';
const BaseURL = '/'
const loadItem = 12;
const courseListURL = "/js/course.json";
const queryParams = new URLSearchParams(window.location.search);
var dataCourse = !_.isNull(localStorage.getItem('course_list')) ? JSON.parse(localStorage.getItem('course_list')) : $.getJSON(courseListURL).done(function(courses) { localStorage.setItem('course_list', JSON.stringify(courses)) })
var currentPage = 1;
var dataUser = !_.isNull(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : null;
var isPopupSkip = localStorage.getItem('login-popup-skip');
var forms = document.querySelectorAll('.needs-validation');

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
.forEach(function (form) {
  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)
})


// empty state template
var emptyState = "<div class='col-12 col-md-12'>" +
    "<div class='alert alert-info' role='alert'>" +
        "<div class='d-flex'>" +
            "<div class='pe-3'><i class='bi bi-info-circle-fill fs-4'></i></div>" +
            "<div>"+
                "<h6 class='alert-heading'>Pelatihan tidak ditemukan</h6>" +
                "<p>Mohon periksa kembali kata kunci Anda dan pastikan ejaan dan tata bahasa yang benar. Anda juga dapat mencoba menggunakan kata kunci yang berbeda atau mencari di topik pelatihan yang berbeda.</p>"+
            "</div>"+
        "</div>"+
    "</div>"+
    "</div>";

/** function load course */
var templateCourse = function(target, data, cardClass, isCourse){ 
    var pills = data.course_type.toLowerCase() == "Online Self-Paced Learning".toLowerCase() ? "text-bg-warning" : "text-bg-help";
    var imageCourse = isCourse ? '<img src="' + data.course_image + '" class="card-img-top" loading="lazy" alt="'+ data.course_title +'">' : '<img src="' + data.course_image + '" loading="lazy" class="card-img-top" alt="'+ data.course_title +'">';
    var course_detail = BaseURL +'pelatihan/detail.html?title=' + (data.course_title.replace(/[^a-zA-Z0-9 ]/g, '')).replace(/\s+/gi, '-').toLowerCase() +'&id='+ data.course_id;
    var listClass = cardClass == null ? 'col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5' : 'wl-carousel-card pb-3';
    var logoLp = isCourse ? "<img class='me-1 card-logo' src='" + data.lp_logo +"' alt='"+ data.lp_name +"'>" : "<img class='me-1 card-logo' src='" + data.lp_logo +"' alt='"+ data.lp_name +"'>";
    var listClass = cardClass == null ? 'col-12 col-md-6 col-xl-4 col-xxl-3 mb-4 mb-lg-5' : 'wl-carousel-card pb-3';
    var template = "<div id='" + data.course_id +"' class='"+ listClass +"'>" +
            "<div class='card pds-card'>" +
            "<a href='"+ course_detail +"' class='text-decoration-none to-detail-course' title='"+ data.course_title +"'>"+
            "<div class='card-cover'>" + imageCourse +
                "<div class='card-cover-overlay'>" +
                    "<div class='d-flex justify-content-between align-middle'>" +
                        "<div class='align-self-center'>" +
                            "<div class='card-company'>"+ logoLp +"<span class='course-lp-name'>"+ data.lp_name +"</span></div>" +
                        "</div>" +
                        "<div class='align-self-center'><span class='badge rounded-pill text-capitalize " + pills +"'>"+ (data.course_type).replace(/Online/g,'') +"</span></div>" +
                        // "<div class='align-self-center'><span class='badge rounded-pill text-capitalize " + pills +"'>Daring LMS</span></div>" +
                    "</div>" +        
                "</div>" +
            "</div>" +
            "<div class='card-body'>" +
                // Title
                "<h6 class='mb-1 course-title text-capitalize' title='"+ data.course_title +"'>"+ data.course_title +"</h6>" +
                // Bagde
                "<div class='d-flex my-2'>" +
                    "<span class='badge text-bg-light text-capitalize badge-ellipsis' title='"+ data.course_category +"'>"+ data.course_category + "</span>"+
                "</div>" +
                // Price
                "<div>" +
                    "<div class='course-real-price mb-1'><span>"+ data.number_of_materials +" Modul</span> <span class='badge text-bg-ghost-success'>"+ data.duration +" (Menit)</span></div>" +
                "</div>" +
            "</div>" +
        "</div>" +
        "</a>" +
    "</div>"
    
    $(target).append(template).ready(function () {
        // trigger modal
        // skipped because already have the page detail
        // btnDescription('#detail-course' + data.index, data);
        $('.to-detail-course').unbind('click');
        $('.to-detail-course').click(function(e) {
            e.preventDefault();
            window.location.href = $(this).attr('href');
        })
    });
}

var templateLP = function(target, data) {
    var template = '<div class="col-12.col-sm-6 col-md-4 col-xl-3">' +
                        '<a class="text-capitalize card-company-list" href="'+ 'pelatihan/index.html?topic=&keyword=&price=&lp=' + data.lp_name.replace(/\s+/gi, '-').toLowerCase() +'" title="'+ data.course_title  +'">' + 
                            '<img class="me-1 card-logo" height="40" src="'+ data.lp_logo +'" alt="'+ data.lp_name +'" loading="lazy"/>' + 
                            '<span class="lp-name">'+ data.lp_name  +'</span>' +
                        '</a>'+
                    '</div>'
    $(target).append(template);
}

var templateDetail = function(data) {
     var contactCenter = '';
     if(!_.isEmpty(data.cs_call_center) || !_.isEmpty(data.cs_email) || !_.isEmpty(data.cs_wa)) {
        var html_call_center = '', html_wa = '', html_email = '';
        _.each(data.cs_call_center.trim().split(','), function(number) {
            if (!_.isEmpty(number)) {
                return html_call_center += '<a class="btn btn-ghost-primary btn-contact-center mb-2" data-service="call center" target="_blank" href="tel:'+ number +'"> <i class="bi bi-telephone-fill me-2"></i>'+ number +'</a>'
            }
        })
        _.each(data.cs_wa.trim().split(','), function(number) {
            if (!_.isEmpty(number)) {
                return html_wa += '<a class="btn btn-ghost-success btn-contact-center mb-2" data-service="whatsapp" target="_blank" href="https://wa.me/'+ number +'"> <i class="bi bi-whatsapp me-2"></i>'+ number +'</a>'
            }
        })
        _.each(data.cs_email.trim().split(','), function(number) {
            if (!_.isEmpty(number)) {
                return html_email += '<a class="btn btn-ghost-light btn-contact-center mb-2" data-service="email" target="_blank" href="mailto:'+ number + '"> <i class="bi bi-envelope-at me-2"></i>'+ number +'</a>'
            }
        })
        var phone = !_.isEmpty(data.cs_call_center) ? '<div class="pt-2 pb-2"><h6>Telepon </h6>'+ html_call_center +'</div>' : '';
        var wa = !_.isEmpty(data.cs_wa) ? '<div class="pt-2 pb-2"><h6>Whatsapp </h6>'+ html_wa +'</div>' : '';
        var email = !_.isEmpty(data.cs_email) ? '<div class="pt-2 pb-2"><h6>Email </h6>' + html_email +'</div>' : '' 
        contactCenter = '<section class="py-3"><h4>Contact Center</h4>' + wa + phone + email +'</section>'
     }

    return '<section class="section-detail-course">' +
    '<div class="container pt-3 pb-5 px-4 px-md-0">' +
      '<div class="row flex-row-reverse">' +
        '<div class="col-12 col-md-4 col-lg-4"><div class="course-cover-sticky"><div class="course-cover"><img loading="lazy" class="w-100 rounded" src="'+ data.course_image +'" alt=""/></div>' +
          '<div class="mt-3 d-flex justify-content-between course-cta p-3 px-lg-0 w-flex">' +
                '<div class="px-lg-0 px-1 m-r1 w-70"><a href="'+ data.course_url +'" target="_blank" class="btn btn-primary btn-lg w-100">Lihat Pelatihan</a></div>' +
                '<button class="btn btn-light btn-md share-button w-30 px-1" type="button" title="Bagikan halaman ini"><i class="bi bi-share-fill">&nbsp;&nbsp;</i>Bagikan</button>' +
          '</div>' +
        '</div></div>' +
        '<div class="col-12 col-md-8 col-lg-8 pe-xl-4">' +
          '<h1 class="mb-3">'+ data.course_title +'</h1>'+
          '<div class="row mt-5 mb-4"> ' +
            '<div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-person-badge"></i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Instruktur</h6>' +
                '<p class="fs-7">'+ data.instructure_name +'</p>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-clock"> </i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Durasi Pelatihan</h6>' +
                '<p class="fs-7">'+ data.duration +' (Menit)</p>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-journal-bookmark-fill"> </i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Modul Pelatihan</h6>' +
                '<p class="fs-7">'+ data.number_of_materials +'</p>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-person-video"> </i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Metode Ajar</h6><span class="badge rounded-pill text-bg-warning">'+ data.course_type+ '</span>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-tag"> </i>' +
              '<div class="ps-2"> ' +
                '<h6 class="fs-7 mb-2">Kategori</h6>' +
                // '<p class="fs-7">'+ data.course_category +'</p>' +
                '<a href="/pelatihan/index.html?topic='+ data.course_category.replace(/\s+/gi, '-').toLowerCase() +'&keyword=&price=&lp=" class="badge text-bg-light text-capitalize text-decoration-none">'+ data.course_category +'</a>' +
              '</div>' +
            '</div>' +
            '<div class="col-12 col-md-6 col-lg-4 mb-3 d-flex"> <i class="bi bi-link-45deg"></i>' +
              '<div class="ps-2 overflow-hidden">' +
                '<h6 class="fs-7 mb-2">Link Pelatihan</h6><a class="fs-7 d-flex align-items-center" href="'+ data.course_url +'" target="_blank" title="'+ data.course_title +'"> <span class="pds-truncate">'+ data.course_url +'</span><i class="bi bi-arrow-up-right-square-fill"></i></a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<hr/>' +
          '<article>' +
            '<section class="py-3">' +
              '<h4 class="mb-4">Deskripsi Pelatihan </h4>' +
              '<article id="description">'+ (data.description).replace(/\n/g,'</br>') +'</article>' +
            '</section>' +
            // '<section class="py-3" id="CaraRedeemVoucher">' +
            //   '<h4 class="mb-4">Cara Redeem Voucher</h4>' +
            //     //   '<article id="how-to-redeem">'+ (data.how_to_redeem).replace(/\n/g,'</br>') +'</article>' +
            // '</section>' +
            contactCenter +
            '<hr/>' +
          '</article>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</section>'
}

var templateBreadCrumb = function(data) {
    return '<ol class="breadcrumb overflow-hidden fs-7 mb-0">' +
    '<li class="breadcrumb-item"> <a href="'+ BaseURL +'"><i class="bi bi-house-door"></i></a></li>' +
    '<li class="breadcrumb-item"> <a href="'+ BaseURL +'pelatihan">Pelatihan </a></li>' +
    '<li class="breadcrumb-item active text-truncate">'+ data.course_title +'</li>' +
    '</ol>'
}

/** function to invoke load more */
var btnLoadMore = function(target, loadItem, start, end, data, appendTarget, currentPage, paging, isListLp) {
    // to unbind the previous event or duplicate event
    $(target).unbind('click');

    // bind the current one
    $(target).on('click', function () {
        var _this = $(target); 
        start = end;
        end = end + loadItem;
        currentPage = currentPage + 1;

        // loop the content and add to the course list
        $.each(data.slice(start, end), function(i, list) {
            if (!isListLp) {
                templateCourse(appendTarget, list, null, true);
            } else {
                templateLP(appendTarget, list)
            }
        })
        // re run logig check load more or hide when it reach max paging
        checkLoadMore(_this, paging, currentPage);

        
    });
}

/** function to filter courses by topic */
var filterCourse = function(target, data, start, end) {
    $(target).click(function(e) {
        // console.log(data, 'data');
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var appendTarget = $('#course-lists');
        var filterCategory = [], filterPrice = [], filterLP = [], filterNewCourse = [], filterTrending =[], filterMethod = [],  dataFilter = data;
        var keyword = $('#filter-keyword').val();

        $.each($('.filter-category:checked'), function (i, e) { 
            filterCategory[i] = $(e).val()
        })
        $.each($('.filter-price:checked'), function (i, e) { filterPrice[i] = $(e).val()})
        $.each($('.filter-lp:checked'), function (i, e) { filterLP[i] = $(e).val()})
        $.each($('.filter-trending:checked'), function (i, e) { filterTrending[i] = $(e).val()})
        $.each($('.filter-newcourse:checked'), function (i, e) { filterNewCourse[i] = $(e).val()})
        $.each($('.filter-method:checked'), function (i, e) { filterMethod[i] = $(e).val()})

        $('.quick-filter').removeClass('btn-primary').addClass('btn-outline-light');
        // to check the datalist based on current filter & keyword applied

        if (!_.isEmpty(filterCategory)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.course_category.toLowerCase()) > -1; }, {"keys" : filterCategory})
            _.each(filterCategory, function(val, i) {
                console.log(filterCategory);
                $('.quick-filter[data-category="'+ val +'"]').addClass('btn-primary').removeClass('btn-outline-light');
            })
        }  

        if (!_.isEmpty(filterLP)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.lp_name.toLowerCase()) > -1; }, {"keys" : filterLP})
        }
        
        if (!_.isEmpty(filterMethod)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.course_type.replace(/-|%20/gi, ' ').toLowerCase()) > -1; }, {"keys" : filterMethod});
        }

        var dataKeyword = _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })

        var dataLength = dataKeyword.length;
        var paging = Math.ceil(dataLength/loadItem);

        // remove existing course list
        appendTarget.html('');
        // replacing counter for number of courses
        $('#course-counter div').html('Ditemukan <b>' + dataLength + '</b> pelatihan');
        
        // conditional check based on data length
        if (dataKeyword.length !== 0) {
            // loop the content and add to the course list
            $.each(dataKeyword.slice(start, end), function(i, list) {
                templateCourse(appendTarget, list, null, true);
            });
        } else {
            appendTarget.html(emptyState);
        }

        // load more and check the rest of data
        btnLoadMore(loadMoreTarget, loadItem, start, end, dataKeyword, appendTarget, currentPage, paging);
        checkLoadMore(loadMoreTarget, paging, currentPage);

        // hide filter
        $('#modalFilter').modal('hide')

        // final push to the url current state with filter and keyword search
        var filterCategoryJoin =  filterCategory.join(",");
        var filterPriceJoin = filterPrice.join(",");
        var filterLPJoin = filterLP.join(",");
        var filterNewJoin = filterNewCourse.join(",");
        var filterTrendingJoin = filterTrending.join(",");
        var filterMethodJoin = filterMethod.join(",");

        window.history.replaceState(null, null, "?topic="+ filterCategoryJoin.replace(/\s+/gi, '-').toLowerCase() +"&keyword="+ keyword.replace(/\s+/gi, '-').toLowerCase() +"&lp="+ filterLPJoin.replace(/\s+/gi, '-').toLowerCase()+"&method="+ filterMethodJoin.replace(/\s+/gi, '-').toLowerCase())
    })
}

/** function to filter courses by keyword */
var filterKeyword = function(formSeaerch, buttonSearch, data, start, end) {
    $(formSeaerch).on('submit', function(e) { 
        e.preventDefault();
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var filterCategory = [], filterPrice = [], filterLP = [], filterNewCourse = [], filterTrending =[], filterMethod = [],  dataFilter = data;
        var keyword = $(this).find('input').val();

        $.each($('.filter-category:checked'), function (i, e) { filterCategory[i] = $(e).val()})
        $.each($('.filter-price:checked'), function (i, e) { filterPrice[i] = $(e).val()})
        $.each($('.filter-lp:checked'), function (i, e) { filterLP[i] = $(e).val()})
        // var keyword = $(this).find('input').val();

        $.each($('.filter-category:checked'), function (i, e) { filterCategory[i] = $(e).val()})
        $.each($('.filter-price:checked'), function (i, e) { filterPrice[i] = $(e).val()})
        $.each($('.filter-lp:checked'), function (i, e) { filterLP[i] = $(e).val()})
        $.each($('.filter-trending:checked'), function (i, e) { filterTrending[i] = $(e).val()})
        $.each($('.filter-newcourse:checked'), function (i, e) { filterNewCourse[i] = $(e).val()})
        $.each($('.filter-method:checked'), function (i, e) { filterMethod[i] = $(e).val()})

        $('.quick-filter').removeClass('btn-primary').addClass('btn-outline-light');
        // to check the datalist based on current filter & keyword applied
        if (!_.isEmpty(filterPrice)) {
            if (filterPrice.length == 3) {
                dataFilter = dataFilter;
                $('.quick-filter').addClass('btn-outline-light').removeClass('btn-primary');
                $('.quick-filter[price="diskon besar"], .quick-filter[price="0"], .quick-filter[price="20000"]').addClass('btn-primary').removeClass('btn-outline-light');
            } else if (_.contains(filterPrice, 'diskon besar') && _.contains(filterPrice, '20000')) {
                dataFilter = _.filter(data, function(list) { return list.course_after_discount !== "0"});
                $('.quick-filter').addClass('btn-outline-light').removeClass('btn-primary');
                $('.quick-filter[price="20000"], .quick-filter[price="diskon besar"]').addClass('btn-primary').removeClass('btn-outline-light');
            } else if (_.contains(filterPrice, 'diskon besar') && _.contains(filterPrice, '0')) {
                filterPrice = _.contains(filterPrice, '0') ? filterPrice.concat("") : filterPrice;
                dataFilter = _.filter(data, function(list) { return list.course_after_discount !== "20000"});
                $('.quick-filter').addClass('btn-outline-light').removeClass('btn-primary');
                $('.quick-filter[price="0"], .quick-filter[price="diskon besar"]').addClass('btn-primary').removeClass('btn-outline-light');
            } else if (_.contains(filterPrice, 'diskon besar')) {
                dataFilter = _.filter(data, function(list) { return list.course_after_discount !== "20000" && list.course_after_discount !== "0"});
                $('.quick-filter').addClass('btn-outline-light').removeClass('btn-primary');
                $('.quick-filter[price="diskon besar"]').addClass('btn-primary').removeClass('btn-outline-light');
            } else {
                dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.course_after_discount) > -1; }, {"keys" : filterPrice});
                _.each(filterPrice, function(val, i) {
                    $('.quick-filter[price='+ val +']').addClass('btn-primary').removeClass('btn-outline-light');
                })
            }
        }
        if (!_.isEmpty(filterCategory)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.course_category.toLowerCase()) > -1; }, {"keys" : filterCategory})
            _.each(filterCategory, function(val, i) {
                console.log(filterCategory);
                $('.quick-filter[data-category="'+ val +'"]').addClass('btn-primary').removeClass('btn-outline-light');
            })
        }  
        if (!_.isEmpty(filterLP)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.lp_name.toLowerCase()) > -1; }, {"keys" : filterLP})
        }

        if (!_.isEmpty(filterMethod)) {
            dataFilter = _.filter(dataFilter, function(list) { return this.keys.indexOf(list.course_type.replace(/-|%20/gi, ' ').toLowerCase()) > -1; }, {"keys" : filterMethod});
        }

        var dataKeyword = _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; })

        // run mixpanel event
        
        // define pagination
        var dataLength = dataKeyword.length;
        var paging = Math.ceil(dataLength/loadItem);
        
        $(window).scrollTop(0);

        // remove existing content
        appendTarget.html('');
        $('#course-counter div').html('Ditemukann <b>' + dataLength + '</b> pelatihan');
        
        // checking keyword then append with selected filter
        if (dataKeyword.length !== 0) {
            // implement append data
            $.each(dataKeyword.slice(start, end), function(i, list) {
                templateCourse(appendTarget, list, null, true);
            });
        } else {
            appendTarget.html(emptyState);
        }

        // check condition load more and checking load more
        btnLoadMore(loadMoreTarget, loadItem, start, end, dataKeyword, appendTarget, currentPage, paging);
        checkLoadMore(loadMoreTarget, paging, currentPage);

        // final push to the url current state with filter and keyword search
        var filterCategoryJoin =  filterCategory.join(",");
        var filterLPJoin = filterLP.join(",");
        var filterMethodJoin = filterMethod.join(",");

        window.history.replaceState(null, null, "?topic="+ filterCategoryJoin.replace(/\s+/gi, '-').toLowerCase() +"&keyword="+ keyword.replace(/\s+/gi, '-').toLowerCase() +"&lp="+ filterLPJoin.replace(/\s+/gi, '-').toLowerCase()+"&method="+ filterMethodJoin.replace(/\s+/gi, '-').toLowerCase())
    });

    // to trigger the submit button
    $(buttonSearch).on('click', function(e) { 
        $(formSeaerch).trigger('submit');
    });
}

var quickFilter = function (button) {
    $(button).click(function(e,val) {
        e.preventDefault();
        var _this = $(this);
        var target = _this.attr('data-target');
        _this.hasClass('btn-primary') ? _this.addClass('btn-outline-light').removeClass('btn-primary') : _this.removeClass('btn-outline-light').addClass('btn-primary');
        // var filterCategory = !_.isEmpty(queryParams.get('topic')) ? ((queryParams.get('topic').toLowerCase()).replace(/-|%20/gi, ' ')) : '';
        var keyword = !_.isEmpty(queryParams.get('keyword')) ? (queryParams.get('keyword')).replace(/-|%20/gi, ' ') : '';
        var category = [];
        $('.filter-category').attr('checked', false);
        $.each($('.quick-filter.btn-primary[data-target="course_category"]'), function (i, e) { 
            category[i] = $(e).attr('data-category');
            $('input.filter-category[value="'+ $(e).attr('data-category') +'"]').attr('checked', true);
        });
        // switch(target) {
        //     case "trending":
        //         valTrending = _this.hasClass('btn-primary') ? "true" : ""
        //         _this.hasClass('btn-primary') ? $('.filter-trending[value="true"]').attr('checked', true) : $('.filter-trending[value="true"]').attr('checked', false)
        //         break;
        //     case "new_course":
        //         valNewCourse = _this.hasClass('btn-primary') ? "true" : "";
        //         _this.hasClass('btn-primary') ? $('.filter-newcourse[value="true"]').attr('checked', true) : $('.filter-newcourse[value="true"]').attr('checked', false);
        //         break;
        //     default:
        //         var price = [];
        //         $('.filter-price').attr('checked', false);
        //         $.each($('.quick-filter.btn-primary[data-target="price"]'), function (i, e) { 
        //             price[i] = $(e).attr('price');
        //             $('.filter-price[value="'+ $(e).attr('price') +'"]').attr('checked', true);
        //         });
        // }

        categoryJoin = category.join(',');
        window.history.replaceState(null, null, "?topic="+ categoryJoin.replace(/\s+/gi, '-').toLowerCase() +"&keyword="+ keyword.replace(/\s+/gi, '-').toLowerCase())
        
        $('#btn-apply-filter').trigger('click');
    })
}

/** function to get unique option */
var optionList = function(data, filterLP, filterCategory ,filterMethod) {
    console.log(filterCategory)
    var lookupCategory = {}, lookupCourseLP = {};
    var resultCategory = [], resultCourseLP = [];

    // to get the list of category insert to array
    for (var item, i = 0; item = data[i++];) {
        var category = item.course_category.toLowerCase();
        var courseLP = item.lp_name.toLowerCase();
        
        if (!(category in lookupCategory)) {
            lookupCategory[category] = 1;
            resultCategory.push(category);
        }

        if (!(courseLP in lookupCourseLP)) {
            lookupCourseLP[courseLP] = 1;
            resultCourseLP.push(courseLP);
        }
    }
    // list result category
    resultCategory = resultCategory.sort();
    resultCourseLP = resultCourseLP.sort();
    $('#course-LP, #course-category').html('');
    // append data to list category
    _.each(resultCategory, function(value, i) {
        var checked = _.indexOf(filterCategory, value) !== -1 ? 'checked' : '';
        $('#course-category').append('<div class="form-check">' +
                '<input class="form-check-input filter-category" id="filter-category-'+ i +'" type="checkbox" value="'+ value +'" '+ checked +'>' +
                '<label class="form-check-label text-capitalize" for="filter-category-'+ i +'">'+ value +'</label>' +
            '</div>'
        );
    })

    // append data to list LP
    _.each(resultCourseLP, function(value, i) {
        var checked = _.indexOf(filterLP, value) !== -1 ? 'checked' : '';
        // $('#filter-category').append('<option value="'+ value +'" '+ checked +'>'+ value + '</option>');
        $('#course-LP').append('<div class="form-check">' +
                '<input class="form-check-input filter-lp" id="filter-lp-'+ i +'" type="checkbox" value="'+ value +'" '+ checked +'>' +
                '<label class="form-check-label text-capitalize" for="filter-lp-'+ i +'">'+ value +'</label>' +
            '</div>'
        );
    })

    // loop price selected
    // _.each(filterPrice, function(value) {
    //     $('.filter-price[value="'+ value +'"]').attr('checked', true);
    // })

    // loop method selected
    _.each(filterMethod, function(value) {
        $('.filter-method[value="'+ value +'"]').attr('checked', true);
    })

    // if(!_.isEmpty(filterNewCourse)) {
    //     $('.filter-newcourse[value="true"]').attr('checked', true);
    // }

    // if(!_.isEmpty(filterTrending)) {
    //     $('.filter-trending[value="true"]').attr('checked', true);
    // }
    
    if(!_.isEmpty(filterLP) || !_.isEmpty(filterCategory)) {
        $('#btn-reset-filter').removeClass('disabled')
    }

    // resultCourseLP
}

function resetFilter(param, target) {
    $(param).click(function (e) {
        $(this).addClass('disabled');
        $('#button-addon1').attr('class', 'btn btn-outline-light');
        $(target).prop("checked", false);
    });
}

function filterWatcher(param, target) {
    $(param).click(function (e) {
        if ($(param).is(':checked')) {
            $(target).removeClass('disabled');
            $('#button-addon1').attr('class', 'btn btn-primary')
        } else {
            $(target).addClass('disabled');
            $('#button-addon1').attr('class', 'btn btn-outline-light')
        }
    });
}

/** function to check visiblity load more button */
var checkLoadMore = function(target, paging, currentPage) {
    if (paging > 0 && currentPage < paging) {
        target.removeClass('visually-hidden')
    } else {
        target.addClass('visually-hidden')
    }
}

/** function to init the content at the first time */
function courseLoaderInit(){
    $(document).ready(function(){
        var appendTarget = $('#course-lists');
        var loadMoreTarget = $('#load-more');
        var applyFilter = $('#btn-apply-filter');
        var formSeaerch = $('#form-search');
        var buttonSearch = $('#button-search');
        var loadItem = 12;
        var currentPage = 1;
        var filterTopic = !_.isEmpty(queryParams.get('topic')) ? ((queryParams.get('topic').toLowerCase()).replace(/-|%20/gi, ' ')).split(',') : '';
        var filterLP = !_.isEmpty(queryParams.get('lp')) ? ((queryParams.get('lp').toLowerCase()).replace(/-|%20/gi, ' ')).split(',') : '';
        var keyword = !_.isEmpty(queryParams.get('keyword')) ? (queryParams.get('keyword')).replace(/-|%20/gi, ' ') : '';
        var filterMethod = !_.isEmpty(queryParams.get('method')) ? (queryParams.get('method')).replace(/-|%20/gi, ' ').split(',') : '';
        if (!_.isEmpty(filterTopic) || !_.isEmpty(filterLP)) {
            $('#button-addon1').attr('class', 'btn btn-primary')
        }
        
        if (appendTarget.length) {
            $.getJSON(courseListURL, function(courses){
                // get query param by 
                var data = _.shuffle(courses);
                
                $('.quick-filter').addClass('btn-outline-light').removeClass('btn-primary');

                if (!_.isEmpty(filterTopic)) {
                    data = _.filter(data, function(list) { return this.keys.indexOf(list.course_category.toLowerCase()) > -1; }, {"keys" : filterTopic})
                    _.each(filterTopic, function(val, i) {
                        $('.quick-filter[data-category="'+ val +'"]').addClass('btn-primary').removeClass('btn-outline-light');
                    })
                }  
                if (!_.isEmpty(filterLP)) {
                    data = _.filter(data, function(list) { return this.keys.indexOf(list.lp_name.toLowerCase()) > -1; }, {"keys" : filterLP})
                }

                if (!_.isEmpty(filterMethod)) {
                    data = _.filter(data, function(list) { return this.keys.indexOf((list.course_type.toLowerCase()).replace(/-|%20/gi, ' ')) > -1; }, {"keys" : filterMethod});
                }

                var dataKeyword = keyword !== null ? _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : data;


                // if (!_.isEmpty(filterTopic) || !_.isEmpty(filterPrice) || !_.isEmpty(filterLP)) {
                //     var dataFilter = _.filter(data, function(list) { return list.course_category.toLowerCase().indexOf(filterTopic.toLowerCase()) !== -1; })
                //     var dataKeyword = keyword !== null ? _.filter(dataFilter, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : dataFilter;
                // } else {
                //     var dataKeyword = keyword !== null ? _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : dataFilter;
                // }
                
                // var dataKeyword = keyword !== null ? _.filter(data, function(list) { return list.course_title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1; }) : dataFilter;
                if (keyword !== null) {
                    $('#filter-keyword').val(keyword);
                }
                
                var dataLength = dataKeyword.length;
                var paging = Math.ceil(dataLength/loadItem);
                var start = 0;
                var end = loadItem;
                $(window).scrollTop(0);
    
                setTimeout(function() {
                    // remove existing content
                    appendTarget.html('');
                    // counting the data
                    $('#course-counter div').html('Ditemukan <b>' + dataLength + '</b> pelatihan');
                    
                    // loop the content and add to the course list
                    if (!_.isEmpty(dataKeyword)) {
                        $.each(dataKeyword.slice(start, end), function(i, list) {
                            templateCourse(appendTarget, list, null, true);
                        })
                    } else {
                        appendTarget.html(emptyState);
                    }
    
                    // loadmore more button show / hide
                    checkLoadMore(loadMoreTarget, paging, currentPage);
                    btnLoadMore(loadMoreTarget, loadItem, start, end, dataKeyword, appendTarget, currentPage, paging);
                    
                    // load option
                    optionList(courses, filterLP, filterTopic, filterMethod);

                    // trigger reset filter
                    resetFilter('#btn-reset-filter', 'input.form-check-input');
                    
                    // reset button function to enable or disabled
                    filterWatcher(".form-check-input", "#btn-reset-filter");
                    
                    // filter implementation
                    filterCourse(applyFilter, courses, start, end);
                    filterKeyword(formSeaerch, buttonSearch, courses, start, end);
                    quickFilter('.quick-filter');
    
                    // invoke function push event GA
                    // pushEvents('.see-detail-course');
                    // pushEvents('.apply-course');

    
                }, 1500)
            }).fail(function(){
                console.log("An error has occurred.");
            });
        }
    });
}

function courseLoaderDetail () {
    // $(document).ready(function(){
    var courseId = !_.isEmpty(queryParams.get('id')) ? queryParams.get('id') : 'ISW-P0005'; // ISW-P0005 == default
    var appendDetail = $('#detail-course');
    var appendSimilar = $('#courseCarousel');
    var appendBreadCrumb = $('#breadcrumb-detail ol');
    
    if (appendDetail.length) {
        $.getJSON(courseListURL, function(courses){
            var detail = _.findWhere(courses, { 'course_id': courseId });
            var similar = _.sample(_.reject(_.filter(courses, function(list) { return list.course_category.toLowerCase().indexOf((detail.course_category).toLowerCase()) !== -1; }), function(list) {return list.course_id == courseId }),4);
            var similarCourseLink = BaseURL + 'pelatihan/index.html?topic='+ (detail.course_category).toLowerCase() +'&keyword=&price=&lp=';
            var similarButton = $('.similar-course');
            appendBreadCrumb.html(templateBreadCrumb(detail));
            var courseTakens = _.isNull(localStorage.getItem('course_takens')) ? [] : JSON.parse(localStorage.getItem('course_takens'));
            
            $.when(
                appendDetail.html('').append(templateDetail(detail))
            ).then(function() {
                var shareBtn = $('.share-button');
                var shareDialog = $('.share-dialog');
                var closeButton = $('.close-button');
                var callCenter = $('.btn-contact-center')

                callCenter.click(function(e) {
                    var _this = $(this);
                    var channel = _this.attr('data-service');
                    var cc_val = _this.text();
                });

                shareBtn.click(function() {
                    var shareFacebook = $('#share-facebook');
                    var shareTwitter = $('#share-twitter');
                    var shareLinkedin = $('#share-linkedin');
                    var shareEmail = $('#share-email');
                    var copyLink = $('#copy-link');
                    var url = $('.pen-url');

                    shareFacebook.attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href)
                    shareTwitter.attr('href', 'https://twitter.com/intent/tweet?text=Dapatkan voucher pelatihan ' + detail.course_title + ' hanya di Indonesia Skills Week, dan jutaan voucher lainnya&url='+  window.location.href +'&hashtags=IndonesiSKillsWeek')
                    shareLinkedin.attr('href', 'https://www.linkedin.com/shareArticle?mini=true&url='+ window.location.href +'&title=Voucher pelatihan ' + detail.course_title + '&source=skillsweek.prakerja.go.id&summary=Dapatkan voucher pelatihan ' + detail.course_title + ' melalui Indonesia Skills Week, dan kesempatan untuk mendapatkan jutaan voucher lainnya')
                    shareEmail.attr('href', 'mailto:contact@email.com?subject=Pelatihan'+detail.course_title+' &body=Dapatkan voucher pelatihan ' + detail.course_title + ' melalui Indonesia Skills Week, dan kesempatan untuk mendapatkan jutaan voucher lainnya!')
                    url.html(window.location.href);
                    
                    if (navigator.share) { 
                        navigator.share({
                            title: 'Indonesia Skill Week - ' + detail.course_title,
                            url: window.location.href
                            }).then(() => {
                                console.log('Thanks for sharing!');
                            })
                            .catch(console.error);
                    } else {
                        shareDialog.addClass('is-open');

                        $('#target-share a').click(function() {
                            social = $(this).attr('data-share');
                        })

                        copyLink.click(function() {
                            // Copy the text inside the text field
                            navigator.clipboard.writeText(url.text());
                            $('#toast-sucess-copy').toast('show');
                            $('.close-toast-copy').click(function() {
                                $('#toast-sucess-copy').toast('hide');
                            });
                        })
                    }
                })

                closeButton.click(function() {
                    shareDialog.removeClass('is-open');
                })
            })
            
            appendSimilar.html('');
            similarButton.attr('href', similarCourseLink);
            
            if (!_.isEmpty(similar)) {
                $.when(
                    $.each(similar, function(i, list) {
                        templateCourse(appendSimilar, list, null, true);
                    })
                ).then(function() {
                    $('.owl-carousel').owlCarousel({
                        loop:true,
                        responsive:{
                            0:{
                                items:1.2,
                                margin: 16,
                                nav:false,
                            },
                            600:{
                                items:3,
                                margin: 16,
                                nav:false,
                            },
                            1000:{
                                items:4,
                                nav:false
                            },
                            1200:{
                                items:4,
                                nav:true
                            }
                        }
                    });
                })
            } else {
                appendSimilar.html('<section class="section-course mb-4"><div class="container py-0 px-4 px-md-0"><div class="d-flex align-items-center justify-content-between mb-3"><h4>Pelatihan Serupa</h4></div><div class="d-flex similar-course-empty rounded justify-content-center"><div class="col-lg-8 d-lg-flex p-4 justify-content-center"><div class="p-md-3 mb-3 mb-lg-0"><img loading="lazy" src="img/img-ornament-1.svg" height="116" /></div><div class="p-md-3"><h5>Sepertinya tidak ditemukan pelatihan serupa</h5><p>Yuk cari pelatihan lainnya yang mungkin kamu tertarik untuk ikuti</p><a class="btn btn-primary" href="/pelatihan">Cari Pelatihan Lainnya</a></div></div></div></div></section>').css({"display": "block"})
            }

        })
    }
}

/** init function */
(function($){
    // scroll function
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $('header').addClass("header-fixed");
        } else {
            $('header').removeClass("header-fixed");
        }

        // for search trigger at page pelatihan
        if (scroll >= 214) {
            $('.search-boxy').addClass("is-fixed");
        } else {
            $('.search-boxy').removeClass("is-fixed");
        }

        // for scroll-top trigger
        if (scroll >= 400) {
            $('.scroll-top').addClass("is-show");
        } else {
            $('.scroll-top').removeClass("is-show");
        }
    });


    // Scroll to top 
    $(".scroll-top").on("click", function() {
        $(window).scrollTop(0);
    });

    // Menu toggle
    $('.menu').click (function(){
        $(this).toggleClass('open');
        $('.navbar-custom').toggleClass('m-menu');
        $('body').toggleClass('freeze');
      });

      $(".navbar-custom").on("click", ".nav-link", function(event){
        $('.menu').removeClass('open');
        $('.navbar-custom').removeClass('m-menu');
        $('body').removeClass('freeze');
    });

    // Search Modal on header 
    $('.modal-search-trigger').click (function(){
        $('.modal-search').fadeIn().toggleClass('is-show');
        $('.modal-search-input').focus();
        $('body').toggleClass('freeze');
      });

      $('.modal-search-close').click (function(){
        $('.modal-search').fadeOut().toggleClass('is-show');
        $('body').toggleClass('freeze');
      });



    $('.owl-carousel-btb').owlCarousel({
        loop:true,
        margin:24,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1.2
            },
            600:{
                items:2.2
            },
            1200:{
                items:4
            }
        }
    });



    // show hide password 
    $('.show-password').click(function(e){
        var target = e.currentTarget
        $(target).hasClass('show-password-target')?hidePassword($(target)):showPassword($(target))
    })
    function hidePassword(e){
        e.removeClass('show-password-target').addClass('hide')
        e.prev('input').attr('type','password')
        e.children().addClass('bi-eye').removeClass('bi-eye-slash')
    }
    function showPassword(e){
        e.removeClass('hide').addClass('show-password-target')
        e.prev('input').attr('type','text')
        e.children().removeClass('bi-eye').addClass('bi-eye-slash')
    }

    
    var toastTrigger = $('#liveToastBtn');
    var toastLiveExample = $('#liveToast');

    if (toastTrigger.length) {
        var toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.click(function(){
            toastBootstrap.show()
        })
    }


    $(document).ready(function(){
        // run init course loader on page course
        courseLoaderInit();
        
        // run detail courses
        courseLoaderDetail(dataCourse);

    })


 })(jQuery);

 AOS.init();

 // load bootstrap popover
 const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
 const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))