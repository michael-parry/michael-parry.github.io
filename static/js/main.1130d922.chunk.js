(this.webpackJsonpChirpSAT=this.webpackJsonpChirpSAT||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"radio":"anytone878","radioName":"AnyTone 878","id":1,"channelDetails":[{"title":"Channel","class":"cellChannel"},{"title":"Name","class":"cellChannelName"},{"title":"TX","class":"cellTx"},{"title":"RX","class":"cellRx"},{"title":"Bandwidth","class":"cellBandwidth"},{"title":"Power","class":"cellPower"},{"title":"Tone","class":"cellTone"},{"title":"Zone","class":"cellZone"}],"power":["Low","Medium","High","Turbo"],"bandwidth":[12.5,25]},{"radio":"rt82","brand":"retevis","model":"rt82","radioName":"Retevis RT82","id":2,"channelDetails":[{"title":"Channel","class":"cellChannel"},{"title":"Name","class":"cellChannelName"},{"title":"TX","class":"cellTx"},{"title":"RX","class":"cellRx"},{"title":"Power","class":"cellPower"},{"title":"Tone","class":"cellTone"}],"power":["Low","High"]}]')},35:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(30),o=a.n(r),i=a(16),s=a(13),c=a(4),m=a(5),h=a(7),u=a(6),p=a(11),d=a(8),f=a(24),w=a(19),b=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"navbar navbar-expand navbar-dark bg-primary sticky-top"},l.a.createElement(i.Link,{to:"/",className:"navbar-brand"},"ChirpSAT"),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.NavLink,{to:"/about",className:"nav-link",activeClassName:"nav-link active"},"About"))),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"navbar-item"},l.a.createElement("a",{href:"https://www.twitter.com/ke8kdf/",target:"_blank",rel:"noopener noreferrer",className:"nav-link"},l.a.createElement(f.a,{icon:w.b}))),l.a.createElement("li",{className:"navbar-item"},l.a.createElement("a",{href:"https://github.com/michael-parry/chirpsat-react",target:"_blank",rel:"noopener noreferrer",className:"nav-link"},l.a.createElement(f.a,{icon:w.a})))))}}]),t}(n.Component);function g(e){var t=e.rowContents.map((function(e){return l.a.createElement("td",null,e)}));return l.a.createElement("tr",null,t)}var E=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.columns.map((function(e){return l.a.createElement("th",{value:e.class},e.title)}));return l.a.createElement("table",{className:"col col-7 col-lg-10 table table-responsive-lg table-striped table-bordered p-0 ml-auto overflow-auto"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,e)),l.a.createElement("tbody",null,l.a.createElement(g,{rowContents:this.props.rowContents})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.props.onOptionChange(e.target.value)}},{key:"render",value:function(){var e=this.props.options.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id,className:"form-control"},e.radioName)}));return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,this.props.selectInfo.label,l.a.createElement("select",{className:"form-control",name:this.props.selectInfo.inputName,onChange:this.handleChange,value:this.props.value},e)))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.props.onOptionChange(e)}},{key:"render",value:function(){return l.a.createElement("form",{className:"col col-lg-2 col-sm-5 form-group mt-2 p-0",style:{position:"fixed",top:"56px",left:0,bottom:0,overflowY:"auto"}},l.a.createElement(y,{options:this.props.radios,value:this.props.value,selectInfo:{label:"Radio",inputName:"radioInput"},onOptionChange:this.handleChange}))}}]),t}(n.Component),v=a(48),C=a(17),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(u.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(p.a)(a)),a.setHeader=a.setHeader.bind(Object(p.a)(a)),a.state={selectedOption:1,rowContents:["1","AO-91 (-2)","435.240","145.535","67.7 Hz","5 watts","12.5kHz","FM Sats"],selectedRadio:C.find((function(e){return 1===parseInt(e.id)}))},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({selectedOption:e});var t=C.find((function(t){return t.id==e}));t?this.setState({selectedRadio:t}):this.setState({selectedRadio:C[0]})}},{key:"setHeader",value:function(e){this.setState({tableRow:e})}},{key:"updateRadio",value:function(e){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(v.a,{className:"m-0 position-relative"},l.a.createElement(k,{onOptionChange:this.handleChange,Option:this.state.selectedOption,radios:C,value:this.state.selectedOption}),l.a.createElement(E,{columns:this.state.selectedRadio.channelDetails,selectedOption:this.state.selectedOption,rowContents:this.state.rowContents})))}}]),t}(n.Component),N=a(15),_=a(49),j={position:"fixed",top:"56px",width:"175px",left:0,bottom:0,overflowY:"auto"},x=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement("div",{className:"d-flex row mt-5 no-gutters justify-content-around"},l.a.createElement("aside",{className:"col-2 mt-5 d-none d-lg-block",style:j},l.a.createElement("div",{className:"list-group-flush"},l.a.createElement(N.HashLink,{to:"#what_is_it",className:"list-group-item list-group-item-action px-1"},"What is it?"),l.a.createElement(N.HashLink,{to:"#how_do_i_use_it",className:"list-group-item list-group-item-action px-1"},"How do I use it?"),l.a.createElement(N.HashLink,{to:"#how_does_it_work",className:"list-group-item list-group-item-action px-1"},"How does it work?"),l.a.createElement(N.HashLink,{to:"#who_made_it",className:"list-group-item list-group-item-action px-1"},"Who made it?"),l.a.createElement(N.HashLink,{to:"#how_can_i_help",className:"list-group-item list-group-item-action px-1"},"How can I help?"))),l.a.createElement("article",{className:"col-10 col-lg-8 offset-lg-3"},l.a.createElement("h1",{className:"display-4"},"ChirpSAT"),l.a.createElement("p",{className:"lead mb-5"},"Simple satellite programming for radio amateurs."),l.a.createElement(_.a,null,l.a.createElement("h2",null,l.a.createElement("span",{id:"what_is_it",style:{marginTop:"-60px",paddingBottom:"60px",display:"block"}}),"What is it?"),l.a.createElement("p",null,"ChirpSAT is a web tool built for the amateur radio satellite community. Its primary function is to generate channels with doppler shift correction that can be easily imported into"," ",l.a.createElement("abbr",{title:"customer programming software"},"CPS")," and programmed to a radio.")),l.a.createElement(_.a,null,l.a.createElement("h2",null,l.a.createElement("span",{id:"how_do_i_use_it",style:{marginTop:"-60px",paddingBottom:"60px",display:"block"}}),"How do I use it?"),l.a.createElement("p",null,"ChirpSAT is easy to use, from the ",l.a.createElement(N.HashLink,{to:"/"},"home")," page select your radio. This will load options specific to your radio and ensure that the .csv generated will be usable in your"," ",l.a.createElement("abbr",{title:"customer programming software"},"CPS"),"."),l.a.createElement("section",{className:"container text-muted"},l.a.createElement("p",null,"If you've never programmed your radio before, check out"," ",l.a.createElement("a",{href:"https://powerwerx.com/help/two-way-radios",target:"_blank",rel:"noopener noreferrer"},"Powerwerx")," ","or"," ",l.a.createElement("a",{href:"https://www.bridgecomsystems.com/pages/support",target:"_blank",rel:"noopener noreferrer"},"BridgeCom Systems")," ","for support on your radio and a download link to the programming software you need."),l.a.createElement("p",null,"Alternatively, you can use third-party software like"," ",l.a.createElement("a",{href:"https://chirp.danplanet.com/projects/chirp/wiki/Home",target:"_blank",rel:"noopener noreferrer"},"CHIRP"),", but proceed at your own risk, the use of third-party software introduces its own risks.")),l.a.createElement("p",null,"With your radio selected, choose which satellites you would like to create channels for and program to your radio."),l.a.createElement("p",null,"Next, choose which channel you would like to to start with. If you already have channels programmed into your radio, you may want to start with a later, empty, channel. You can always change your channel numbering on your own either with a .csv editor like Excel or within your"," ",l.a.createElement("abbr",{title:"customer programming software"},"CPS"),"."),l.a.createElement("p",null,"Satellite up-link and down-link data for the satellites you've selected will be imported, which you can manually override by selecting the satellite dropdown, and choosing edit."),l.a.createElement("p",null,"Choose the power level you would like to use when transmitting. It is always recommended that you use the least amount of power needed to make a contact, which for satellites can be as little as 2 watts."),l.a.createElement("p",null,"The last step is to configure the naming convention of your channels. By default, channels will be named by the satellite name, and their channel offset relative to the center channel."),l.a.createElement("samp",null,l.a.createElement("p",{className:"text-muted ml-5"},"AO-92 (-3)")),l.a.createElement("p",null,"You can change the naming convention using"," ",l.a.createElement("code",null,"#keywords#"),". The default naming is:"),l.a.createElement("p",{className:"ml-5"},"<",l.a.createElement("code",null,"#satellite_name#"),"(",l.a.createElement("code",null,"#channel_offset#"),")>"),l.a.createElement("p",null,"Lastly, you'll export your channels into a .csv file which you can import into the"," ",l.a.createElement("abbr",{title:"customer programming software"},"CPS")," of your choosing. If you've already created channels, you may want to export the existing channels into a .csv, and combine the two by copy pasting from one to the other, then import the new file.")),l.a.createElement(_.a,null,l.a.createElement("h2",null,l.a.createElement("span",{id:"how_does_it_work",style:{marginTop:"-60px",paddingBottom:"60px",display:"block"}}),"How does it work?"),l.a.createElement("p",null,"Satellite data is acquired from"," ",l.a.createElement("a",{href:"https://db.satnogs.org/",target:"_blank",rel:"noopener noreferrer"},"SatNOGS DB"),", and the up-link and down-link frequencies are used to automatically generate channels with doppler shift correction for easy programming."),l.a.createElement("p",null,"ChirpSAT is built with"," ",l.a.createElement("a",{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"},"React"),", styled by"," ",l.a.createElement("a",{href:"https://getbootstrap.com/",target:"_blank",rel:"noopener noreferrer"},"Bootstrap"),", and uses icons from"," ",l.a.createElement("a",{href:"https://www.fontawesome.com",target:"_blank",rel:"noopener noreferrer"},"Font Awesome"),".")),l.a.createElement(_.a,null,l.a.createElement("h2",null,l.a.createElement("span",{id:"who_made_it",style:{marginTop:"-60px",paddingBottom:"60px",display:"block"}}),"Who made it?"),l.a.createElement("p",null,"ChirpSAT was created by Michael Parry"," ",l.a.createElement("a",{href:"https://www.qrz.com/db/KE8KDF",target:"_blank",rel:"noopener noreferrer"},"KE8KDF"),". It was created to simplify the process of programming HTs that use a ",l.a.createElement("abbr",{title:"consumer programming software"},"CPS"),", which are often frustrating and tedious to use. If you'd like to keep up with the project, check it out on"," ",l.a.createElement("a",{href:"https://github.com/michael-parry/chirpsat",target:"_blank",rel:"noopener noreferrer"},"Github"),".")),l.a.createElement(_.a,null,l.a.createElement("h2",null,l.a.createElement("span",{id:"how_can_i_help",style:{marginTop:"-60px",paddingBottom:"60px",display:"block"}}),"How can I help?"),l.a.createElement("p",null,"If you're interested in helping with ChirpSAT, send an email to",l.a.createElement("a",{href:"mailto:ke8kdf@yahoo.com",target:"_blank",rel:"noopener noreferrer"},"KE8KDF@yahoo.com"),"."))),l.a.createElement("div",{class:"col-2 d-none d-lg-block"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement((function(){return l.a.createElement(i.BrowserRouter,null,l.a.createElement(s.g,null,l.a.createElement(s.d,{path:"/about"},l.a.createElement(x,null)),l.a.createElement(s.d,{path:"/"},l.a.createElement(O,null))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.1130d922.chunk.js.map