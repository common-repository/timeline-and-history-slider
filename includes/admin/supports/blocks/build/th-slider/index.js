(()=>{"use strict";const e=window.wp.blocks,t=JSON.parse('{"UU":"wpostahs/th-slider"}'),l=window.React,i=window.wp.i18n,n=window.wp.components,a=window.wp.blockEditor,r=(window.wp.element,[{value:"desc",label:(0,i.__)("Descending","timeline-and-history-slider")},{value:"asc",label:(0,i.__)("Ascending","timeline-and-history-slider")}]),s=[{value:"",label:(0,i.__)("Select Lazyload","timeline-and-history-slider")},{value:"ondemand",label:(0,i.__)("Ondemand","timeline-and-history-slider")},{value:"progressive",label:(0,i.__)("Progressive","timeline-and-history-slider")}],o=[{value:"date",label:(0,i.__)("Post Date","timeline-and-history-slider")},{value:"modified",label:(0,i.__)("Post Modified Date","timeline-and-history-slider")},{value:"title",label:(0,i.__)("Post Title","timeline-and-history-slider")},{value:"name",label:(0,i.__)("Post Slug","timeline-and-history-slider")},{value:"ID",label:(0,i.__)("Post ID","timeline-and-history-slider")},{value:"rand",label:(0,i.__)("Random","timeline-and-history-slider")}],d=[{value:"self",label:(0,i.__)("Same Window","timeline-and-history-slider")},{value:"blank",label:(0,i.__)("New Window","timeline-and-history-slider")}],m=[{value:"true",label:(0,i.__)("True","timeline-and-history-slider")},{value:"false",label:(0,i.__)("False","timeline-and-history-slider")}];(0,e.registerBlockType)(t.UU,{edit:function({attributes:e,setAttributes:t}){const _=e=>l=>t({[e]:l}),p=(0,l.createElement)(a.InspectorControls,null,(0,l.createElement)(n.PanelBody,{title:(0,i.__)("General Parameters","timeline-and-history-slider")},(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Design","timeline-and-history-slider"),value:e.design,options:[{value:"design-1",label:(0,i.__)("Design 1","timeline-and-history-slider")},{value:"design-2",label:(0,i.__)("Design 2","timeline-and-history-slider")}],onChange:_("design")}),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.ToggleControl,{label:(0,i.__)("Show Title","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Display Title. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.ToggleControl,{label:(0,i.__)("Show Date","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Display date. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.ToggleControl,{label:(0,i.__)("Show Content","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Display content. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.ToggleControl,{label:(0,i.__)("Show Full Content","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Display full content. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.RangeControl,{label:(0,i.__)("Content Words Limit","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Enter content word limit. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.TextControl,{label:(0,i.__)("Content Tail","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Display dots after the post content as continue reading. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Read More","timeline-and-history-slider"),options:m})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Show read more button. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.TextControl,{label:(0,i.__)("Read More Text","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Enter read more button text. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Link","timeline-and-history-slider"),options:m})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Enable post link to title, icon and feature image. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Link Behaviour","sp-news-and-widget"),options:d})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Choose link bahaviour. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.TextControl,{label:(0,i.__)("Media Size","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Choose WordPress registered image size. e.g thumbnail, medium, large, full. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider")))),(0,l.createElement)(n.PanelBody,{title:(0,i.__)("Design Parameters","timeline-and-history-slider"),initialOpen:!1},(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Image Position","timeline-and-history-slider"),options:[{value:"left",label:(0,i.__)("Left","timeline-and-history-slider")}]})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Set image position. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.BaseControl,{label:(0,i.__)("Background Color","timeline-and-history-slider")},(0,l.createElement)(n.ColorPalette,null))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.BaseControl,{label:(0,i.__)("Font Color","timeline-and-history-slider")},(0,l.createElement)(n.ColorPalette,null)))),(0,l.createElement)(n.PanelBody,{title:(0,i.__)("Slider Parameters","timeline-and-history-slider"),initialOpen:!1},(0,l.createElement)(n.RangeControl,{label:(0,i.__)("Slide To Show","timeline-and-history-slider"),value:e.slidestoshow,onChange:_("slidestoshow"),min:1,help:(0,i.__)("Enter number for Slide to show at a time.","timeline-and-history-slider")}),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.RangeControl,{label:(0,i.__)("First Slide","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Enter number of slide that you want to display first. Slider will initialize from that slide. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Dots","timeline-and-history-slider"),value:e.dots,options:m,onChange:_("dots"),help:(0,i.__)("Show pagination dots.","timeline-and-history-slider")}),(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Arrows","timeline-and-history-slider"),value:e.arrows,options:m,onChange:_("arrows"),help:(0,i.__)("Show prev - next arrows.","timeline-and-history-slider")}),(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Autoplay","timeline-and-history-slider"),value:e.autoplay,options:m,onChange:_("autoplay")}),"true"==e.autoplay&&(0,l.createElement)(n.RangeControl,{label:(0,i.__)("Autoplay Interval","timeline-and-history-slider"),value:e.autoplay_interval,onChange:_("autoplay_interval"),min:1,help:(0,i.__)("Enter autoplay interval speed.","timeline-and-history-slider")}),(0,l.createElement)(n.RangeControl,{label:(0,i.__)("Speed","timeline-and-history-slider"),value:e.speed,onChange:_("speed"),min:1,max:5e4}),(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Fade","timeline-and-history-slider"),value:e.fade,options:m,onChange:_("fade"),help:(0,i.__)("Enable slider fade effect.","timeline-and-history-slider")}),(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Loop","timeline-and-history-slider"),value:e.loop,options:m,onChange:_("loop"),help:(0,i.__)("Enable slider loop.","timeline-and-history-slider")}),(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Centermode","timeline-and-history-slider"),value:e.centermode,options:m,onChange:_("centermode"),help:(0,i.__)("Enable slider center mode effect.","timeline-and-history-slider")}),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Adaptive Height","timeline-and-history-slider"),options:m})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Enable slider auto height based on slide content. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Pause On Hover","timeline-and-history-slider"),options:m})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Pause slider autoplay on hover. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Pause On Focus","timeline-and-history-slider"),options:m})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Pause slider autoplay when slider element is focused. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Draggable","timeline-and-history-slider"),options:m})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Choose draggable slider for mouse effect. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Slider Lazyload","timeline-and-history-slider"),value:e.lazyload,options:s,onChange:_("lazyload"),help:(0,i.__)("Select option to use lazy loading in slider.","timeline-and-history-slider")})),(0,l.createElement)(n.PanelBody,{title:(0,i.__)("Query Parameters","timeline-and-history-slider"),initialOpen:!1},(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Post Type","timeline-and-history-slider"),options:[{value:"",label:(0,i.__)("Select Post Type","timeline-and-history-slider")}]})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Select post type. Leave empty to work with `timeline` post. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.RangeControl,{label:(0,i.__)("Limit","timeline-and-history-slider"),value:e.limit,onChange:_("limit"),min:-1,help:(0,i.__)("Enter number of logos to be displayed. Enter -1 to display all.","timeline-and-history-slider")}),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Order By","timeline-and-history-slider"),options:o})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Select order type. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Order","timeline-and-history-slider"),options:r})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("You can pass multiple ids with comma seperated. You can find id at relevant category listing page. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.TextControl,{label:(0,i.__)("Display Specific Category","timeline-and-history-slider"),value:e.category,onChange:_("category"),help:(0,l.createElement)("span",{title:(0,i.__)("You can pass multiple ids with comma seperated. You can find id at relevant category listing page.","timeline-and-history-slider")},(0,i.__)("Enter category id to display categories wise.","timeline-and-history-slider")," [?]")}),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.SelectControl,{label:(0,i.__)("Display Child Category","timeline-and-history-slider"),options:m})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("If you are using parent category then whether to display child category timeline or not. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.TextControl,{label:(0,i.__)("Exclude Category","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Exclude post category. Works only if `Category` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant category listing page. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.TextControl,{label:(0,i.__)("Display Specific Posts","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Enter id of the post which you want to display. You can pass multiple ids with comma seperated. You can find id at relevant post listing page. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.TextControl,{label:(0,i.__)("Exclude Post","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Enter id of the post which you do not want to display. You can pass multiple ids with comma seperated. You can find id at relevant post listing page. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.TextControl,{label:(0,i.__)("Include Author","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Enter author id to display posts of particular author. You can pass multiple ids with comma seperated. You can find id at users listing page. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.TextControl,{label:(0,i.__)("Exclude Author","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Enter author id to hide post of particular author. Works only if `Include Author` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant users listing page. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider"))),(0,l.createElement)(n.Disabled,null,(0,l.createElement)(n.RangeControl,{label:(0,i.__)("Query Offset","timeline-and-history-slider")})),(0,l.createElement)(n.__experimentalText,null,(0,l.createElement)("span",{className:"wpos-hidden-opts-desc"},(0,i.__)("Exclude number of posts from starting. e.g if you pass 5 then it will skip first five post. Note: This will not work with limit=-1. Upgarade to ","timeline-and-history-slider"),(0,l.createElement)(n.ExternalLink,{href:WposTahs_Block.pro_link,target:"_blank"},(0,i.__)("Premium version","timeline-and-history-slider")),(0,i.__)("to get this option.","timeline-and-history-slider")))));var c=(e=>{var t=wp.blocks.getBlockAttributes("wpostahs/th-slider"),l=["content_tail"],i="";for(var n in e)e[n]="string"==typeof e[n]?e[n].trim():e[n],e.hasOwnProperty(n)&&void 0!==e[n]&&e[n]!==t[n]&&(""!==e[n]||jQuery.inArray(n,l)>=0)&&(i+=n+'="'+e[n]+'" ');return i})(e),h=(c=c.trim())?"[th-slider "+c+"]":"[th-slider]";return(0,l.createElement)("div",{...(0,a.useBlockProps)()},p,(0,l.createElement)("div",{className:"wpos-pro-guten-shrt"},(0,l.createElement)("div",{className:"wpos-pro-guten-shrt-title"},(0,l.createElement)("span",null,(0,i.__)("Timeline and History Slider"))),h,(0,l.createElement)("div",{className:"wpos-guten-shrt-footer"},(0,i.__)("Do you want to check demo of this plugin.","timeline-and-history-slider")," ",(0,l.createElement)("a",{href:WposTahs_Block.free_demo_link,target:"_blank"},(0,i.__)("Click here","timeline-and-history-slider"))),(0,l.createElement)("div",{className:"wpos-guten-shrt-footer"},(0,i.__)("Do you also want to check premium version demo of this plugin.","timeline-and-history-slider")," ",(0,l.createElement)("a",{href:WposTahs_Block.pro_demo_link,target:"_blank"},(0,i.__)("Click here","timeline-and-history-slider")))))}})})();