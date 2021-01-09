let Header = () => {
    return (
        <div>
            <h1>Blog Header</h1>
        </div>
    )
}
let Article = () => {
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Felis donec et odio pellentesque diam volutpat. In hac habitasse platea dictumst quisque sagittis purus sit. Id velit ut tortor pretium viverra suspendisse potenti nullam. Massa tempor nec feugiat nisl pretium fusce id. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Amet nisl suscipit adipiscing bibendum est. Vitae justo eget magna fermentum iaculis eu. Sagittis orci a scelerisque purus semper eget duis at tellus. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Tellus molestie nunc non blandit. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Sollicitudin nibh sit amet commodo. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Sit amet nisl purus in. Scelerisque purus semper eget duis at. Leo integer malesuada nunc vel risus commodo viverra.</p>

            <p>Nibh nisl condimentum id venenatis a. Sed sed risus pretium quam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Sit amet risus nullam eget. Fames ac turpis egestas maecenas pharetra convallis posuere. Lorem sed risus ultricies tristique nulla aliquet. Mauris rhoncus aenean vel elit scelerisque mauris. Pretium nibh ipsum consequat nisl vel pretium lectus quam. At ultrices mi tempus imperdiet nulla.</p>
        </div>
    )
}
let Footer = () => {
    return(
        <div>
            <footer>
                <p><small>Author: Lorem Ipsum</small></p>
            </footer>
        </div>
    )
}

let Blog = () => {
    return(
        <div>
            <Header />
            <Article />
            <Footer />
        </div>
    )
}


ReactDOM.render(<Blog />, document.getElementById('root'))