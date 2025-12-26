


export default function () {
    
    const handel =()=> {
const currentTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
document.documentElement.classList.toggle("dark");
localStorage.setItem("theme", currentTheme)
    }
    
    return(
        <button onClick={handel}>
click
        </button>
    )
}