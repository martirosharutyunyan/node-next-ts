import Link from 'next/link';



function Layout({ children }):JSX.Element{
    return (
        <div>
            <nav>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/posts'><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{` 
                nav {
                    position : fixed;
                    height: 60px;
                    left:0;
                    top:0;
                    right:0;
                    background:darkblue;
                    diplay:  flex;
                    justify-content: space-around;
                    align-items: center;
                }

                nav a {
                    color: #fff;
                    text-decoration: none;
                }

                main {
                    margin-top: 60px;
                }


            `}</style>
            {/* jsx-ic heto karelia global grel ete uzumeq vor mer grac stilery orinak navy gorci bolor componentneri hamar <style jsx global></style> */}
        </div>
    )
}
export default Layout;