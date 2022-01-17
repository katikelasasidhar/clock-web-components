const template=document.createElement('template');
document.createElement('template');
template.innerHTML=`
<style>

.current-time {
	font-size: 100px;
	margin: auto;
}
.header{
    font-size:130px;
}
</style>

<h1 class="header"><slot name=Header /></h1>
<div class="current-time">
<span class="hour"></span>:<span class="minutes"></span>:<span class="seconds"></span>
</div>
`
let date,hour,minutes,seconds;
class DigitalClock extends HTMLElement{
constructor(){
super()
this.attachShadow({mode:'open'})
this.shadowRoot.appendChild(template.content.cloneNode(true));
 

 hour = this.shadowRoot.querySelector(".hour");
 minutes = this.shadowRoot.querySelector(".minutes");
 seconds = this.shadowRoot.querySelector(".seconds");

}
connectedCallback() {
    setInterval(() => {
        this.getTime();
    }, 1000);
}
getTime() {
    date = new Date();

    hour.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
}


}
customElements.define("digital-clock", DigitalClock);
