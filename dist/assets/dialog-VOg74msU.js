import{$ as o}from"./jquery-BJSezBKo.js";o(()=>{const c=document.querySelector("#dialog");c&&(o(document).on("click","#trigger",()=>{c.showModal()}),o(document).on("click","#trigger2",()=>{o("#dom_dialog").show()}),o(document).on("click","#dialog2close",()=>{o("#dom_dialog").hide()}),o(document).on("click","dialog",function(e){e.target===e.currentTarget&&c.close()}))});
