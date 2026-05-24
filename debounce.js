function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function opDebounce(func, wait, options = {}) {
    let timeout;
    let lastCall;
    let leading = options.leading || false;
    
    return function(...args) {
        const now = Date.now();
        
        if (leading && !lastCall) {
            func.apply(this, args);
            lastCall = now;
        }
        
        clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            if (!leading || (leading && now - lastCall >= wait)) {
                func.apply(this, args);
            }
            lastCall = undefined;
        }, wait);
    };
}
