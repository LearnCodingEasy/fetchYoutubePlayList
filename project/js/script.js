/*jslint plusplus: true, evil: true */
// Todo: jslint plusplus: true for error for ++
// Todo: evil: true for error document.write

/*global console, alert, prompt, $, document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */

/*global window */

// Todo: Check File When You Type Code Javascript
// @ts-check
// Todo: Not Check File When You Type Code Javascript
// @ts-nocheck
// Todo: Ignore Line Have Error Code Javascript
// @ts-ignore

"use strict";

/*
?===============================================
?              Global Actions
?===============================================
*/

/*
?===============================================
?                  Import
?===============================================
*/

/*
?===============================================
?                Variables
?===============================================
*/
/**
 * => How To Use
 * 1 let username = eleId('username');
 */
let eleId = (id) => document.getElementById(id);
const innerMain = eleId("inner-main");

/*
?===============================================
?        Document Elements Html
?===============================================
*/

/*
?===============================================
?               Functions
?===============================================
*/

/*
?===============================================
?             Event Listeners
?===============================================
*/
// Fetch Get - Api Json
const APIURL =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLhTTxDaqoEVDN0p5dhZHIbL2XlKCgYRPq&maxResults=50&key=AIzaSyC77-PyQEvyooUnkPeP2jbf6uSUDyVozaQ";
fetch(APIURL)
  .then((response) => {
    // Api هى حالة طلب ال Response
    console.log("Response: ", response);
    // رجع البيانات كا نص
    // return response.text();
    // رجع البيانات كا ابجاكت
    return response.json();
  })
  .then((data) => {
    // Api هى البيانات التي تم الحصول عليها من ال Data
    console.log("Data: ", data);
    // تحويل البيانات الى ابجاكت
    // console.log("Data: ", JSON.parse(data));
    // Api الوصول الى العناصر الموجودة فى
    console.log("Data: ", data.items);
  })
  .catch((error) => {
    // تستخدام لتخزين الاخطاء فى حالة يوجد خطاء Catch
    console.error("Error: ", error);
  });

// Initially Get Api
// تشغيل الفانكشن
getApi(APIURL);

async function getApi(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  // console.log(respData);
  showApi(respData.items);
}
function showApi(Items) {
  // clear main
  innerMain.innerHTML = "";
  Items.forEach((Item) => {
    const { kind, etag, id, snippet } = Item;
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");

    itemEl.innerHTML = `
    <iframe 
    src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div class="text">
    <img src="${snippet.thumbnails.medium.url}">
      <p class="lead">${snippet.description.slice(0, 100)}</p>
    </div>
    `;

    innerMain.appendChild(itemEl);
  });
}
