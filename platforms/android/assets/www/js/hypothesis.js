// EPUBJS.Hooks.register("beforeChapterDisplay").hypothesis = function(callback, chapter){
// 
// 
//     EPUBJS.core.addScript("https://hypothes.is/app/embed.js", null, chapter.doc.head);
// 
//     if(callback) callback();
// 
// }
// 
// 
EPUBJS.Hooks.register("beforeChapterDisplay").hypothesis = function(callback, renderer){
		var folder = EPUBJS.core.folder(location.pathname);
		var cssPath = (folder + EPUBJS.cssPath) || folder;
		
		if(!renderer) return;

		// EPUBJS.core.addScript("https://hypothes.is/app/embed.js?role=guest&light=true", null, renderer.doc.head);

		EPUBJS.core.addCss(  "../../css/annotations.css", null, renderer.doc.head);

		if(callback) callback();		
};