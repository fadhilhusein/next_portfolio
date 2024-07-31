export function addAnimation(scroller, scrollerInner) {
    scroller.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
    });
    let scrollerContent = Array.from(scrollerInner.children)
    console.log(scrollerInner)
    scrollerContent.forEach(items => {
        const duplicatedItem = items.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
    })

}