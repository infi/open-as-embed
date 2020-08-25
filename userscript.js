// ==UserScript==
// @name     Youtube Open in Embed
// @version  1
// @grant    none
// @include https://www.youtube.com/*
// ==/UserScript==
setTimeout(() => {
  const des = document.querySelector("div#description")
  const br = document.createElement("br")
  const a = document.createElement("button")
  a.innerText = "Open as Embed"
  a.onclick = () => {
  	const s = new URLSearchParams(window.location.search)
    window.location.assign("/embed/"+s.get("v"))
  }
  des.appendChild(br)
  des.appendChild(a)
}, 2500)

