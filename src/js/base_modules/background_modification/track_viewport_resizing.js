import * as change_bg from "./change_background-image.js";

const bg_container = document.querySelector( ".background-modification[data-background]" )
const image_block =bg_container.querySelector("* > img")


const attributes = bg_container.dataset.background.split( "," )
const width = attributes[ 0 ]
const image_path = attributes[ 1 ]



const watch = new change_bg.WatchViewPortResizing(width, image_path, image_block)


// window.addEventListener( "resize", function ()
// {
// 	watch.watchModification(this.window.innerWidth)
// })


