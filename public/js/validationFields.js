var flag= true;
var arr=[];
function validation() {
    var short_range = document.getElementById('short_range_rs');
    var long_range = document.getElementById('long_range_rs');

    if((short_range.checked == true && long_range.checked == false) ||(short_range.checked == false && long_range.checked == true)  ){
        flag=true;
    }
    else {
        alert('סמן לטווח ארוך או לטווח קצר');
        flag = false;
    }
}
function validation_() {
    var short_range = document.getElementById('short_range_ar');
    var long_range = document.getElementById('long_range_ar');

    if((short_range.checked == true && long_range.checked == false) ||(short_range.checked == false && long_range.checked == true)  ){
        flag=true;
    }
    else {
        alert('סמן לטווח ארוך או לטווח קצר');
        flag = false;
    }
}
function check_as(){
    // alert("gdcftgyh")
    var aCustomers=new Array();
    var myform = $("form1")
    var address = $("input[name='address_as']")[0].checkValidity();
    var apartment_num = $("input[name='apartment_num_as']")[0].checkValidity();
    var floor = $("input[name='floor_as']")[0].checkValidity();
    var total_floors = $("input[name='total_floors_as']")[0].checkValidity();
    var property_size = $("input[name='property_size_as']")[0].checkValidity();
    var rooms_numbers = $("input[name='rooms_numbers_as']")[0].checkValidity();
    flag=true;
    if(!address) {
        aCustomers[0]="כתובת חסרה";
        flag=false;
    }
    if(!apartment_num) {
        aCustomers[1]="מספר דירה חסר";
        flag=false;
    }
    if(!floor) {
        aCustomers[2]="קומה חסר";
        flag = false;
    }
    if(!total_floors) {
        aCustomers[3]="שדה קומות בבניין חסר"
        flag = false;
    }
    if(!property_size) {
        aCustomers[4]="שדה גודל הנכס חסר";
        flag = false;
    }
    if(!rooms_numbers) {
        aCustomers[5]="שדה מספר חדרים חסר";
        flag = false;
    }
    if(flag==false) {
        alert(aCustomers.join("\n"))
    }
    else {
        flag=true;
    }
}
function check_ar(){
    var aCustomers=new Array();
    var address = $("input[name='address_ar']")[0].checkValidity();
    var apartment_num = $("input[name='apartment_num_ar']")[0].checkValidity();
    var floor = $("input[name='floor_ar']")[0].checkValidity();
    var total_floors = $("input[name='total_floors_ar']")[0].checkValidity();
    var property_size = $("input[name='property_size_ar']")[0].checkValidity();
    var rooms_numbers = $("input[name='rooms_numbers_ar']")[0].checkValidity();
    flag=true;
    if(!address) {
        aCustomers[0]="כתובת חסרה";
        flag=false;
    }
    if(!apartment_num) {
        aCustomers[1]="מספר דירה חסר";
        flag=false;
    }
    if(!floor) {
        aCustomers[2]="קומה חסר";
        flag = false;
    }
    if(!total_floors) {
        aCustomers[3]="שדה קומות בבניין חסר"
        flag = false;
    }
    if(!property_size) {
        aCustomers[4]="שדה גודל הנכס חסר";
        flag = false;
    }
    if(!rooms_numbers) {
        aCustomers[5]="שדה מספר חדרים חסר";
        flag = false;
    }



    if(flag==false) {
        alert(aCustomers.join("\n"))
    }
    else {
        flag=true;
    }
}
function check_ss(){
    var aCustomers=new Array();
    var address = $("input[name='address_ss']")[0].checkValidity();
    var From_price = $("input[name='From_price_ss']")[0].checkValidity();
    var Until_Price = $("input[name='Until_Price_ss']")[0].checkValidity();
    var From_square_meters = $("input[name='From_square_meters_ss']")[0].checkValidity();
    var Until_square_meters = $("input[name='Until_square_meters_ss']")[0].checkValidity();
    var From_num_rooms = $("input[name='From_num_rooms_ss']")[0].checkValidity();
    var Until_num_rooms = $("input[name='Until_num_rooms_ss']")[0].checkValidity();
    var from_floor = $("input[name='from_floor_ss']")[0].checkValidity();
    var Until_floor = $("input[name='Until_floor_ss']")[0].checkValidity();


    flag=true;
    if(!address) {
        aCustomers[0]="כתובת חסרה";
        flag=false;
    }
    // if(!type_property) {
    //     aCustomers[1]="סוג הנכס חסר";
    //     flag=false;
    // }
    if(!From_price) {
        aCustomers[1]="שדה ממחיר חסר";
        flag=false;
    }
    if(!Until_Price) {
        aCustomers[2]="שדה עד מחיר חסר";
        flag = false;
    }
    if(!From_square_meters) {
        aCustomers[3]="שדה ממר חסר"
        flag = false;
    }
    if(!Until_square_meters) {
        aCustomers[4]="שדה עד מר חסר";
        flag = false;
    }
    if(!From_num_rooms) {
        aCustomers[5]="שדה ממספר חדרים חסר";
        flag = false;
    }
    if(!Until_num_rooms) {
        aCustomers[6]="שדה עד מספר חדרים חסר";
        flag = false;
    }
    if(!from_floor) {
        aCustomers[7]="שדה מקומה חסר";
        flag = false;
    }
    if(!Until_floor) {
        aCustomers[8]="שדה עד קומה חסר";
        flag = false;
    }



    if(flag==false) {
        // for (let i = 0; i < aCustomers.length; i++) {
        //    alert(aCustomers[i])
        // }
        alert(aCustomers.join("\n"))
    }
    else {
        flag=true;
    }
}
function check_rs(){
    // alert("gdcftgyh")
    var aCustomers=new Array();
    var myform = $("form1")
    var address = $("input[name='address_rs']")[0].checkValidity();
    var From_price = $("input[name='From_price_rs']")[0].checkValidity();
    var Until_Price = $("input[name='Until_Price_rs']")[0].checkValidity();
    var From_square_meters = $("input[name='From_square_meters_rs']")[0].checkValidity();
    var Until_square_meters = $("input[name='Until_square_meters_rs']")[0].checkValidity();
    var From_num_rooms = $("input[name='From_num_rooms_rs']")[0].checkValidity();
    var Until_num_rooms = $("input[name='Until_num_rooms_rs']")[0].checkValidity();
    var from_floor = $("input[name='from_floor_rs']")[0].checkValidity();
    var Until_floor = $("input[name='Until_floor_rs']")[0].checkValidity();


    flag=true;
    if(!address) {
        aCustomers[0]="כתובת חסרה";
        flag=false;
    }
    if(!From_price) {
        aCustomers[1]="שדה ממחיר חסר";
        flag=false;
    }
    if(!Until_Price) {
        aCustomers[2]="שדה עד מחיר חסר";
        flag = false;
    }
    if(!From_square_meters) {
        aCustomers[3]="שדה ממר חסר"
        flag = false;
    }
    if(!Until_square_meters) {
        aCustomers[4]="שדה עד מר חסר";
        flag = false;
    }
    if(!From_num_rooms) {
        aCustomers[5]="שדה ממספר חדרים חסר";
        flag = false;
    }
    if(!Until_num_rooms) {
        aCustomers[6]="שדה עד מספר חדרים חסר";
        flag = false;
    }
    if(!from_floor) {
        aCustomers[7]="שדה מקומה חסר";
        flag = false;
    }
    if(!Until_floor) {
        aCustomers[8]="שדה עד קומה חסר";
        flag = false;
    }



    if(flag==false) {
        alert(aCustomers.join("\n"))
    }
    else {
        flag=true;
    }
}
function validation_as(){
    var aCustomers=new Array();
    var myform = $("form1")
    var price = $("input[name='price_as']")[0].checkValidity();
    var property_tax = $("input[name='property_tax_as']")[0].checkValidity();
    var home_vaad = $("input[name='home_vaad_as']")[0].checkValidity();
    var name = $("input[name='name_as']")[0].checkValidity();
    var email = $("input[name='email_as']")[0].checkValidity();
    var phone = $("input[name='phone_as']")[0].checkValidity();
    flag=true;
    if(!price) {
        aCustomers[0]="מחיר חסר";
        flag=false;
    }
    if(!property_tax) {
        aCustomers[1]="שדה ארנונה חסר";
        flag=false;
    }
    if(!home_vaad) {
        aCustomers[2]="שדה וועד הבית חסר";
        flag = false;
    }
    if(!name) {
        aCustomers[3]="שדה שם חסר";
        flag = false;
    }
    if(!email) {
        aCustomers[4]="שדה מייל לא תקין: בדוק שהשדה לא ריק או שהכתובת מייל תקינה"
        flag = false;
    }
    if(!phone) {
        aCustomers[5]="שדה טלפון לא תקין: בדוק שהשדה לא ריק או שהמספר תקין"
        flag = false;
    }
    if(flag==false) {
        alert(aCustomers.join("\n"))
    }
    else {
        flag=true;
    }
}
function validation_ar(){
    // alert("gdcftgyh")
    var aCustomers=new Array();
    var myform = $("form1")
    var price = $("input[name='price_ar']")[0].checkValidity();
    var property_tax = $("input[name='property_tax_ar']")[0].checkValidity();
    var home_vaad = $("input[name='home_vaad_ar']")[0].checkValidity();
    var name = $("input[name='name_ar']")[0].checkValidity();
    var email = $("input[name='email_ar']")[0].checkValidity();
    var phone = $("input[name='phone_ar']")[0].checkValidity();
    flag=true;
    if(!price) {
        aCustomers[0]="מחיר חסר";
        flag=false;
    }
    if(!property_tax) {
        aCustomers[1]="שדה ארנונה חסר";
        flag=false;
    }
    if(!home_vaad) {
        aCustomers[2]="שדה וועד הבית";
        flag = false;
    }
    if(!email) {
        aCustomers[3]="שדה שם חסר "
        flag = false;
    }
    if(!email) {
        aCustomers[4]="שדה מייל לא תקין: בדוק שהשדה לא ריק או שהכתובת מייל תקינה"
        flag = false;
    }
    if(!phone) {
        aCustomers[5]="שדה טלפון לא תקין: בדוק שהשדה לא ריק או שהמספר תקין"
        flag = false;
    }
    if(flag==false) {
        alert(aCustomers.join("\n"))
    }
    else {
        flag=true;
    }
}

