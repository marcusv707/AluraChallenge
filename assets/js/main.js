const inputColor = document.querySelector('[data-input-color]')
const codeBackground = document.querySelector('[data-code-background')

inputColor.addEventListener('input', function () {
    codeBackground.style.background = this.value
})

const linguagem = document.querySelector('[data-select-linguagem]')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('[data-button-highlight]')

function aplicaHighlight() {
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML = `<pre><code class="code__window__area hljs ${linguagem.value}" contenteditable="true" spellcheck="false" aria-label="Editor de código"></code><pre>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', aplicaHighlight)

const botaoMenu = document.querySelector('[data-button-menu]')
const menu = document.querySelector('[data-menu]')

botaoMenu.addEventListener('click', function () {
    if (menu.className == "menu") {
        this.firstElementChild.setAttribute("src", "./assets/images/icon-close.svg")
        menu.className = "hide-menu"
    } else {
        this.firstElementChild.setAttribute("src", "./assets/images/icon-menu.svg")
        menu.className = "menu"
    }
    console.log("chamou evento")
})