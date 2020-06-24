(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(e,t,n){e.exports={phonebook:"Phonebook_phonebook__1-lrT",title:"Phonebook_title__2YK_5",form:"Phonebook_form__3IAmS",formBtn:"Phonebook_formBtn__3lTlH",filterForm:"Phonebook_filterForm__EJP4O",list:"Phonebook_list__2vQeb",listItem:"Phonebook_listItem__2Adq5",listItemName:"Phonebook_listItemName__J-w_R",listItemNumber:"Phonebook_listItemNumber__3YNGr",listItemBtn:"Phonebook_listItemBtn__3_SAG"}},10:function(e,t,n){e.exports=n(15)},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=n(9),i=n(2),s=n(3),u=n(5),m=n(4),h=n(17);var b=function(){return Object(h.a)()},f=n(8),p=n(1),d=n.n(p),v=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleSubmit=function(t){t.preventDefault(),""!==t.target.elements.name.value&&(e.props.onAdd(e.state),e.setState({name:"",number:""}))},e.handleInputChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{className:d.a.form,onSubmit:this.handleSubmit},r.a.createElement("p",null,"Name"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Name..",value:t,onChange:this.handleInputChange}),r.a.createElement("p",null,"Number"),r.a.createElement("input",{type:"text",name:"number",placeholder:"Number..",value:n,onChange:this.handleInputChange}),r.a.createElement("button",{className:d.a.formBtn,type:"submit"},"Add contact"))}}]),n}(a.Component),_=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.number,a=e.onDelete;return r.a.createElement("li",{className:d.a.listItem},r.a.createElement("span",{className:d.a.listItemName},t,":"),r.a.createElement("span",{className:d.a.listItemNumber},n),r.a.createElement("button",{className:d.a.listItemBtn,onClick:a},"Delete"))}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.contacts,n=e.onDelete;return r.a.createElement("ul",{className:d.a.list},t.map((function(e){var t=e.id,a=e.name,o=e.number;return r.a.createElement(_,{key:t,name:a,number:o,onDelete:function(){return n(t)}})})))}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={filter:""},e.handleFilterChange=function(t){e.setState({filter:t.target.value},(function(){return e.props.onFilterChange(e.state)}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.filter;return r.a.createElement("div",{className:d.a.filterForm},r.a.createElement("label",null,r.a.createElement("p",null,"Find contact by name"),r.a.createElement("input",{type:"text",value:e,onChange:this.handleFilterChange})))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:""},e.saveContacts=function(){localStorage.setItem("phonebook",JSON.stringify(e.state.contacts))},e.loadContacts=function(){var t=JSON.parse(localStorage.getItem("phonebook"));t&&e.setState({contacts:t})},e.handleAddContact=function(t){var n=t.name,a=t.number;e.state.contacts.some((function(e){return e.name===n}))?alert("".concat(n," is already in contacts")):e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(l.a)(t),[{id:b(),name:n,number:a}])}}))},e.handleFilterChange=function(t){var n=t.filter;e.setState({filter:n})},e.handleDeleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.filterContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return a?n.filter((function(e){return e.name.includes(a)})):n},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.loadContacts()}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&this.saveContacts()}},{key:"render",value:function(){var e=this.state.contacts;return r.a.createElement("div",{className:d.a.phonebook},r.a.createElement("h1",{className:d.a.title},"Phonebook"),r.a.createElement(v,{onAdd:this.handleAddContact}),r.a.createElement("h2",{className:d.a.title},"Contacts"),e.length>=2&&r.a.createElement(k,{onFilterChange:this.handleFilterChange}),e.length>0&&r.a.createElement(g,{contacts:this.filterContacts(),onDelete:this.handleDeleteContact}))}}]),n}(a.Component);var E=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(C,null))};c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a61d99c7.chunk.js.map