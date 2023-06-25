import style from './Contenido.module.css'

const Contenido = () => {

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <div className={style.info} id='about'>
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quaerat earum, voluptates, iusto atque qui tempora aliquam debitis omnis voluptatibus maxime possimus impedit! Labore accusantium aspernatur assumenda architecto, earum quia, quo minus, impedit esse nemo placeat. Ea vero laudantium eos repellat ratione placeat, labore mollitia cum ad consequuntur debitis veritatis in rerum, nihil dolores voluptatem! Aperiam illo a minus eum magni, illum eaque possimus nemo fugit dolor. Quas, dolore, sapiente cumque architecto placeat distinctio quos nisi repudiandae similique sint, nobis sunt voluptate minus ipsum commodi. Expedita, laborum? Accusantium explicabo, iure soluta culpa est repudiandae laudantium eaque suscipit eum alias commodi.</p>
                    <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LESEZLJ3IVGX5EUAOFC2G2Y7YQ.jpg" width='500px' />
                </div>

                <div className={style.info} id='location'>
                    <h2>Our Location</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique hic tenetur repudiandae? Necessitatibus accusantium dignissimos deserunt perferendis animi doloremque amet, laboriosam delectus. Laborum vitae voluptatum molestiae nulla eius quibusdam molestias in tenetur dicta doloribus! Nam odio mollitia quo aliquid perferendis nostrum, dignissimos soluta et hic debitis fuga illo laudantium molestiae?</p>
                    <img src="https://e0.pxfuel.com/wallpapers/950/179/desktop-wallpaper-maps-old-world-vintage-globe.jpg" width='500px' />
                </div>

                <div className={style.info} id='cocina'>
                    <h2>Our Cuisine</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque, sunt placeat iure beatae labore porro iusto provident consequuntur perferendis? Tempore velit vero ipsa aliquid fuga rerum voluptates dolores mollitia, est tenetur? Saepe, asperiores odio. Blanditiis labore, qui autem assumenda, architecto quasi vel doloribus nemo maxime suscipit, aperiam quisquam est distinctio recusandae doloremque? Iste corrupti, labore dolorem eaque enim magnam nulla ab aperiam tempora deleniti quia quaerat! Illo qui inventore numquam dignissimos eius architecto pariatur minus eos eum aperiam optio quasi amet nisi saepe sint exercitationem dicta quibusdam, aliquam nostrum ducimus consequuntur recusandae quia in. Ipsa ab ducimus veniam rerum!</p>
                    <img src="https://www.christopher-torrevieja.com/wp-content/uploads/2018/05/What-is-fine-dining.jpg" width='500px' />
                </div>
            </div>
        </div>
    )
}

export default Contenido