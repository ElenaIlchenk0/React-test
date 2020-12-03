export const pagesRender = (countPages, properties) => {
    const arr =[];

    for(let i = 1; i <= countPages; i++) {
        arr.push(
            <div 
                style={{ color: (properties.activePage === i) ? '#333' : 'grey' }}
                onClick={() => properties.clickHandler(i)}
                key={i}>
                    {i}
            </div>
        );
    }

    return arr;
}
