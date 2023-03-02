export default class Rithual_interface {
    main_title = '';
    main_content = null;
    internal_content = null;
    content_width = '';
    centered = false;

    constructor(main_content, main_title, content_width, centered) {
        this.main_content = document.querySelector(main_content);
        this.main_title = main_title;
        this.centered = centered;

        // setting content
        let container = document.getElementById('container');

        switch (content_width) {
            case 'large':
                container.classList.add('large-content');
            break;
            case 'medium':
                container.classList.add('medium-content');
            break;
            case 'auto':
                container.style.width = 'auto';
            break;
        
            default:
                throw new Error('Content method not allowed. Use "large-content", "medium-content" or "auto"');
            break; 
        }
        
        // setting centered content
        let body = document.querySelector('body');
        this.centered === true && body.classList.add('centered');

        // rendering main content title
        let main_title_el = document.createElement('div');
        let main_title_h1 = document.createElement('h1');
        main_title_el.classList.add('main-title');
        main_title_h1.innerText = this.main_title;
        main_title_el.appendChild(main_title_h1);
        this.main_content.appendChild(main_title_el);

        // creating internal content to future changes
        this.internal_content = document.createElement('div');
        this.internal_content.classList.add('internal-content');
        this.main_content.appendChild(this.internal_content);
    }

    render_title(title_text, bold) {
        let title = document.createElement('div');
        let h4 = document.createElement('h4');
        title.appendChild(h4);
        title.classList.add('desc-title');
        bold === true && title.classList.add('bold');
        h4.innerHTML = title_text;
        this.internal_content.appendChild(title);
    }

    render_description(description_text) {
        let description = document.createElement('div');
        description.classList.add('desc-text');
        description.innerHTML = description_text;
        this.internal_content.appendChild(description);
    }

    render_customized_content(customized_content) {
        this.internal_content.innerHTML += customized_content;
    }

    render_footer() {
        this.internal_content.innerHTML += container.innerHTML += '<footer><span class="bold">Developed by <a target="_blank" href="https://samuelalmeidadev.com.br/"><img src="assets/images/main-logo.svg" height="25" alt="Samuel Logo"></a></span></footer>'
    }

    button(text_content, type, location) {
        return type === true ? `<button type="submit" class="btn">${text_content}</button>` : `<a href="${location}" class="btn">${text_content}</a>`; 
    }

    static spinner_loader() {
        return `<div class="preloader-wrapper small active"> <div class="spinner-layer spinner-white-only"> <div class="circle-clipper left"> <div class="circle"></div> </div><div class="gap-patch"> <div class="circle"></div> </div><div class="circle-clipper right"> <div class="circle"></div> </div> </div> </div>`
    }

}