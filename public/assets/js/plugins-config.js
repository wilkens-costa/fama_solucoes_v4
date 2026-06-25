(function(){
var D = {"entries": [{"b": "eyJ2ZXJzaW9uIjoiQ29udGFjdCBGb3JtIDcgU1dWIFNjaGVtYSAyMDI0LTEwIiwibG9jYWxlIjoicHRfQlIiLCJydWxlcyI6W3sicnVsZSI6InJlcXVpcmVkIiwiZmllbGQiOiJ5b3VyLW5hbWUiLCJlcnJvciI6IlByZWVuY2hhIGVzdGUgY2FtcG8uIn0seyJydWxlIjoibWF4bGVuZ3RoIiwiZmllbGQiOiJ5b3VyLW5hbWUiLCJ0aHJlc2hvbGQiOjQwMCwiZXJyb3IiOiJFc3RlIGNhbXBvIHRlbSB1bWEgZW50cmFkYSBtdWl0byBsb25nYS4ifSx7InJ1bGUiOiJyZXF1aXJlZCIsImZpZWxkIjoieW91ci1lbWFpbCIsImVycm9yIjoiUHJlZW5jaGEgZXN0ZSBjYW1wby4ifSx7InJ1bGUiOiJlbWFpbCIsImZpZWxkIjoieW91ci1lbWFpbCIsImVycm9yIjoiRGlnaXRlIHVtIGVuZGVyZVx1MDBlN28gZGUgZS1tYWlsLiJ9LHsicnVsZSI6Im1heGxlbmd0aCIsImZpZWxkIjoieW91ci1lbWFpbCIsInRocmVzaG9sZCI6NDAwLCJlcnJvciI6IkVzdGUgY2FtcG8gdGVtIHVtYSBlbnRyYWRhIG11aXRvIGxvbmdhLiJ9LHsicnVsZSI6InJlcXVpcmVkIiwiZmllbGQiOiJ0ZWxlZm9uZSIsImVycm9yIjoiUHJlZW5jaGEgZXN0ZSBjYW1wby4ifSx7InJ1bGUiOiJ0ZWwiLCJmaWVsZCI6InRlbGVmb25lIiwiZXJyb3IiOiJEaWdpdGUgdW0gblx1MDBmYW1lcm8gZGUgdGVsZWZvbmUuIn0seyJydWxlIjoibWF4bGVuZ3RoIiwiZmllbGQiOiJ0ZWxlZm9uZSIsInRocmVzaG9sZCI6NDAwLCJlcnJvciI6IkVzdGUgY2FtcG8gdGVtIHVtYSBlbnRyYWRhIG11aXRvIGxvbmdhLiJ9LHsicnVsZSI6InJlcXVpcmVkIiwiZmllbGQiOiJ5b3VyLXN1YmplY3QiLCJlcnJvciI6IlByZWVuY2hhIGVzdGUgY2FtcG8uIn0seyJydWxlIjoibWF4bGVuZ3RoIiwiZmllbGQiOiJ5b3VyLXN1YmplY3QiLCJ0aHJlc2hvbGQiOjQwMCwiZXJyb3IiOiJFc3RlIGNhbXBvIHRlbSB1bWEgZW50cmFkYSBtdWl0byBsb25nYS4ifSx7InJ1bGUiOiJyZXF1aXJlZCIsImZpZWxkIjoieW91ci1tZXNzYWdlIiwiZXJyb3IiOiJQcmVlbmNoYSBlc3RlIGNhbXBvLiJ9LHsicnVsZSI6Im1heGxlbmd0aCIsImZpZWxkIjoieW91ci1tZXNzYWdlIiwidGhyZXNob2xkIjoyMDAwLCJlcnJvciI6IkVzdGUgY2FtcG8gdGVtIHVtYSBlbnRyYWRhIG11aXRvIGxvbmdhLiJ9XX0=", "t": "application/json"}, {"b": "W10=", "t": "application/json"}], "keys": {"https://www.solucoesfama.com.br/wp-json/contact-form-7/v1/contact-forms/6/feedback/schema": 0, "https://www.solucoesfama.com.br/wp-json/contact-form-7/v1/contact-forms/6/refill": 1}};
var E = D.entries, K = D.keys;
function entry(u){
  if (!u) return null;
  if (K[u] != null) return E[K[u]];
  try {
    var x = new URL(u, location.href);
    if (K[x.href] != null) return E[K[x.href]];
    var op = x.origin + x.pathname;
    if (K[op] != null) return E[K[op]];
  } catch(e){}
  return null;
}
function bytes(e){
  var s = atob(e.b), a = new Uint8Array(s.length);
  for (var i=0;i<s.length;i++) a[i] = s.charCodeAt(i);
  return a;
}
window.__offlineDataUri = function(u){
  var e = entry(u);
  return e ? ('data:' + e.t + ';base64,' + e.b) : null;
};
var _fetch = window.fetch;
if (_fetch) window.fetch = function(input, init){
  try {
    var u = (typeof input === 'string') ? input : (input && input.url);
    var e = entry(u);
    if (e) return Promise.resolve(new Response(bytes(e),
      { status:200, headers:{'Content-Type': e.t} }));
  } catch(err){}
  return _fetch.apply(this, arguments);
};
var _open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(m, u){
  try { this.__offUrl = u; } catch(e){}
  return _open.apply(this, arguments);
};
var _send = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(){
  var e = entry(this.__offUrl);
  if (!e) return _send.apply(this, arguments);
  var self = this, txt = atob(e.b);
  setTimeout(function(){
    try {
      Object.defineProperty(self,'readyState',{value:4,configurable:true});
      Object.defineProperty(self,'status',{value:200,configurable:true});
      Object.defineProperty(self,'responseText',{value:txt,configurable:true});
      Object.defineProperty(self,'response',{value:txt,configurable:true});
    } catch(err){}
    if (typeof self.onreadystatechange === 'function') self.onreadystatechange();
    if (typeof self.onload === 'function') self.onload();
  }, 0);
};
})();
(function(){
var ASSET_MAP = {"https://www.solucoesfama.com.br/": "assets/1e0a1aeb61b46675_file.html", "https://fonts.googleapis.com/css?family=Roboto:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CRoboto+Slab:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CJost:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic&display=swap&ver=7.0": "assets/a0d1280adaad4110_css.css", "https://www.solucoesfama.com.br/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=6.1.2": "assets/4048fd0e6c444124_styles.css", "https://www.solucoesfama.com.br/wp-content/plugins/cookie-notice/css/front.min.css?ver=2.5.7": "assets/029dedf319bc4536_front.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/header-footer-elementor/assets/css/header-footer-elementor.css?ver=2.5.2": "assets/25825611ade7ceae_header-footer-elementor.css", "https://www.solucoesfama.com.br/wp-content/uploads/elementor/css/post-5.css?ver=1781241534": "assets/5d9bc287b9a4311b_post-5.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/css/widget-heading.min.css?ver=3.26.4": "assets/1283800d1f41a3d8_widget-heading.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/css/widget-text-editor.min.css?ver=3.26.4": "assets/d56a4348bf9f10b6_widget-text-editor.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.26.4": "assets/3ff58880d3d61eea_frontend.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/css/widget-video.min.css?ver=3.26.4": "assets/7df79135400163be_widget-video.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/css/widget-image.min.css?ver=3.26.4": "assets/f81b4622ba635b08_widget-image.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend.css?ver=2.5.2": "assets/855c06fbef0a0469_frontend.css", "https://www.solucoesfama.com.br/wp-content/themes/hello-elementor/style.min.css?ver=3.2.1": "assets/0f3d863879ef08a1_style.min.css", "https://www.solucoesfama.com.br/wp-content/uploads/elementor/css/post-9.css?ver=1781241534": "assets/f22cfa8fef7cc886_post-9.css", "https://www.solucoesfama.com.br/wp-content/uploads/elementor/css/post-384.css?ver=1781241535": "assets/ca69d2ef89f068af_post-384.css", "https://www.solucoesfama.com.br/wp-content/themes/hello-elementor/header-footer.min.css?ver=3.2.1": "assets/e4c904ca22994aca_header-footer.min.css", "https://www.solucoesfama.com.br/wp-content/uploads/elementor/css/post-7.css?ver=1781241534": "assets/c444fa2e00727d91_post-7.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=3.24.3": "assets/e4e1e139912e5756_widget-icon-list.min.css", "https://www.solucoesfama.com.br/wp-content/themes/hello-elementor/theme.min.css?ver=3.2.1": "assets/bad7517d43563ffb_theme.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.34.0": "assets/2b1bd4f2ad15ca44_elementor-icons.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.26.4": "assets/e07ef256c6c79d63_widget-social-icons.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css?ver=3.26.4": "assets/02c3b1394964fd71_apple-webkit.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=1.7.1034": "assets/d87ddf917b7a1449_all.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/cookie-notice/js/front.min.js?ver=2.5.7": "assets/f21f095589eba3ec_front.min.js", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/call-center-representative-2024-08-27-23-09-07-utc-1024x683.jpg": "assets/f76f77c5302f04cf_call-center-representative-202.jpg", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-1.png": "assets/03d573d5fb35ba50_Grupo-1.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/performance@2x.png": "assets/ca1642de756c99b9_performance_2x.png", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css?ver=3.24.0": "assets/e07ef256c6c79d63_widget-social-icons.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.css?ver=5.15.3": "assets/5009a34e30063ffb_brands.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.css?ver=5.15.3": "assets/93cf6e96459e42f9_solid.css", "https://www.solucoesfama.com.br/wp-content/plugins/royal-elementor-addons/assets/css/lib/animations/text-animations.min.css?ver=1.7.1034": "assets/346722bc13d0c169_text-animations.min.css", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.css?ver=5.15.3": "assets/d417b6ed49cb6ae3_fontawesome.css", "https://www.solucoesfama.com.br/wp-content/plugins/wp-whatsapp-chat/build/frontend/css/style.css?ver=7.8.8": "assets/8df7eb16b0cbc869_style.css", "https://www.solucoesfama.com.br/wp-content/plugins/royal-elementor-addons/assets/css/frontend.min.css?ver=1.7.1034": "assets/4647ddce2996d0f1_frontend.min.css", "https://www.solucoesfama.com.br/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1": "assets/5274f11e6fb32ae0_jquery-migrate.min.js", "https://www.solucoesfama.com.br/wp-includes/js/jquery/jquery.min.js?ver=3.7.1": "assets/cb6f2d32c49d1c2b_jquery.min.js", "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css": "assets/521410e1fc447800_owl.carousel.min.css", "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css": "assets/924b0dc630d1c5df_owl.theme.default.min.css", "https://code.jquery.com/jquery-3.6.0.min.js": "assets/ff1523fb7389539c_jquery-3.6.0.min.js", "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js": "assets/a53c43f834b32309_owl.carousel.min.js", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/schedule@2x.png": "assets/e8a5acd5f02681d5_schedule_2x.png", "https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2": "assets/0a44e0bb6ba5c853_KFO7CnqEu92Fr1ME7kSn66aGLdTylU.woff2", "https://fonts.gstatic.com/s/jost/v20/92zatBhPNqw73oTd4jQmfxI.woff2": "assets/235d8f8964bfdf10_92zatBhPNqw73oTd4jQmfxI.woff2", "https://www.solucoesfama.com.br/wp-includes/js/dist/hooks.min.js?ver=7496969728ca0f95732d": "assets/1d231f080d1df633_hooks.min.js", "https://www.solucoesfama.com.br/wp-includes/js/dist/i18n.min.js?ver=781d11515ad3d91786ec": "assets/46668f561bd01aaa_i18n.min.js", "https://www.solucoesfama.com.br/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=6.1.2": "assets/29fdd17a7002a2e1_index.js", "https://www.solucoesfama.com.br/wp-content/plugins/contact-form-7/includes/js/index.js?ver=6.1.2": "assets/ddcce687729cb358_index.js", "https://www.solucoesfama.com.br/wp-content/plugins/royal-elementor-addons/assets/js/lib/jarallax/jarallax.min.js?ver=1.12.7": "assets/0e8046d1329ee320_jarallax.min.js", "https://www.solucoesfama.com.br/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js?ver=3.2.1": "assets/a0abc8cf4dc9737b_hello-frontend.min.js", "https://www.solucoesfama.com.br/wp-content/plugins/royal-elementor-addons/assets/js/lib/particles/particles.js?ver=3.0.6": "assets/89c8e085c3da89b3_particles.js", "https://www.solucoesfama.com.br/wp-content/plugins/royal-elementor-addons/assets/js/lib/parallax/parallax.min.js?ver=1.0": "assets/9d9e06fb9a97436f_parallax.min.js", "https://www.solucoesfama.com.br/wp-includes/js/dist/vendor/react.min.js?ver=18.3.1.1": "assets/d949f1c3687aedad_react.min.js", "https://www.solucoesfama.com.br/wp-content/plugins/header-footer-elementor/inc/js/frontend.js?ver=2.5.2": "assets/6b5ddba5a61f6977_frontend.js", "https://www.solucoesfama.com.br/wp-includes/js/dist/escape-html.min.js?ver=3f093e5cca67aa0f8b56": "assets/781a78aaac998392_escape-html.min.js", "https://www.solucoesfama.com.br/wp-includes/js/dist/element.min.js?ver=15ba804677f72a8db97b": "assets/844ea5577f58bf5e_element.min.js", "https://www.solucoesfama.com.br/wp-content/plugins/wp-whatsapp-chat/build/frontend/js/index.js?ver=2c4ffd8ce6a4563d774f": "assets/60ee94812be265a6_index.js", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.26.4": "assets/9439907d7c7f7805_webpack.runtime.min.js", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/telefone.png": "assets/f388843ef3d06f0d_telefone.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/email.png": "assets/1881ec7d803eacc2_email.png", "https://www.solucoesfama.com.br/wp-includes/js/dist/vendor/react-dom.min.js?ver=18.3.1.1": "assets/35f4f974f4b2bcd4_react-dom.min.js", "https://www.solucoesfama.com.br/wp-includes/js/jquery/ui/core.min.js?ver=1.13.3": "assets/699210a5ed06e497_core.min.js", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.26.4": "assets/b09e46d4284593fe_frontend-modules.min.js", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.26.4": "assets/64c60c59639d893c_frontend.min.js", "https://www.solucoesfama.com.br/wp-content/plugins/royal-elementor-addons/assets/js/lib/dompurify/dompurify.min.js?ver=3.0.6": "assets/8fb1f9bda04b3125_dompurify.min.js", "https://www.solucoesfama.com.br/wp-content/plugins/royal-elementor-addons/assets/js/modal-popups.min.js?ver=1.7.1034": "assets/ffe90abf1e3a9fa0_modal-popups.min.js", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/communication@2x.png": "assets/77d1957157427eb7_communication_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/hybrid-work@2x.png": "assets/c5cd06139b07583d_hybrid-work_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/review@2x.png": "assets/d13e52ab49652ae7_review_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/contrato-1@2x.png": "assets/ae8d3a2ef3f0c949_contrato-1_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/acordo@2x.png": "assets/e385caf05aeb2755_acordo_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/conversacao@2x.png": "assets/3d89803bce69a2b0_conversacao_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/mecanica@2x.png": "assets/30016c59a7bc3085_mecanica_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/cliente-1@2x.png": "assets/38406adb886a3b9c_cliente-1_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-140@2x.png": "assets/37e5a68f1a2983f9_Grupo-140_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-141@2x.png": "assets/8060ce78e87cbae2_Grupo-141_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/conversation@2x.png": "assets/8bc1ef644d668385_conversation_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/customer-service@2x.png": "assets/38d134cd4c3c4319_customer-service_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/impostos@2x.png": "assets/d52f695bfcc3ab9f_impostos_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/negociacao@2x.png": "assets/d833f0154b4dbf05_negociacao_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/banco@2x.png": "assets/9aff479eed49ceed_banco_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/grafico-de-pizza@2x.png": "assets/018cb20944b4ff7e_grafico-de-pizza_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/agreement@2x.png": "assets/2f484e1b19095428_agreement_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/processor@2x.png": "assets/dbe7257a5325c4a8_processor_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-127.png": "assets/5a092729aacca698_Grupo-127.png", "https://www.solucoesfama.com.br/wp-content/plugins/royal-elementor-addons/assets/js/frontend.min.js?ver=1.7.1034": "assets/ec72e5855f237c8c_frontend.min.js", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-129.png": "assets/b3fb047aec2b914a_Grupo-129.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/conversacao-1.png": "assets/7d4ee03760ddf4ff_conversacao-1.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/sms.png": "assets/f93064d33eea6935_sms.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/sms-3.png": "assets/cf695f613c539fbe_sms-3.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/sms-2.png": "assets/f49c8f80ba5906f7_sms-2.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/o-email.png": "assets/d70f147f152327b2_o-email.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/whatsapp.png": "assets/4de80ddd355401ae_whatsapp.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/agente-de-atendimento-ao-cliente.png": "assets/8802c79ea0880331_agente-de-atendimento-ao-clien.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/dispositivos.png": "assets/580194074eef5db2_dispositivos.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-197-1.png": "assets/f270f056ec65da32_Grupo-197-1.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Forma-1-copiar.png": "assets/99bb191851f4e405_Forma-1-copiar.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/atendimento-ao-cliente.png": "assets/92b436032b3aa476_atendimento-ao-cliente.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-de-mascara-18.png": "assets/bb6565ebaec46c9e_Grupo-de-mascara-18.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/computador-portatil@2x.png": "assets/6467f18242e67c42_computador-portatil_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-128.png": "assets/b838a218b5e9516e_Grupo-128.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/telefone-1.png": "assets/f388843ef3d06f0d_telefone.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/tela-sensivel-ao-toque.png": "assets/0f7505ec9b1e4051_tela-sensivel-ao-toque.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/chatbot-1.png": "assets/008ae6a423829f57_chatbot-1.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/chatbot.png": "assets/6dea80c85ae33994_chatbot.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Forma-1-copiar-2.png": "assets/ca43bd27ac3a106b_Forma-1-copiar-2.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-142@2x.png": "assets/a347168c342282f7_Grupo-142_2x.png", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/js/text-editor.2cbb801863b5118e0825.bundle.min.js": "assets/94654862342349e9_text-editor.2cbb801863b5118e08.js", "https://www.solucoesfama.com.br/wp-content/plugins/elementor/assets/js/video.69da75ce0dd084cc3596.bundle.min.js": "assets/d921a2f7818a5e11_video.69da75ce0dd084cc3596.bun.js", "https://www.solucoesfama.com.br/wp-json/contact-form-7/v1/contact-forms/6/feedback/schema": "assets/49d6672843687084_schema.json", "https://www.solucoesfama.com.br/wp-json/contact-form-7/v1/contact-forms/6/refill": "assets/4f53cda18c2baa0c_refill.json", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-31-at-09.46.19.jpeg": "assets/31d0675c92af11c2_WhatsApp-Image-2024-10-31-at-0.jpeg", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-de-mascara-17@2x.png": "assets/6169d5408153cc2d_Grupo-de-mascara-17_2x.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/call-center-representative-2024-08-27-23-09-07-utc-768x512.jpg": "assets/ae32fcfb0b806bff_call-center-representative-202.jpg", "https://www.instagram.com/_famasolucoes/": "assets/55da6d02d9070c38_file.html", "https://www.solucoesfama.com.br/privacy-policy/": "assets/510397c2f39104e0_file.html", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-140@2x-150x150.png": "assets/432cb6ae3347ad02_Grupo-140_2x-150x150.png", "https://www.solucoesfama.com.br/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.solucoesfama.com.br%2F": "assets/0adfcccb7a86ea61_embed.json", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-141@2x-150x150.png": "assets/a972889633d9fe97_Grupo-141_2x-150x150.png", "https://www.solucoesfama.com.br/quem-somos": "assets/717f2fc5964dc49d_quem-somos.html", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/cropped-Grupo-1-2-32x32.png": "assets/05caf2f1121667ee_cropped-Grupo-1-2-32x32.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-de-mascara-18-1024x386.png": "assets/9f94bef8f0c4e6e4_Grupo-de-mascara-18-1024x386.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-de-mascara-18-768x289.png": "assets/1676a96ec13313f8_Grupo-de-mascara-18-768x289.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-de-mascara-18-300x113.png": "assets/d79e6c830c3cae96_Grupo-de-mascara-18-300x113.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/cropped-Grupo-1-2-180x180.png": "assets/ac6506a293b951a9_cropped-Grupo-1-2-180x180.png", "https://www.solucoesfama.com.br/comments/feed/": "assets/b090b385f1052e57_file", "https://www.linkedin.com/company/famasolucoes/": "assets/bd407c49fce7f335_file.html", "https://www.solucoesfama.com.br": "assets/a1b59900168b15f3_file.html", "https://www.solucoesfama.com.br/feed/": "assets/eac5a948b9e2946f_file", "https://www.solucoesfama.com.br/wp-json/": "assets/367003501c6da07e_file.json", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-de-mascara-18-1536x579.png": "assets/b5f998076d15f25e_Grupo-de-mascara-18-1536x579.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/cropped-Grupo-1-2-192x192.png": "assets/2be91d307e7fad3f_cropped-Grupo-1-2-192x192.png", "https://jobs.recrutei.com.br/grupo-fama": "assets/afc27f3f386e8158_grupo-fama.html", "https://www.solucoesfama.com.br/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.solucoesfama.com.br%2F&format=xml": "assets/200bad3d5e31e1a4_embed", "https://www.solucoesfama.com.br/wp-json/wp/v2/pages/7": "assets/25b0551e10a6aca9_7.json", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/Grupo-142@2x-150x150.png": "assets/4e7fee814a027ea4_Grupo-142_2x-150x150.png", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/call-center-representative-2024-08-27-23-09-07-utc-2048x1365.jpg": "assets/4e94436124a6bd43_call-center-representative-202.jpg", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/call-center-representative-2024-08-27-23-09-07-utc-1536x1024.jpg": "assets/a2ab5e6516f74a1e_call-center-representative-202.jpg", "https://www.solucoesfama.com.br/wp-content/uploads/2024/10/call-center-representative-2024-08-27-23-09-07-utc-300x200.jpg": "assets/80e5b4cadb7f9b51_call-center-representative-202.jpg"};
// Pre-populate path+query keys: when opened via file://, JS
// resolves '/foo.js' against file://… so we lose the original
// origin. Indexing by pathname+search lets the lookup succeed.
var _add = {};
for (var _k in ASSET_MAP) {
  try { var _u = new URL(_k); _add[_u.pathname + _u.search] = ASSET_MAP[_k]; }
  catch(e){}
}
for (var _k in _add) if (!ASSET_MAP[_k]) ASSET_MAP[_k] = _add[_k];
function resolveLocal(u){
  if (!u || typeof u !== 'string') return null;
  if (u.indexOf('data:') === 0 || u.indexOf('blob:') === 0) return null;
  if (ASSET_MAP[u]) return ASSET_MAP[u];
  try {
    var url = new URL(u, location.href);
    var pq = url.pathname + url.search;
    if (ASSET_MAP[pq]) return ASSET_MAP[pq];
    // The snapshot may be opened from a subdirectory, while
    // ASSET_MAP paths are origin-rooted. Retry with the
    // document's own directory prefix stripped off.
    var dir = location.pathname.replace(/[^/]*$/, '');
    if (dir.length > 1 && pq.indexOf(dir) === 0) {
      var rel = pq.slice(dir.length - 1);
      if (ASSET_MAP[rel]) return ASSET_MAP[rel];
    }
    // Next.js image optimization wrapper — peel the inner CDN URL
    if (/_next\/image$/.test(url.pathname)) {
      var t = url.searchParams.get('url');
      if (t) {
        var dec = decodeURIComponent(t);
        if (ASSET_MAP[dec]) return ASSET_MAP[dec];
        var bare = dec.split('?')[0];
        for (var k in ASSET_MAP) {
          if (k.split('?')[0] === bare) return ASSET_MAP[k];
        }
      }
    }
  } catch(e){}
  return null;
}
function rewriteSrcset(s){
  if (!s || typeof s !== 'string') return s;
  return s.split(',').map(function(it){
    var p = it.trim().split(/\s+/);
    var loc = resolveLocal(p[0]);
    if (loc) p[0] = loc;
    return p.join(' ');
  }).join(', ');
}
// Patch property setters: el.src = '...' / el.href = '...'
// IMPORTANT: skip rewrite when the element has crossOrigin set.
// WebGL textures (UnicornStudio, Three.js, etc.) are loaded via
//   img.crossOrigin = 'anonymous'; img.src = 'https://cdn/...'
// and consumed via gl.texImage2D. file:// resources have no CORS
// headers, so rewriting to local makes WebGL reject the texture
// (Access blocked by CORS policy → black/missing 3D scene).
// Better to keep the original URL: works online, fails offline,
// matches non-patched behaviour.
function patchSetter(klass, prop, transform){
  if (!klass || !klass.prototype) return;
  var desc = Object.getOwnPropertyDescriptor(klass.prototype, prop);
  if (!desc || !desc.set) return;
  Object.defineProperty(klass.prototype, prop, {
    configurable: true,
    get: desc.get,
    set: function(v){
      try {
        if (transform === 'srcset') {
          v = rewriteSrcset(v);
        } else {
          // Captured runtime resource (UnicornStudio texture,
          // etc.) → serve as a data: URI. data: never CORS-
          // taints a WebGL canvas, unlike a file:// texture,
          // so gl.texImage2D still accepts it offline.
          var du = window.__offlineDataUri && window.__offlineDataUri(v);
          if (du) { v = du; }
          else if (!this.crossOrigin) {
            var loc = resolveLocal(v); if (loc) v = loc;
          }
        }
      } catch(e){}
      desc.set.call(this, v);
    }
  });
}
patchSetter(window.HTMLScriptElement, 'src');
patchSetter(window.HTMLLinkElement, 'href');
patchSetter(window.HTMLImageElement, 'src');
patchSetter(window.HTMLImageElement, 'srcset', 'srcset');
patchSetter(window.HTMLSourceElement, 'src');
patchSetter(window.HTMLSourceElement, 'srcset', 'srcset');
patchSetter(window.HTMLMediaElement, 'src');
patchSetter(window.HTMLIFrameElement, 'src');
// Patch setAttribute too — some libs use it instead of property set
var _setAttr = Element.prototype.setAttribute;
Element.prototype.setAttribute = function(name, value){
  try {
    if (typeof value === 'string') {
      if (name === 'src' || name === 'href') {
        var du = window.__offlineDataUri && window.__offlineDataUri(value);
        if (du) { value = du; }
        else if (!this.crossOrigin) {
          var loc = resolveLocal(value); if (loc) value = loc;
        }
      } else if (name === 'srcset' && !this.crossOrigin) {
        value = rewriteSrcset(value);
      }
    }
  } catch(e){}
  return _setAttr.call(this, name, value);
};
// Expose for the late-init script in body
window.__resolveLocal = resolveLocal;
window.__rewriteSrcset = rewriteSrcset;
})();

var cnArgs = {"ajaxUrl":"https:\/\/www.solucoesfama.com.br\/wp-admin\/admin-ajax.php","nonce":"43a4548286","hideEffect":"fade","position":"bottom","onScroll":false,"onScrollOffset":100,"onClick":false,"cookieName":"cookie_notice_accepted","cookieTime":2592000,"cookieTimeRejected":2592000,"globalCookie":false,"redirection":false,"cache":true,"revokeCookies":false,"revokeCookiesOpt":"automatic"};

//# sourceURL=cookie-notice-front-js-before


!function($){"use strict";$(document).ready(function(){$(this).scrollTop()>100&&$(".hfe-scroll-to-top-wrap").removeClass("hfe-scroll-to-top-hide"),$(window).scroll(function(){$(this).scrollTop()<100?$(".hfe-scroll-to-top-wrap").fadeOut(300):$(".hfe-scroll-to-top-wrap").fadeIn(300)}),$(".hfe-scroll-to-top-wrap").on("click",function(){$("html, body").animate({scrollTop:0},300);return!1})})}(jQuery);
!function($){'use strict';$(document).ready(function(){var bar=$('.hfe-reading-progress-bar');if(!bar.length)return;$(window).on('scroll',function(){var s=$(window).scrollTop(),d=$(document).height()-$(window).height(),p=d? s/d*100:0;bar.css('width',p+'%')});});}(jQuery);
//# sourceURL=jquery-js-after


{"prefetch":[{"source":"document","where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":["/wp-*.php","/wp-admin/*","/wp-content/uploads/*","/wp-content/*","/wp-content/plugins/*","/wp-content/themes/hello-elementor/*","/*\\?(.+)"]}},{"not":{"selector_matches":"a[rel~=\"nofollow\"]"}},{"not":{"selector_matches":".no-prefetch, .no-prefetch a"}}]},"eagerness":"conservative"}]}


wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
//# sourceURL=wp-i18n-js-after


( function( domain, translations ) {
	var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
	localeData[""].domain = domain;
	wp.i18n.setLocaleData( localeData, domain );
} )( "contact-form-7", {"translation-revision-date":"2025-05-19 13:41:20+0000","generator":"GlotPress\/4.0.1","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n > 1;","lang":"pt_BR"},"Error:":["Erro:"]}},"comment":{"reference":"includes\/js\/index.js"}} );
//# sourceURL=contact-form-7-js-translations


var wpcf7 = {
    "api": {
        "root": "https:\/\/www.solucoesfama.com.br\/wp-json\/",
        "namespace": "contact-form-7\/v1"
    },
    "cached": 1
};
//# sourceURL=contact-form-7-js-before


var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"Compartilhar no Facebook","shareOnTwitter":"Compartilhar no Twitter","pinIt":"Fixar","download":"Baixar","downloadImage":"Baixar imagem","fullscreen":"Tela cheia","zoom":"Zoom","share":"Compartilhar","playVideo":"Reproduzir v\u00eddeo","previous":"Anterior","next":"Pr\u00f3ximo","close":"Fechar","a11yCarouselPrevSlideMessage":"Slide anterior","a11yCarouselNextSlideMessage":"Pr\u00f3ximo slide","a11yCarouselFirstSlideMessage":"Este \u00e9 o primeiro slide","a11yCarouselLastSlideMessage":"Este \u00e9 o \u00faltimo slide","a11yCarouselPaginationBulletMessage":"Ir para o slide"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Dispositivos m\u00f3veis no modo retrato","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Dispositivos m\u00f3veis no modo paisagem","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet no modo retrato","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet no modo paisagem","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"Notebook","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"Tela ampla (widescreen)","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"3.26.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_swiper_latest":true,"e_nested_atomic_repeaters":true,"e_onboarding":true,"e_css_smooth_scroll":true,"hello-theme-header-footer":true,"home_screen":true,"nested-elements":true,"editor_v2":true,"e_element_cache":true,"link-in-bio":true,"floating-buttons":true},"urls":{"assets":"https:\/\/www.solucoesfama.com.br\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/www.solucoesfama.com.br\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/www.solucoesfama.com.br\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"93c3c3d7ce"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description","hello_header_logo_type":"logo","hello_header_menu_layout":"horizontal","hello_footer_logo_type":"logo"},"post":{"id":7,"title":"Fama%20%E2%80%93%20Sua%20melhor%20solu%C3%A7%C3%A3o%20em%20Contact%20Center%21%20%20Oferecemos%20solu%C3%A7%C3%B5es%20personalizadas%20para%20acelerar%20o%20crescimento%20de%20sua%20empresa%20e%20transformar%20a%20experi%C3%AAncia%20do%20cliente%20no%20seu%20neg%C3%B3cio.","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before


var WprConfig = {"ajaxurl":"https://www.solucoesfama.com.br/wp-admin/admin-ajax.php","resturl":"https://www.solucoesfama.com.br/wp-json/wpraddons/v1","nonce":"da38e69672","addedToCartText":"was added to cart","viewCart":"View Cart","comparePageID":"","comparePageURL":"https://www.solucoesfama.com.br/","wishlistPageID":"","wishlistPageURL":"https://www.solucoesfama.com.br/","chooseQuantityText":"Please select the required number of items.","site_key":"","is_admin":"","input_empty":"Please fill out this field","select_empty":"Nothing selected","file_empty":"Please upload a file","recaptcha_error":"Recaptcha Error","woo_shop_ppp":"9","woo_shop_cat_ppp":"9","woo_shop_tag_ppp":"9","is_product_category":"","is_product_tag":""};
//# sourceURL=wpr-addons-js-js-extra


/*! This file is auto-generated */
const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window._wpemojiSettings=a,"wpEmojiSettingsSupports"),s=["flag","emoji"];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a[t])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data[e])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\udde8\ud83c\uddf6","\ud83c\udde8\u200b\ud83c\uddf6")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!a(e,"\ud83e\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s[e]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),c.toString(),p.toString()].join(",")+"));",a=new Blob([e],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports[n]=e[n],a.supports.everything=a.supports.everything&&a.supports[n],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports[n]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))});
//# sourceURL=https://www.solucoesfama.com.br/wp-includes/js/wp-emoji-loader.min.js

