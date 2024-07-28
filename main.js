let open = document.getElementById("open");
let close = document.getElementById("close");
let pop = document.querySelector(".message");
let done = document.getElementById("done");

open.onclick = ()=>{
	pop.classList.add("active");
};

close.onclick = ()=> {
	pop.classList.remove("active");
}
done.onclick = ()=> {
	pop.classList.remove("active");
}


