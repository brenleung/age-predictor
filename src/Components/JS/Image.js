import React from 'react';
import "../CSS/Image.css"

export default function Image({source, size}) {
    // takes any photo and customize the size based on source and size props
    // SOURCE: must include image path
    // SIZE: include size of photo, number or with suffix accepted

    return (
        <div class="image">
            <img
                src = {source}
                width = {size}
                height = {size}
            />
        </div>
    )
}