import {content} from '../Content';
import '../assests/CSS/styles.css';

function Header(){
    const {header} = content;
    return(
        <section id='home'>
        <div className='container'>
            <div className='row'>
                <div className='hero'>
                    <div className='text-box' data-aos='fade-right'>
                        <h1 className='first' data-aos='fade-up'>{header.firstName}</h1>
                        <h1 className='last' data-aos='fade-up'>{header.lastName}</h1>
                    </div>
                    <div className='hero-img' data-aos='fade-up'>
                        <img src={header.profileImage} alt='personal'/>
                    </div>
                </div>
                <div className='content' data-aos='fade-left'>
                    <h2 className='title'>{header.title}</h2>
                    {header.header_content.map((content, i) =>( 
                        <div
                        key={i}
                        data-aos='fade-left'
                        data-aos-delay={i * 600}
                        className={`text-center
                        ${i === 1 && " text-right"}`}
                    >
                            <p className='count'>{content.count}</p>
                            <p className='text'>{content.text}</p>
                        </div>

                    ))};
                </div>  
            </div>
        </div>
        </section>
    );
}

export default Header;