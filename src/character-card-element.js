import { LitElement, css, html } from "lit";

export class CharacterCardElement extends LitElement {

    constructor() {
        super()
    }

    static get properties() {
        return {
            id:{type:String},
            
            age:{type:String},

            birthdate:{type:String},

            gender:{type:String},

            name:{type:String},
            
            occupation:{type:String},

            portrait_path:{type:String},

            phrases:{type:String},
        
            status:{type:String},
        }
    }


render() {
    return html`
    <div class="character">
      <h1>Id:${this.id}</h1>
        <h1>Name: ${this.name}</h1>
        <h3>Age: ${this.age}</h3>
        <h3>Gender: ${this.gender}</h3>
        <h3>Occupation: ${this.occupation}</h3>
        <h3>Phrases: ${this.phrases}</h3>
        <img src="${this.portrait_path}">
        <h3>Status: ${this.status}</h3>
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
    
          button {
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            font-family: inherit;
            background-color: #1a1a1a;
            cursor: pointer;
            transition: border-color 0.25s;
          }
          button:hover {
            border-color: #646cff;
          }
          button:focus,
          button:focus-visible {
            outline: 4px auto -webkit-focus-ring-color;
          }
    
          @media (prefers-color-scheme: light) {
            a:hover {
              color: #747bff;
            }
            button {
              background-color: #f9f9f9;
            }
          }
    
          .character{
            background-color:rgb(36, 88, 157);
            width:30vw;
            flex-direction:row
          } 
    
        `
} 

}
window.customElements.define('character-card-element', CharacterCardElement)