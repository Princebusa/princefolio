


export default function () {
    
    const handel =()=> {
 const isDark = document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", !isDark); // Toggle dark class
        document.documentElement.classList.toggle("light", isDark); // Add light class if dark is removed
        localStorage.setItem("theme", isDark ? "light" : "dark");
    }
    
    return(
        <button onClick={handel}>
click
        </button>
    )
}