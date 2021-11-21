var currentUserForBuy = {}
var images={}
//
function getUserBuy() {
    fetch("/dbReturn/returnUserBuy")
        .then(response => response.json())
        .then(data => {
            currentUserForBuy = data
        })
        .catch(console.error);
}
//====================================================================================
//טיפול באלגוריתם
//תצוגה של כל המודעות שהמשתמש פרסם לקנייה
function showUserBuy() {
    fetch("/dbReturn/returnUserBuy/")
        .then(response => response.json())
        .then(data => {
            let html = "";
            if(data.length==0)
                html += '<h4>   אין מודעות שלהם יהיו תוצאות </h4>\n';
            else
            {
            html += '<div class= container>';
            html += '<div class=row >';

            html += '<h4>   כאן מופיעות המודעות שפרסמת לקניה, להצגת תוצאות לחץ על כפתור הצג תוצאות </h4>\n';
            html += '</div>';
            html += '</div>';

            html += '<div class=row>';
            for (const product of data) {



                html += '    <div class="\col-lg-4 col-sm-6 mb\">'
                html += '  <div class=\"card box-shadow\">'
                html += '   <div class=\"card-body\">\n';
                html += '         <div class=\"portfolio-hover\">\n';
                html += '              <div class="portfolio-hover-content">'
                html += '    <i class="\fas fa-plus fa-3x\"></i>';
                html += '   </div>';
                html += '   </div>';
                html+=  ' <img class=\"img-fluid\" width="170px" src="/images/avatar1.jpg" alt="Avatar">'
                // html += '    </a>'
                html += '<div class=\"card-text1\">כתובת</div>';
                html += '  <p class=\"card-text1\">' + product.address+'';
                html += '</p>\n';
                html += '<div class="register_section1"></div>';

                html += '<div class="row">'
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <div class=\"card-text1\">ממחיר';
                html += '       </div>';
                html += '       </div>';

                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <div class=\"card-text1\"> עד מחיר';
                html += '       </div>';
                html += '       </div>';

                html += '       </div>\n';
                //
                html += '<div class="row">'
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <p class=\"card-text1\">'+product.From_price+'';
                html += '       </p>';
                html += '       </div>';

                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <p class=\"card-text1\">'+product.Until_Price+'';
                html += '       </p>';
                html += '       </div>';
                html += '<div class="register_section1"></div>';

                html += '<div class="row">'
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <div class=\"card-text1\">ממספר חדרים';
                html += '       </div>';
                html += '       </div>';

                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <div class=\"card-text1\"> עד מספר חדרים ';
                html += '       </div>';
                html += '       </div>';
                html += '       </div>';
                html += '       </div>\n';
                //
                html += '<div class="row">'
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <p class=\"card-text1\">'+product.From_num_rooms+'';
                html += '       </p>';
                html += '       </div>';

                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <p class=\"card-text1\">'+product.Until_num_rooms+'';
                html += '       </p>';
                html += '       </div>';


                html += '       </div>';
                html += '                                    <div class=\"d-flex justify-content-between align-items-center\">\n';
                html += '                                        <div class=\"btn-group\">\n';
                html += '                                            <button type=\"button\" onclick="showSales(\'' + product.id+ '\')"  class=\"btn btn-sm btn-outline-info\">הצג תוצאות</button>\n';
                html += '                                        </div>\n';

                html += '                                    </div>\n';
                html += '     </div>\n';
                html += '    </div>\n';
                html += '    </div>\n';
            }
            html += '</div>';
                }
            let show = document.getElementById("show").innerHTML = html;
        })
        .catch(console.error);
}
//====================================================================================
//טיפול באלגוריתם השידוך
//תצוגה למשתמש את כל המודעות למכירה שמתאימות למה שחיפש
function showSales(id) {
    let myList = document.getElementById("show");
    if (currentUserForBuy != undefined) {
        for (const index of currentUserForBuy) {
            if(index.id==id)
                var id_=index;
        }
        fetch("/dbReturn/returnSale/"+id, {
            method: 'POST',
            body: JSON.stringify({id_}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                let html = "";
                if(data.length==0)
                    html += '<h4>   אין תוצאות </h4>\n';
                else {
                    for (const product of data) {
                        html += '    <div class="\col-lg-4 col-sm-6 mb\">'
                        html += '  <div class=\"card box-shadow\">'
                        html += '   <div class=\"card-body\">\n';
                        // html += '     <a class=\"portfolio-link\" data-toggle="\modal\" href="\#portfolioModal1\">\n';
                        html += '         <div class=\"portfolio-hover\">\n';
                        html += '              <div class="portfolio-hover-content">'
                        html += '    <i class="\fas fa-plus fa-3x\"></i>';
                        html += '   </div>';
                        html += '   </div>';
                        html += '           <img class=\"img-fluid\" src="\assets/img/portfolio/agent.jpg\" alt="">\n';
                        html += '<div class=\"card-text1\">כתובת</div>';
                        html += '  <p class=\"card-text1\">' + product.address + '';
                        html += '</p>\n';
                        html += '<div class="register_section1"></div>';
                        html += '<div class=\"card-text1\">מחיר</div>';
                        html += '  <p class=\"card-text1\">' + product.price + '';
                        html += '</p>\n';
                        html += '<div class="register_section1"></div>';
                        html += '<div class="row">'
                        html += '    <div class="\col-lg-4 col-sm-3\">'
                        html += '  <div class=\"card-text1\">חדרים';
                        html += '       </div>';
                        html += '       </div>';

                        html += '    <div class="\col-lg-4 col-sm-3\">'
                        html += '  <div class=\"card-text1\"> קומה';
                        html += '       </div>';
                        html += '       </div>';

                        html += '    <div class="\col-lg-4 col-sm-3\">'
                        html += '  <div class=\"card-text1\">מ"ר';
                        html += '       </div>';
                        html += '       </div>';
                        html += '       </div>\n';

                        html += '<div class="row">'
                        html += '    <div class="\col-lg-4 col-sm-3\">'
                        html += '  <p class=\"card-text1\">' + product.rooms_numbers + '';
                        html += '       </p>';
                        html += '       </div>';

                        html += '    <div class="\col-lg-4 col-sm-3\">'
                        html += '  <p class=\"card-text1\">' + product.floor + '';
                        html += '       </p>';
                        html += '       </div>';

                        html += '    <div class="\col-lg-4 col-sm-3\">'
                        html += '  <p class=\"card-text1\">' + product.property_size + '';
                        html += '       </p>';
                        html += '       </div>';
                        html += '       </div>\n';
                        html += '                                    <div class=\"d-flex justify-content-between align-items-center\">\n';
                        html += '                                        <div class=\"btn-group\">\n';
                        html += '   <a class=\"portfolio-link\" data-toggle="\modal\" href="\#portfolioModal1\">\n';
                        html += '                                         <button type=\"button\"   class=\"btn btn-sm btn-outline-info\"> צפה בפרטים</button>\n';
                        html += '    </a>'
                        html += '                                        </div>\n';

                        html += '                                    </div>\n';
                        html += '     </div>\n';
                        html += '    </div>\n';
                        html += '    </div>\n';


                        html += '      <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">';
                        html += '       <div class="modal-dialog">';
                        html += '       <div class="modal-content">';
                        html += '   <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>';
                        html += '   <div class="container">';
                        html += '       <div class="row">';
                        html += '           <div class="col-lg-12">';
                        html += '                   <h2 class="text-uppercase">תיאור המודעה</h2>';
                        html += ' <img class=\"img-fluid\" width="250px" src="assets/img/portfolio/agent.jpg" alt="Avatar">'
                        html += ' <div class="rounded border">'
                        html += ' <h3 class="card_header">פרטי המודעה:</h3>'
                        html += ' <div class="row">';
                        html += '           <div class="\col-lg-4 col-md-4 col-sm-6\">';
                        html += '<div class="register_section3">';
                        html += "<div class='text'> " + "<b>כתובת:</b>" + " " + product.address + "</div>";
                        if (product.type_property == 1)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "דירה" + "</div>";
                        else if (product.type_property == 2)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "דירת גן" + "</div>";
                        else if (product.type_property == 3)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "וילה" + "</div>";
                        else if (product.type_property == 4)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "גג/פנטהוז" + "</div>";
                        else if (product.type_property == 5)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "דופלקס" + "</div>";
                        else if (product.type_property == 6)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "טריפלקס" + "</div>";
                        else if (product.type_property == 7)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "יחידת דיור" + "</div>";
                        else if (product.type_property == 8)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "דירת נופש" + "</div>";
                        else if (product.type_property == 9)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "סטודיו/לופט" + "</div>";
                        else if (product.type_property == 10)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "בית פרטי/קוטג'" + "</div>";
                        else if (product.type_property == 11)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "דיור מוגן" + "</div>";
                        else if (product.type_property == 12)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "חנייה" + "</div>";
                        else if (product.type_property == 13)
                            html += "<div class='text'> " + "<b>סוג הנכס: </b>" + " " + "מחסן" + "</div>";
                        html += "<div class='text'> " + "<b>מספר דירה:</b>" + " " + product.apartment_num + "</div>";
                        html += "<div class='text'> " + "<b>מחיר:</b>" + " " + product.price + "</div>";
                        html += "<div class='text'> " + "<b>קומה:</b>" + " " + product.floor + "</div>";
                        html += "<div class='text'> " + "<b>סהכ קומות בבניין:</b>" + " " + product.total_floors + "</div>";
                        html += "<div class='text'> " + "<b>גודל הנכס:</b>" + " " + product.property_size + "</div>";
                        html += "<div class='text'> " + "<b>מספר חדרים:</b>" + " " + product.rooms_numbers + "</div>"
                        html += '       </div>';
                        html += '       </div>';

                        html += '           <div class="\col-lg-4 col-md-4 col-sm-6\">';
                        html += '<div class="register_section2">';
                        html += '       </div>';
                        html += '           <div class="row">';
                        html += '           <div class="\col-lg-6 col-md-6 col-sm-12\">';
                        if (product.air_conditioning == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " מיזוג " + "</div>"
                        if (product.sun_Terrace == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " מרפסת שמש " + "</div>"
                        if (product.terrace == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " מרפסת " + "</div>"
                        if (product.Yard == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " חצר" + "</div>"
                        if (product.elevator == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " מעלית" + "</div>"
                        if (product.renovated == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " משופצת" + "</div>"
                        if (product.bars == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " סורגים" + "</div>"
                        if (product.parking == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " חניה" + "</div>"
                        if (product.MMD_room == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " ממד" + "</div>"
                        if (product.architectural_Design == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " עיצוב אדריכלי" + "</div>"
                        if (product.Storage == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " מחסן" + "</div>"
                        if (product.accessibility == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " נגישות" + "</div>"
                        if (product.furnished_and_equipped == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " מרוהט ומאובזר" + "</div>"
                        if (product.High_ceiling == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " תקרה גבוהה" + "</div>"
                        if (product.new_property == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " נכס חדש" + "</div>"
                        if (product.quiet_area == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " אזור שקט" + "</div>"
                        if (product.close_to_kindergartens == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב לגני ילדים" + "</div>"
                        if (product.secure_area == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " אזור מאובטח" + "</div>"
                        if (product.close_to_train == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב לרכבת" + "</div>"
                        if (product.view_of_park == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " נוף לפארק" + "</div>"
                        html += '       </div>';
                        html += '           <div class="\col-lg-6 col-md-6 col-sm-12\">';
                        if (product.close_to_gym == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב לחדר כושר" + "</div>"
                        if (product.close_to_hospital == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב לבית חולים" + "</div>"
                        if (product.close_to_shopping_center == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב למרכז קניות" + "</div>"
                        if (product.close_to_park == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב לפארק" + "</div>"
                        if (product.close_to_HM == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב לקופת חולים" + "</div>"
                        if (product.close_to_public_transportation == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב לתחבורה ציבורית" + "</div>"
                        if (product.close_to_airport == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב לשדה תעופה" + "</div>"
                        if (product.close_to_school == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב קרוב לבי\"ס" + "</div>"
                        if (product.near_the_sea == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " קרוב קרוב לים" + "</div>"
                        if (product.Master_unit == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " יחידת דיור" + "</div>"
                        if (product.Jacuzzi == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " ג'קוזי" + "</div>"
                        if (product.Swimming_pool == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " בריכת שחיה" + "</div>"
                        if (product.Water_heating_on_gas == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " חימום מים על גז" + "</div>"
                        if (product.Guard_in_the_building == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " שומר בבניין" + "</div>"
                        if (product.underground_parking_lot == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " חניון תת קרקעי" + "</div>"
                        if (product.parquet == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " פרקט" + "</div>"
                        if (product.equipped_kitchen == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " מטבח מאובזר" + "</div>"
                        if (product.Bicycle_room == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " חדר אופניים" + "</div>"
                        if (product.Security_Cameras == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " מצלמות אבטחה" + "</div>"
                        if (product.Irrigation_system == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " מערכת השקיה" + "</div>"
                        html += '       </div>';
                        html += '       </div>';
                        html += '       </div>';
                        html += '           <div class="\col-lg-4 col-md-4 col-sm-6\">';
                        if (product.available_immediately == "on")
                            html += " <div class='text'>" + " <i class='fa fa-check' id='svg'></i>" + " כניסה מידית" + "</div>"
                        html += "<div class='text'> " + "<b>ארנונה:</b>" + " " + product.property_tax + "</div>";
                        html += "<div class='text'> " + "<b>ועד בית:</b>" + " " + product.home_vaad + "</div>";
                        html += "<div class='text'> " + "<b>טקסט חופשי:</b>" + " " + product.free_text + "</div>";
                        html += '       </div>';
                        html += '       </div>';
                        html += '       </div>';
                        html += '  <div class="space"></div>';
                        html += ' <div class="rounded border">'
                        html += ' <h3 class="card_header">פרטי יצירת קשר:</h3>'
                        html += ' <div class="row">';
                        html += '           <div class="\col-lg-4 col-md-6 col-sm-6\">';
                        html += "<div class='text'> " + "<b>שם:</b>" + " " + product.name + "</div>";
                        html += "<div class='text'> " + "<b>מייל:</b>" + " " + product.email + "</div>";
                        html += '       </div>';

                        html += '           <div class="\col-lg-4 col-md-6 col-sm-6\">';
                        html += "<div class='text'> " + "<b>טלפון:</b>" + " " + "0" + product.phone + "</div>";
                        html += '       </div>';

                        html += '       </div>';
                        html += '       </div>';
                        html += '  <div class="space"></div>';
                        html += '                   <button class="btn btn-primary" data-dismiss="modal" type="button">';
                        html += '                       <i class="fas fa-times mr-1"></i>';
                        html += '                       סגירה';
                        html += '                   </button>';
                        html += '               </div>';
                        html += '           </div>';
                        html += '       </div>';
                        html += '   </div>';
                        html += '</div>';
                        html += ' </div>';
                        html += '</div>';
                    }
                }


                let show = document.getElementById("show").innerHTML = html;
            })
            .catch(console.error);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    getUserBuy();
});
//====================================================================================
//טיפול בעריכה - שלב ראשון
//תצוגה של כל המודעות שהמשתמש פרסם לקנייה ומבינהן הוא יוכל לבחור איזה מודעה לעדכן
function showUserBuyEdit() {
    fetch("/dbReturn/returnUserBuy/")
        .then(response => response.json())
        .then(data => {
            let html = "";
            html += '<div class= container>';
            html += '<div class=row >';

            html += '<h4>   כאן מופיעות המודעות שפרסמת לקניה, לעריכה לחץ על ערוך </h4>\n';
            html += '</div>';
            html += '</div>';

            html += '<div class=row>';
            for (const product of data) {
                html += '    <div class="\col-lg-4 col-sm-6 mb\">'
                html += '  <div class=\"card box-shadow\">'
                html += '   <div class=\"card-body\">\n';
                html += '         <div class=\"portfolio-hover\">\n';
                html += '              <div class="portfolio-hover-content">'
                html += '    <i class="\fas fa-plus fa-3x\"></i>';
                html += '   </div>';
                html += '   </div>';
                html+=  ' <img class=\"img-fluid\" width="170px" src="/images/avatar1.jpg" alt="Avatar">'
                html += '<div class=\"card-text1\">כתובת</div>';
                html += '  <p class=\"card-text1\">' + product.address+'';
                html += '</p>\n';
                html += '<div class="register_section1"></div>';

                html += '<div class="row">'
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <div class=\"card-text1\">ממחיר';
                html += '       </div>';
                html += '       </div>';

                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <div class=\"card-text1\"> עד מחיר';
                html += '       </div>';
                html += '       </div>';
                html += '       </div>\n';
                html += '<div class="row">'
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <p class=\"card-text1\">'+product.From_price+'';
                html += '       </p>';
                html += '       </div>';
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <p class=\"card-text1\">'+product.Until_Price+'';
                html += '       </p>';
                html += '       </div>';
                html += '<div class="register_section1"></div>';
                html += '<div class="row">'
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <div class=\"card-text1\">ממספר חדרים';
                html += '       </div>';
                html += '       </div>';
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <div class=\"card-text1\"> עד מספר חדרים ';
                html += '       </div>';
                html += '       </div>';
                html += '       </div>';
                html += '       </div>\n';
                html += '<div class="row">'
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <p class=\"card-text1\">'+product.From_num_rooms+'';
                html += '       </p>';
                html += '       </div>';
                html += '    <div class="\col-lg-6 col-sm-3\">'
                html += '  <p class=\"card-text1\">'+product.Until_num_rooms+'';
                html += '       </p>';
                html += '       </div>';
                html += '       </div>';
                html += '                                    <div class=\"d-flex justify-content-between align-items-center\">\n';
                html += '                                        <div class=\"btn-group\">\n';

                html += ' <a  href="\dbEdit/eraseBuy/' + product.id+ ' ">'
                html += '                                            <button type=\"button\" class=\"btn btn-sm btn-outline-info\">מחק</button>\n';
                html += ' </a>'
                html += ' <a  href="\dbEdit/buy/' + product.id+ ' ">'
                html += '                                            <button type=\"button\" class=\"btn btn-sm btn-outline-info\">ערוך</button>\n';
                html += ' </a>'
                html += '                                        </div>\n';

                html += '                                    </div>\n';
                html += '     </div>\n';
                html += '    </div>\n';
                html += '    </div>\n';
            }
            html += '</div>';
            let show = document.getElementById("show2").innerHTML = html;
        })
        .catch(console.error);
}
