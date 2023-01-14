console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebarGo').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.ham').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout(() => {
        document.querySelector('.cross').style.display='inline'
    }, 300);
}
    
})