(function(){
var IS_CSR = false;
var resolveLocal = window.__resolveLocal || function(){return null;};
var rewriteSrcset = window.__rewriteSrcset || function(s){return s;};
function fixImg(el){
  if (!el || el.tagName !== 'IMG') return;
  var src = el.getAttribute('src');
  var loc = resolveLocal(src);
  if (loc && src !== loc) el.setAttribute('src', loc);
  var ss = el.getAttribute('srcset');
  if (ss) {
    var nss = rewriteSrcset(ss);
    if (nss !== ss) el.setAttribute('srcset', nss);
  }
}
function fixAll(){ document.querySelectorAll('img').forEach(fixImg); }
function hasSlideOffset(t){
  // True if a transform indicates a 'parked off-screen' starting
  // state: translation in px (>= 30) or % (>= 5), or a matrix
  // with non-zero translation. Returns false for crossfade-only
  // companions like scale(0.9) or pure centering translateX(-50%).
  if (!t || t === 'none') return false;
  // matrix(a,b,c,d,tx,ty) — parse tx/ty; matrix3d & friends → assume slide.
  var matMatch = t.match(/matrix\(([^)]+)\)/);
  if (matMatch) {
    var parts = matMatch[1].split(',').map(function(x){return parseFloat(x.trim());});
    if (parts.length === 6) {
      if (Math.abs(parts[4]) >= 30 || Math.abs(parts[5]) >= 30) return true;
    } else { return true; }
  }
  if (/matrix3d/i.test(t)) return true;
  var px = t.match(/(-?\d+\.?\d*)px/g) || [];
  for (var i = 0; i < px.length; i++) {
    if (Math.abs(parseFloat(px[i])) >= 30) return true;
  }
  var pct = t.match(/(-?\d+\.?\d*)%/g) || [];
  for (var j = 0; j < pct.length; j++) {
    if (Math.abs(parseFloat(pct[j])) >= 5) return true;
  }
  return false;
}
function isHiddenStart(s){
  // True if the element's inline style is parked at a 'before'
  // animation state. opacity:0 alone is ambiguous (could be a
  // crossfade companion); pair it with a slide transform OR an
  // explicit visibility:hidden (GSAP/SplitType signature) to be
  // confident it's a scroll-reveal waiting to fire.
  if (s.opacity !== '0' && s.visibility !== 'hidden') return false;
  if (s.visibility === 'hidden') return true;
  return hasSlideOffset(s.transform) || hasSlideOffset(s.translate);
}
function revealEl(el){
  var s = el.style;
  s.opacity = '1';
  if (s.visibility === 'hidden') s.visibility = 'visible';
  if (s.transform) s.transform = 'none';
  if (s.translate) s.translate = 'none';
  if (s.rotate)    s.rotate = 'none';
  if (s.scale)     s.scale = 'none';
  if (s.pointerEvents === 'none') s.pointerEvents = '';
}
function snapReveal(){
  // Safety net: any 'before-state' element still hidden gets
  // forced visible. Used as a deadline pass for non-CSR mode
  // (after GSAP/etc had a chance to play) and as a final guard.
  // Skip pinned-chain elements — same reason as findScrollAnchor.
  var n = 0;
  document.querySelectorAll('[style]').forEach(function(el){
    if (!isHiddenStart(el.style)) return;
    if (isInsideFixed(el)) return;
    revealEl(el); n++;
  });
  if (window.console && n) console.log('[offline-fix] snap-revealed', n);
}
function isInsideFixed(el){
  var p = el;
  while (p && p !== document.documentElement) {
    if (getComputedStyle(p).position === 'fixed') return true;
    p = p.parentElement;
  }
  return false;
}
function findScrollAnchor(el){
  // Pinned-narrative sections (one position:fixed ancestor wrapping
  // many sequenced headings the live JS reveals one-by-one across
  // scroll progress) can't be orchestrated offline — revealing all
  // of them at once produces an overlapping mess. Skip them: leave
  // the parked state intact, matching the live site at scroll=0.
  // For sticky chains, observe the sticky container itself (fires
  // when the user has scrolled past its stuck threshold).
  if (isInsideFixed(el)) return null;
  var p = el;
  while (p && p !== document.documentElement) {
    if (getComputedStyle(p).position === 'sticky') return p;
    p = p.parentElement;
  }
  return el;
}
function progressiveReveal(){
  // CSR mode: scripts stripped → no GSAP/IO is going to fire.
  // Mimic a scroll-driven reveal: each parked element gets a
  // CSS transition + IntersectionObserver. As it enters viewport
  // we transition to the 'after' state, with a small stagger by
  // document order so SplitType chars still feel letter-by-letter.
  var targets = [];
  document.querySelectorAll('[style]').forEach(function(el){
    if (isHiddenStart(el.style)) targets.push(el);
  });
  if (!targets.length) return;
  var EASE = 'cubic-bezier(.16,1,.3,1)';
  targets.forEach(function(el){
    el.style.transition =
      'opacity .6s ' + EASE + ', transform .6s ' + EASE + ', ' +
      'translate .6s ' + EASE + ', scale .6s ' + EASE + ', ' +
      'visibility 0s linear';
  });
  if (typeof IntersectionObserver === 'undefined') {
    targets.forEach(revealEl);
    return;
  }
  // Group targets by their scroll anchor. Anchors in sticky
  // sections share one observation point — when that anchor
  // intersects, we reveal all its parked descendants.
  // Targets with null anchor (inside position:fixed) are skipped.
  var groups = new Map();
  targets.forEach(function(el){
    var anchor = findScrollAnchor(el);
    if (!anchor) return;
    if (!groups.has(anchor)) groups.set(anchor, []);
    groups.get(anchor).push(el);
  });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (!entry.isIntersecting) return;
      var children = groups.get(entry.target) || [entry.target];
      children.sort(function(a, b){
        var pos = a.compareDocumentPosition(b);
        return (pos & Node.DOCUMENT_POSITION_FOLLOWING) ? -1 : 1;
      });
      children.forEach(function(child, i){
        var delay = Math.min(i * 18, 700);
        setTimeout(function(){ revealEl(child); }, delay);
      });
      io.unobserve(entry.target);
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -8% 0px' });
  groups.forEach(function(_, anchor){ io.observe(anchor); });
  // Deadline guard: anything that never intersects still gets revealed.
  setTimeout(snapReveal, 8000);
}
function initUnicornStudio(){
  // Captured page already has the loaded UMD script + the inline
  // loader that says `if(!window.UnicornStudio)…`. The loader bails
  // because UnicornStudio is already defined, so init() never runs.
  if (window.UnicornStudio && typeof window.UnicornStudio.init === 'function'
      && !window.UnicornStudio.isInitialized) {
    try { window.UnicornStudio.init(); window.UnicornStudio.isInitialized = true; }
    catch(e){ if(window.console) console.warn('[offline-fix] UnicornStudio init failed:', e); }
  }
}
// Initial img sweep + observer for hydration-time updates
fixAll();
var obs = new MutationObserver(function(muts){
  for (var i = 0; i < muts.length; i++) {
    var m = muts[i];
    if (m.type === 'attributes' && m.target.tagName === 'IMG') fixImg(m.target);
    for (var j = 0; j < m.addedNodes.length; j++) {
      var n = m.addedNodes[j];
      if (n && n.nodeType === 1) {
        if (n.tagName === 'IMG') fixImg(n);
        if (n.querySelectorAll) n.querySelectorAll('img').forEach(fixImg);
      }
    }
  }
});
obs.observe(document, {childList:true, subtree:true,
  attributes:true, attributeFilter:['src','srcset']});
setTimeout(fixAll, 1000);
setTimeout(fixAll, 3000);
var go = function(){
  // CSR: scripts stripped, so 'before-state' elements stay parked
  // forever unless we do something. Use IntersectionObserver to
  // reveal them progressively as the user scrolls — preserves the
  // scroll-triggered animation feel for SplitType chars, etc.
  // Non-CSR: GSAP/Framer may still play; let them, then catch any
  // leftovers with a snap pass at 5 s.
  if (IS_CSR) progressiveReveal();
  else setTimeout(snapReveal, 5000);
  initUnicornStudio();
  setTimeout(initUnicornStudio, 500);
  setTimeout(initUnicornStudio, 2000);
};
if (document.readyState === 'complete') go();
else window.addEventListener('load', go);
})();