function validation_ss(){
    // alert("gdcftgyh")
    var aCustomers=new Array();
    var myform = $("form1")
    var name = $("input[name='name_ss']")[0].checkValidity();
    var email = $("input[name='email_ss']")[0].checkValidity();
    var phone = $("input[name='phone_ss']")[0].checkValidity();
    flag=true;
    if(!email) {
        aCustomers[0]="שדה שם חסר"
        flag = false;
    }
    if(!email) {
        aCustomers[1]="שדה מייל לא תקין: בדוק שהשדה לא ריק או שהכתובת מייל תקינה"
        flag = false;
    }
    if(!phone) {
        aCustomers[2]="שדה טלפון לא תקין: בדוק שהשדה לא ריק או שהמספר תקין"
        flag = false;
    }
    if(flag==false) {
        alert(aCustomers.join("\n"))
    }
    else {
        flag=true;
    }
}
function validation_rs(){
    // alert("gdcftgyh")
    var aCustomers=new Array();
    var myform = $("form1")
    var name = $("input[name='name_rs']")[0].checkValidity();
    var email = $("input[name='email_rs']")[0].checkValidity();
    var phone = $("input[name='phone_rs']")[0].checkValidity();
    flag=true;
    if(!name) {
        aCustomers[1]="שדה שם חסר"
        flag = false;
    }
    if(!email) {
        aCustomers[1]="שדה מייל לא תקין: בדוק שהשדה לא ריק או שהכתובת מייל תקינה"
        flag = false;
    }
    if(!phone) {
        aCustomers[2]="שדה טלפון לא תקין: בדוק שהשדה לא ריק או שהמספר תקין"
        flag = false;
    }
    if(flag==false) {
        alert(aCustomers.join("\n"))
    }
    else {
        flag=true;
    }
}
function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        alert("Valid email address!");
        // document.form1.text1.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        // document.form1.text1.focus();
        return false;
    }
}

