import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" 
            src="https://www.woodlandtrust.org.uk/media/49424/ancient-beech-trees-fagus-sylvatica-lineover-wood-second-largest-beech-tree-eng-npl01541225-nick-turner.jpg" 
            alt="" 
            />
        </div>
    )
}
