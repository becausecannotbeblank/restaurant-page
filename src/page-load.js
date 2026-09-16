export const pageLoad = () => {
    console.log("I'm here."); // works
    //build site
    const content = document.getElementById("content");
    const hr = document.createElement("hr");
    const textheaders = document.createElement("div");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const broccoli = document.createElement("div");

    textheaders.id = "textheaders";
    h1.innerHTML = "Welcome";
    h2.innerHTML = "You clearly know what's good for you";
    broccoli.id = "broccoli";

    content.appendChild(hr);
    content.appendChild(textheaders);
    textheaders.appendChild(h1);
    textheaders.appendChild(h2);
    content.appendChild(broccoli);
}