function hide(){
steps();
    var sale = document.getElementById("sale");
    var rent =  document.getElementById("rent");
    if(sale.style.display!="none"){
        sale.style.display="none";
        rent.style.display="block";

    }
    else{
        rent.style.display="none";
        sale.style.display="block";
    }

}


    function steps() {
        var current_fs, next_fs, previous_fs; //fieldsets
        var opacity;
        var current = 1;
        var steps = $("fieldset").length / 2;

        setProgressBar(current);

        $(".next").click(function () {
            if (flag == true) {
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();

//Add Class Active
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
                next_fs.show();
//hide the current fieldset with style
                current_fs.animate({opacity: 0}, {
                    step: function (now) {
// for making fielset appear animation
                        opacity = 1 - now;

                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({'opacity': opacity});
                    },
                    duration: 500
                });
                setProgressBar(++current);
            }
        });

        $(".previous").click(function () {

            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();

//Remove class active
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
            previous_fs.show();

//hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function (now) {
// for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        'display': 'none',
                        'position': 'relative'
                    });
                    previous_fs.css({'opacity': opacity});
                },
                duration: 500
            });
            setProgressBar(--current);
        });

        function setProgressBar(curStep) {
            var percent = parseFloat(100 / steps) * curStep;
            percent = percent.toFixed();
            $(".progress-bar")
                .css("width", percent + "%")
        }

        $(".submit").click(function () {
            return false;
        });
        $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
            $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
        });
    }
