webpackJsonp([25],{"5jhc":function(a,e,t){"use strict";function r(a){t("ZGpd")}Object.defineProperty(e,"__esModule",{value:!0});var s=t("oAV5"),c=(t("NC6I"),t("r4Fr")),i={data:function(){return{marketCount:{},price:0,minPrice:0,captcha:"",captchaSrc:"/api/captcha?time="+(new Date).getTime(),wantDialog:!1,wantId:this.$route.query.wantid,want:this.$route.query.want,wantStar:this.$route.query.wantstar||"1",token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):localStorage.getItem("token"),cardList:[],myCard:{},cardPage:Number(this.$route.query.page)||1,cardTotle:0,pageChangeing:!1,searchForm:{name:this.$route.query.name||"name",text:decodeURIComponent(this.$route.query.text||""),star:this.$route.query.star||"0",sort:this.$route.query.sort||"0",ihave:this.$route.query.ihave||"0"},loadingMarket:!0,seledCardPackage:this.$route.query.packageId||"-1",cardPackage:[{name:"加载中...",packageId:"-1"}]}},created:function(){this.getCardPackage(),this.searchMarketCount(),"1"==this.want&&this.calMinPrice()},mounted:function(){this.$emit("l2dMassage","这里可以购买由玩家贩卖的卡牌，不知道有没有你心仪的卡呀！")},methods:{searchMarketCount:function(){var a=this;this.marketCount={},c.a.searchMarketCount({token:this.token}).then(function(e){if(0==e.data.code)a.$message.error(e.data.msg);else if(1==e.data.code){var t=e.data.data,r={};t.forEach(function(a){r[a._id]=a.count}),a.marketCount=r}})},getCardPackage:function(){var a=this;c.a.searchcardpackage({sortType:"default"}).then(function(e){0==e.data.code?a.$message.error(e.data.msg):1==e.data.code&&(a.cardPackage=e.data.data,a.cardPackage=Object(s.g)(a.cardPackage,e.data.sortData,"default"),a.cardPackage.length>0&&"-1"===a.seledCardPackage&&(a.seledCardPackage=a.cardPackage[0].packageId),a.getUserCard())})},wantCard:function(){var a=this,e={token:this.token,price:this.price,captcha:this.captcha,cardId:this.wantId};c.a.wantcard(e).then(function(e){a.captchaUpdata(),a.loadingMarket=!1,0==e.data.code?a.$message.error(e.data.msg):1==e.data.code&&(a.$message({message:e.data.msg,type:"success"}),a.wantDialog=!1)})},calMinPrice:function(){6==this.wantStar?this.minPrice=600:5==this.wantStar?this.minPrice=200:4==this.wantStar?this.minPrice=90:this.minPrice=30},captchaUpdata:function(){this.captchaSrc="/api/captcha?time="+(new Date).getTime()},haveCardCheck:function(a){var e=this.myCard[a];return e||0},getUserCard:function(){var a=this;c.a.searchcardbytoken({token:this.token,packageId:this.seledCardPackage}).then(function(e){if(0==e.data.code)a.$message.error(e.data.msg);else if(1==e.data.code){e.data;e.data.card&&(a.myCard=e.data.cardCount),a.getUserMarket()}})},buyCard:function(a){var e=this.haveCardCheck(a.cardId);this.$router.push({name:"cardDetail",query:{type:"buy",have:e,card:a.cardId,price:a.price,time:a.time,id:a._id,packageId:a.packageId,star:a.star,title:encodeURIComponent(a.title),name:encodeURIComponent(a.name)}})},cardPageChange:function(a){this.cardPage=a,this.getUserMarket(),this.$router.replace({name:"buyCard",query:{page:a,name:this.searchForm.name,text:encodeURIComponent(this.searchForm.text),star:this.searchForm.star,sort:this.searchForm.sort,have:this.searchForm.ihave,packageId:this.seledCardPackage}})},getUserMarket:function(){var a=this,e={type:"search",token:this.token,page:this.cardPage,name:this.searchForm.name,text:this.searchForm.text,star:this.searchForm.star,sort:this.searchForm.sort,have:this.searchForm.ihave,packageId:this.seledCardPackage};c.a.marketbuy(e).then(function(e){a.loadingMarket=!1,0==e.data.code?a.$message.error(e.data.msg):1==e.data.code&&(0===e.data.data.length&&1!==a.cardPage&&(a.cardPage=1,a.$router.replace({name:"buyCard",query:{page:a.cardPage,name:a.searchForm.name,text:encodeURIComponent(a.searchForm.text),star:a.searchForm.star,sort:a.searchForm.sort,ihave:a.searchForm.ihave}}),a.getUserMarket()),e.data.data.length>0&&(a.pageChangeing=!0),a.cardList=[],setTimeout(function(){a.pageChangeing=!1,a.cardList=e.data.data,a.$route.query.page&&Object(s.j)(250,200)},100),a.cardTotle=e.data.totle)})},search:function(){this.searchMarketCount(),this.cardPage=1,this.$router.replace({name:"buyCard",query:{page:this.cardPage,name:this.searchForm.name,text:encodeURIComponent(this.searchForm.text),star:this.searchForm.star,sort:this.searchForm.sort,ihave:this.searchForm.ihave,packageId:this.seledCardPackage}}),this.getUserCard()},clearSearch:function(){this.cardPage=1,this.searchForm={name:"name",text:"",star:"0",sort:"0"},this.$router.replace({name:"buyCard",query:{page:this.cardPage,name:this.searchForm.name,text:encodeURIComponent(this.searchForm.text),star:this.searchForm.star,sort:this.searchForm.sort}}),this.getUserMarket()},PrefixInteger_:function(a,e){return Object(s.a)(a,e)}}},n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"wm_market_content_body"},[t("div",{staticClass:"wm_market_buy_search_body"},[t("div",{staticClass:"wm_market_buy_search_box"},[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:a.searchForm}},[t("el-form-item",{attrs:{label:"关键词"}},[t("el-input",{staticClass:"wm_market_buy_search_slot_input",attrs:{placeholder:"请输入搜索内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"enter",13,e.key,"Enter")?null:a.search(e)}},model:{value:a.searchForm.text,callback:function(e){a.$set(a.searchForm,"text",e)},expression:"searchForm.text"}},[t("el-select",{staticClass:"wm_market_buy_search_slot_select",attrs:{slot:"prepend",placeholder:"关键词"},slot:"prepend",model:{value:a.searchForm.name,callback:function(e){a.$set(a.searchForm,"name",e)},expression:"searchForm.name"}},[t("el-option",{attrs:{label:"角色名",value:"name"}}),a._v(" "),t("el-option",{attrs:{label:"作品",value:"title"}}),a._v(" "),t("el-option",{attrs:{label:"卡牌ID",value:"cardId"}})],1)],1)],1),a._v(" "),t("el-form-item",{attrs:{label:"选择卡包"}},[t("el-select",{staticClass:"wm_market_buy_search_select",attrs:{placeholder:"选择卡包"},model:{value:a.seledCardPackage,callback:function(e){a.seledCardPackage=e},expression:"seledCardPackage"}},a._l(a.cardPackage,function(e){return t("el-option",{key:e.packageId,attrs:{label:e.name,value:e.packageId}},[t("span",[a._v(a._s(e.name)+"("+a._s(a.marketCount[e.packageId]||0)+")")])])}),1)],1),a._v(" "),t("el-form-item",{attrs:{label:"选择星级"}},[t("el-select",{staticClass:"wm_market_buy_search_select",attrs:{placeholder:"星级"},model:{value:a.searchForm.star,callback:function(e){a.$set(a.searchForm,"star",e)},expression:"searchForm.star"}},[t("el-option",{attrs:{label:"全部",value:"0"}}),a._v(" "),t("el-option",{attrs:{label:"1星",value:"1"}}),a._v(" "),t("el-option",{attrs:{label:"2星",value:"2"}}),a._v(" "),t("el-option",{attrs:{label:"3星",value:"3"}}),a._v(" "),t("el-option",{attrs:{label:"4星",value:"4"}}),a._v(" "),t("el-option",{attrs:{label:"5星",value:"5"}}),a._v(" "),t("el-option",{attrs:{label:"6星",value:"6"}})],1)],1),a._v(" "),t("el-form-item",{attrs:{label:"设置排序"}},[t("el-select",{staticClass:"wm_market_buy_search_select",attrs:{placeholder:"排序"},model:{value:a.searchForm.sort,callback:function(e){a.$set(a.searchForm,"sort",e)},expression:"searchForm.sort"}},[t("el-option",{attrs:{label:"默认",value:"0"}}),a._v(" "),t("el-option",{attrs:{label:"价格从低到高",value:"1"}}),a._v(" "),t("el-option",{attrs:{label:"价格从高到低",value:"2"}}),a._v(" "),t("el-option",{attrs:{label:"星级从低到高",value:"3"}}),a._v(" "),t("el-option",{attrs:{label:"星级从高到底",value:"4"}})],1)],1),a._v(" "),t("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"如果指定卡牌ID搜索，此筛选条件将失效。",placement:"top"}},[t("el-form-item",{attrs:{label:"是否拥有"}},[t("el-select",{staticClass:"wm_market_buy_search_select",attrs:{placeholder:"拥有"},model:{value:a.searchForm.ihave,callback:function(e){a.$set(a.searchForm,"ihave",e)},expression:"searchForm.ihave"}},[t("el-option",{attrs:{label:"全部",value:"0"}}),a._v(" "),t("el-option",{attrs:{label:"拥有",value:"1"}}),a._v(" "),t("el-option",{attrs:{label:"未拥有",value:"2"}})],1)],1)],1),a._v(" "),t("el-form-item",{staticClass:"wm_market_buy_search_btn_body"},[t("el-button",{attrs:{type:"primary"},on:{click:a.search}},[a._v("查询")]),a._v(" "),t("el-button",{on:{click:a.clearSearch}},[a._v("取消")])],1)],1)],1)]),a._v(" "),t("div",[t("transition",{attrs:{name:"el-fade-in-linear"}},[a.cardList.length<=0&&!a.pageChangeing?t("div",{staticClass:"wm_market_card_datail_charts_empty"},[a.loadingMarket?t("span",[a._v("市场加载中")]):t("span",[a._v("市场空空如也")]),a._v(" "),"1"!=a.want||a.loadingMarket?a._e():t("div",{staticClass:"wm_market_buy_want"},[t("el-button",{attrs:{type:"primary"},on:{click:function(e){a.wantDialog=!0}}},[a._v("发布求购")])],1)]):a._e()]),a._v(" "),t("transition",{attrs:{name:"el-fade-in-linear"}},[a.cardList.length>0?t("div",{staticClass:"wm_mycard_list"},[a._l(a.cardList,function(e,r){return t("div",{key:r+1,staticClass:"wm_market_mycard_item type_mobile"},[t("div",{staticClass:"wm_getcard_img_box",on:{click:function(t){return a.buyCard(e)}}},[a.haveCardCheck(e.cardId)>0?t("div",{staticClass:"wm_getcard_img_checked"},[t("i",{staticClass:"el-icon-check"})]):a._e(),a._v(" "),t("img",{staticClass:"wm_getcard_img",attrs:{src:a.$wikimoecard.url+e.packageId+"/"+e.cardId+".jpg"}})]),a._v(" "),t("div",{staticClass:"wm_card_nums"},[t("span",{staticClass:"wm_top_info_star"},[a._v("★")]),a._v(a._s(e.price))])])}),a._v(" "),"1"!=a.want||a.loadingMarket?a._e():t("div",{staticClass:"wm_market_buy_want"},[t("el-button",{attrs:{type:"primary"},on:{click:function(e){a.wantDialog=!0}}},[a._v("发布求购")])],1)],2):a._e()]),a._v(" "),a.cardTotle?t("div",{staticClass:"wm_market_content_page"},[t("el-pagination",{staticClass:"my_card_page",attrs:{small:"",layout:"prev, pager, next",total:a.cardTotle,"current-page":a.cardPage,"page-size":20},on:{"current-change":a.cardPageChange,"update:currentPage":function(e){a.cardPage=e},"update:current-page":function(e){a.cardPage=e}}})],1):a._e()],1),a._v(" "),a.wantDialog?t("el-dialog",{staticClass:"reg_code_dialog",attrs:{title:"发布求购",visible:a.wantDialog,"append-to-body":!0,"close-on-click-modal":!1,width:"100%"},on:{"update:visible":function(e){a.wantDialog=e}}},[t("div",[t("div",{staticClass:"wm_market_card_datail_captcha"},[t("div",{staticClass:"tc mb15"},[a._v("Tip:求购信息有效期为3天。")]),a._v(" "),t("el-form",{ref:"form",attrs:{"label-width":"80px"}},[t("el-form-item",{attrs:{label:"验证码"}},[t("el-input",{attrs:{placeholder:"请输入计算结果",type:"tel"},model:{value:a.captcha,callback:function(e){a.captcha=e},expression:"captcha"}},[t("template",{slot:"append"},[t("img",{staticClass:"reg_code_img",attrs:{src:a.captchaSrc},on:{click:a.captchaUpdata}})])],2)],1),a._v(" "),t("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"期望星星"}},[t("el-input-number",{staticClass:"wm_market_card_datail_price_input_box",attrs:{size:"medium",precision:0,step:1,max:99999999,min:a.minPrice},model:{value:a.price,callback:function(e){a.price=e},expression:"price"}})],1)],1)],1)]),a._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.wantDialog=!1}}},[a._v("取消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:a.wantCard}},[a._v("求购")])],1)]):a._e()],1)},o=[],l={render:n,staticRenderFns:o},d=l,m=t("VU/8"),h=r,u=m(i,d,!1,h,null,null);e.default=u.exports},"8Jiz":function(a,e,t){e=a.exports=t("FZ+f")(!1),e.push([a.i,"\n.wm_market_buy_want {\r\n  margin-top: 10px;\n}\n.wm_market_buy_search_slot_select {\r\n  width: 100px;\n}\n.wm_market_buy_search_slot_input {\r\n  width: 240px;\n}\n.wm_market_buy_button_group {\r\n  display: block;\r\n  margin-top: 5px;\n}\r\n",""])},ZGpd:function(a,e,t){var r=t("8Jiz");"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);t("rjj0")("3be32eb0",r,!0,{})}});