import { LitElement, css, html } from 'lit'
import { ChildElement } from './child-1-element'
import { CharacterCardElement } from './character-card-element'
import { CharacterGetterElement } from './character-getter-element'

export class MyElement extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
      page: { type: Number },
      characters: { type: Array },

    }
  }

  constructor() {
    super()
    this.count = 0
    this.page = 1
    this.characters = []
  }

  myEventHandler() {
    this.count++
  }

  updated(changedProperties) {
    if (changedProperties.has("page")) {
      this.shadowRoot.querySelector("character-getter-element").getCharacterPage(this.page)
    }
  }

  newCharacterEventHandler(e) {
    this.characters = e.detail.results
  }

  firstPage() {
    this.page = 1
  }

  previousPage() {
    if (this.page > 1)
      this.page--
    else
      this.page = 60
  }

  nextPage() {
    if (this.page < 60)
      this.page++
    else
      this.page = 1
  }

  lastPage() {
    this.page = 60
  }

  render() {
    return html`
        <div class="card">
            <h1>
                count is ${this.count}
            </h1>
            <h1>
                Pagina ${this.page}
            </h1>
            <button @click="${this.firstPage}">Inicio</button>
            <button @click="${this.previousPage}">Anterior </button>
            <button @click="${this.nextPage}">Siguiente</button>
            <button @click="${this.lastPage}">Ultima</button>
            <child-1-element @my-event-1="${this.myEventHandler}"></child-1-element>
            <character-getter-element id="getter" @new-character-event="${this.newCharacterEventHandler}"></character-getter-element>
            <h1 id="character-name"></h1>
            <img id="character-img">
                <div id="character-list ">
                   ${this.characters.length < 1 ? '' : this.characters.map(({id,age,birthdate,gender,name,occupation,portrait_path,phrases,status}) => html`
                    <character-card-element id=${id} age=${age} birthdate=${birthdate} gender=${gender} name=${name} occupation=${occupation} portrait_path="https://cdn.thesimpsonsapi.com/200${portrait_path}" phrases=${phrases} status=${status } ></character-card-element>
                  `)}
            </div>
        </div>
        `
  }

   static get styles() {
     return css`
           :host {
           max-width: 1280px;
           margin: 0 auto;
           padding: 2rem;
           text-align: center;
         }
  
         .logo {
           height: 6em;
           padding: 1.5em;
           will-change: filter;
           transition: filter 300ms;
         }
         .logo:hover {
           filter: drop-shadow(0 0 2em #646cffaa);
         }
         .logo.lit:hover {
           filter: drop-shadow(0 0 2em #325cffaa);
         }
  
         .card {
          background-color:rgb(69, 115, 156) ;
           padding: 2em;
         }
  
         .read-the-docs {
           color: #888;
         }
  
         a {
           font-weight: 500;
           color: #646cff;
           text-decoration: inherit;
         }
         a:hover {
           color: #535bf2;
         }
  
         ::slotted(h1) {
           font-size: 3.2em;
           line-height: 1.1;
         }
  
         h1 {
           border-radius: 8px;
           border: 1px solid transparent;
           padding: 0.6em 1.2em;
           font-size: 1em;
           font-weight: 500;
           font-family: inherit;
           background-color:rgb(182, 206, 219);
           cursor: pointer;
           transition: border-color 0.25s;
         }
         h1:hover {
           border-color: #646cff;
         }
         h1:focus,
         h1:focus-visible {
           outline: 4px auto -webkit-focus-ring-color;
         }
  
         @media (prefers-color-scheme: light) {
           a:hover {
             color: #747bff;
           }
           h1 {
             background-color: #f9f9f9;
           }
         }
  
         img{
           with: 50vw;
         }
  
         .character-table{
           display:grid;
           grid-template-columns: auto auto auto;
          pading:10px;
         }
  
         .character-item{
           font-size: 30px;
           text-align:center;
         }
  
         `
    }
}

window.customElements.define('my-element', MyElement)