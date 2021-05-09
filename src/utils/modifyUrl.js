const modifyUrl = (fullUrl, actualProp) => {
    let url = []
    let photo_props = []
    if(fullUrl){
        url = fullUrl.split("?")
        
        if(url[1]){
            let parts = url[1].split("&")
            parts.forEach(part => {
                if (!part.includes(actualProp)) {
                    photo_props.push(part)
                }
            });
        }
    }

    return {url: url[0], photo_props: photo_props}
}

export default modifyUrl