$(document).ready(function(){
    document.getElementById("rent").style.display= "none";
    steps();
})

// $(document).ready(function(){
//     var current_fs, next_fs, previous_fs; //fieldsets
//     var opacity;
//     var current = 1;
//     var steps = $("fieldset").length/2;
//
//     setProgressBar(current);
//
//     $(".next").click(function () {
//         if(flag==true){
//         current_fs = $(this).parent();
//         next_fs = $(this).parent().next();
//
//
// //Add Class Active
//         $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
//
// //show the next fieldset
//         next_fs.show();
// //hide the current fieldset with style
//         current_fs.animate({opacity: 0}, {
//             step: function (now) {
// // for making fielset appear animation
//                 opacity = 1 - now;
//
//                 current_fs.css({
//                     'display': 'none',
//                     'position': 'relative'
//                 });
//                 next_fs.css({'opacity': opacity});
//             },
//             duration: 500
//         });
//         setProgressBar(++current);
//         }
//     });
//
//     $(".previous").click(function () {
//
//         current_fs = $(this).parent();
//         previous_fs = $(this).parent().prev();
//
// //Remove class active
//         $("#progressbar2 li").eq($("fieldset").index(current_fs)).removeClass("active");
//
// //show the previous fieldset
//         previous_fs.show();
//
// //hide the current fieldset with style
//         current_fs.animate({opacity: 0}, {
//             step: function (now) {
// // for making fielset appear animation
//                 opacity = 1 - now;
//
//                 current_fs.css({
//                     'display': 'none',
//                     'position': 'relative'
//                 });
//                 previous_fs.css({'opacity': opacity});
//             },
//             duration: 500
//         });
//         setProgressBar(--current);
//     });
//     function setProgressBar(curStep) {
//         var percent = parseFloat(100 / steps) * curStep;
//         percent = percent.toFixed();
//         $(".progress-bar")
//             .css("width", percent + "%")
//     }
//
//     $(".submit").click(function () {
//         return false;
//     });
//     $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
//         $(e.target).
//         prev().
//         find("i:last-child").
//         toggleClass("fa-minus fa-plus");
//     });
// });

// var Accordion = function() {
//
//     var
//         toggleItems,
//         items;
//
//     var _init = function() {
//         toggleItems     = document.querySelectorAll('.accordion__itemTitleWrap');
//         toggleItems     = Array.prototype.slice.call(toggleItems);
//         items           = document.querySelectorAll('.accordion__item');
//         items           = Array.prototype.slice.call(items);
//
//         _addEventHandlers();
//         TweenLite.set(items, {visibility:'visible'});
//         TweenMax.staggerFrom(items, 0.9,{opacity:0, x:-100, ease:Power2.easeOut}, 0.3)
//     }
//
//     var _addEventHandlers = function() {
//         toggleItems.forEach(function(element, index) {
//             element.addEventListener('click', _toggleItem, false);
//         });
//     }
//
//     var _toggleItem = function() {
//         var parent = this.parentNode;
//         var content = parent.children[1];
//         if(!parent.classList.contains('is-active')) {
//             parent.classList.add('is-active');
//             TweenLite.set(content, {height:'auto'})
//             TweenLite.from(content, 0.6, {height: 0, immediateRender:false, ease: Back.easeOut})
//
//         } else {
//             parent.classList.remove('is-active');
//             TweenLite.to(content, 0.3, {height: 0, immediateRender:false, ease: Power1.easeOut})
//         }
//     }
//
//     return {
//         init: _init
//     }
//
// }();
//
// Accordion.init();