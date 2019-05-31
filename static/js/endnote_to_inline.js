//definitions
let content_area = '#content-core'
//div#parent-fieldname-text, .mosaic-tile-content'
let refs_selector = 'a[id^="_ednref"],a[href$="sym"]'
let ps_selector = content_area+' > p';
let last_offset = 0;

// get all references to endnotes
let the_refs = [].slice.call(document.querySelectorAll(refs_selector));
let the_ps = [].slice.call(document.querySelectorAll(ps_selector));
let note_content = document.querySelector(content_area);
// hide to dodge reflow bugs see: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
note_content.style.display = 'none';

for (let paragraph of the_ps){
 paragraph.style.position = "relative";   
}
    
for (let ref of the_refs){
    // extract the id from the href
        // ref.getBoundingClientRect().top;
    let target_id = ref.getAttribute('href').slice(1);
    let target = document.getElementById(target_id);
    target.removeAttribute('href');
    let target_parent = target.parentElement;
    target_parent.classList.add('is_note');
    target_parent.style.color = 'black';
    let current_offset = target_parent.offsetTop;
    if (last_offset == current_offset){ 
         // ref.style.top = current_offset+10+'px';
         console.log(ref);
         }
    else {
        last_offset = current_offset;
    }
    ref.style.color = '#B31B1D';
    ref.removeAttribute('href');
    ref.appendChild(target_parent);
    ref.classList.add('is_note_wrapper');
//    distance_from_top = distance_from_top + 30;

}
if (the_refs.length > 0){
    note_content.classList.add('is_note_content');

    note_content.addEventListener('click', function(event){
       // horrible shortcut approach to check
       // nested elements up to 3 deep if they have 
       // a parent containing 'is_note_wrappper'
       let note_state = "want-open";
       let target_el = event.target.parentElement;
       if (event.target.parentElement.classList.contains('is_note_wrapper')){
           note_state = "want-close";
       }
       if (event.target.parentElement.parentElement.classList.contains('is_note_wrapper')){
           note_state = "want-close";
           target_el = event.target.parentElement.parentElement;
       }
       if (event.target.parentElement.parentElement.parentElement.classList.contains('is_note_wrapper')){
       
           note_state = "want-close";
           target_el = event.target.parentElement.parentElement.parentElement;
       }
       if (note_state === "want-close"){
           // close note
           if (target_el.classList.contains('is_open')) {
             target_el.classList.remove('is_open');
           }  
           else
           {
                    // close all other notes                
                    let notes = [].slice.call(document.querySelectorAll('.is_note_wrapper'));
                    notes.map(
                        note => note.classList.remove('is_open')
                    )   
               // open note
                target_el.classList.add('is_open'); 
           }     
       }
    },false);
}

note_content.style.display = 'block';